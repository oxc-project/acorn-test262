__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 11
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 14,
              "end": 15
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 17,
                "end": 23
              },
              "start": 15,
              "end": 23
            },
            "accessibility": null,
            "static": false,
            "start": 14,
            "end": 23
          }
        ],
        "start": 12,
        "end": 25
      },
      "declare": false,
      "start": 0,
      "end": 25
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 36,
        "end": 37
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null,
            "start": 46,
            "end": 47
          },
          "typeArguments": null,
          "start": 46,
          "end": 47
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 50,
              "end": 51
            },
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
            "accessibility": null,
            "static": false,
            "start": 50,
            "end": 59
          }
        ],
        "start": 48,
        "end": 61
      },
      "declare": false,
      "start": 26,
      "end": 61
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 72,
        "end": 73
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null,
            "start": 82,
            "end": 83
          },
          "typeArguments": null,
          "start": 82,
          "end": 83
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 86,
              "end": 87
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 89,
                "end": 95
              },
              "start": 87,
              "end": 95
            },
            "accessibility": null,
            "static": false,
            "start": 86,
            "end": 95
          }
        ],
        "start": 84,
        "end": 97
      },
      "declare": false,
      "start": 62,
      "end": 97
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "cast",
        "optional": false,
        "typeAnnotation": null,
        "start": 116,
        "end": 120
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
              "start": 121,
              "end": 122
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 121,
            "end": 122
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 124,
              "end": 125
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 134,
                "end": 135
              },
              "typeArguments": null,
              "start": 134,
              "end": 135
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 124,
            "end": 135
          }
        ],
        "start": 120,
        "end": 136
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
          "start": 137,
          "end": 141
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "test",
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
                        "start": 153,
                        "end": 154
                      },
                      "typeArguments": null,
                      "start": 153,
                      "end": 154
                    },
                    "start": 151,
                    "end": 154
                  },
                  "start": 150,
                  "end": 154
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypePredicate",
                  "parameterName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 159,
                    "end": 160
                  },
                  "asserts": false,
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
                        "start": 164,
                        "end": 165
                      },
                      "typeArguments": null,
                      "start": 164,
                      "end": 165
                    },
                    "start": 164,
                    "end": 165
                  },
                  "start": 159,
                  "end": 165
                },
                "start": 156,
                "end": 165
              },
              "start": 149,
              "end": 165
            },
            "start": 147,
            "end": 165
          },
          "start": 143,
          "end": 165
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
            "start": 168,
            "end": 169
          },
          "typeArguments": null,
          "start": 168,
          "end": 169
        },
        "start": 166,
        "end": 169
      },
      "body": null,
      "expression": false,
      "start": 99,
      "end": 170
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "isC",
        "optional": false,
        "typeAnnotation": null,
        "start": 189,
        "end": 192
      },
      "generator": false,
      "async": false,
      "declare": true,
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
                "start": 196,
                "end": 197
              },
              "typeArguments": null,
              "start": 196,
              "end": 197
            },
            "start": 194,
            "end": 197
          },
          "start": 193,
          "end": 197
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 200,
            "end": 201
          },
          "asserts": false,
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
                "start": 205,
                "end": 206
              },
              "typeArguments": null,
              "start": 205,
              "end": 206
            },
            "start": 205,
            "end": 206
          },
          "start": 200,
          "end": 206
        },
        "start": 198,
        "end": 206
      },
      "body": null,
      "expression": false,
      "start": 172,
      "end": 207
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null,
        "start": 218,
        "end": 220
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
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 224,
                "end": 225
              },
              "typeArguments": null,
              "start": 224,
              "end": 225
            },
            "start": 222,
            "end": 225
          },
          "start": 221,
          "end": 225
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
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
                "start": 230,
                "end": 231
              },
              "typeArguments": null,
              "start": 230,
              "end": 231
            },
            "start": 228,
            "end": 231
          },
          "start": 227,
          "end": 231
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 245,
                  "end": 247
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "cast",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 250,
                    "end": 254
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 255,
                      "end": 256
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "isC",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 258,
                      "end": 261
                    }
                  ],
                  "optional": false,
                  "start": 250,
                  "end": 262
                },
                "definite": false,
                "start": 245,
                "end": 262
              }
            ],
            "declare": false,
            "start": 239,
            "end": 263
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
                  "name": "x2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 289,
                  "end": 291
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "cast",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 294,
                    "end": 298
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 299,
                      "end": 300
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "isC",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 302,
                      "end": 305
                    }
                  ],
                  "optional": false,
                  "start": 294,
                  "end": 306
                },
                "definite": false,
                "start": 289,
                "end": 306
              }
            ],
            "declare": false,
            "start": 283,
            "end": 307
          }
        ],
        "start": 233,
        "end": 324
      },
      "expression": false,
      "start": 209,
      "end": 324
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "useA",
        "optional": false,
        "typeAnnotation": null,
        "start": 343,
        "end": 347
      },
      "generator": false,
      "async": false,
      "declare": true,
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
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 351,
                "end": 352
              },
              "typeArguments": null,
              "start": 351,
              "end": 352
            },
            "start": 349,
            "end": 352
          },
          "start": 348,
          "end": 352
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 355,
          "end": 359
        },
        "start": 353,
        "end": 359
      },
      "body": null,
      "expression": false,
      "start": 326,
      "end": 360
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "consume",
        "optional": false,
        "typeAnnotation": null,
        "start": 379,
        "end": 386
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
              "start": 387,
              "end": 388
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 387,
            "end": 388
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 390,
              "end": 391
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 400,
                "end": 401
              },
              "typeArguments": null,
              "start": 400,
              "end": 401
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 390,
            "end": 401
          }
        ],
        "start": 386,
        "end": 402
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "t",
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
                "start": 406,
                "end": 407
              },
              "typeArguments": null,
              "start": 406,
              "end": 407
            },
            "start": 404,
            "end": 407
          },
          "start": 403,
          "end": 407
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "u",
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
                "start": 412,
                "end": 413
              },
              "typeArguments": null,
              "start": 412,
              "end": 413
            },
            "start": 410,
            "end": 413
          },
          "start": 409,
          "end": 413
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "f",
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
                        "start": 422,
                        "end": 423
                      },
                      "typeArguments": null,
                      "start": 422,
                      "end": 423
                    },
                    "start": 420,
                    "end": 423
                  },
                  "start": 419,
                  "end": 423
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 428,
                  "end": 432
                },
                "start": 425,
                "end": 432
              },
              "start": 418,
              "end": 432
            },
            "start": 416,
            "end": 432
          },
          "start": 415,
          "end": 432
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 435,
          "end": 439
        },
        "start": 433,
        "end": 439
      },
      "body": null,
      "expression": false,
      "start": 362,
      "end": 440
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null,
        "start": 451,
        "end": 453
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
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
                "start": 457,
                "end": 458
              },
              "typeArguments": null,
              "start": 457,
              "end": 458
            },
            "start": 455,
            "end": 458
          },
          "start": 454,
          "end": 458
        },
        {
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
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 463,
                "end": 464
              },
              "typeArguments": null,
              "start": 463,
              "end": 464
            },
            "start": 461,
            "end": 464
          },
          "start": 460,
          "end": 464
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "consume",
                "optional": false,
                "typeAnnotation": null,
                "start": 472,
                "end": 479
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 480,
                  "end": 481
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 483,
                  "end": 484
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "useA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 486,
                  "end": 490
                }
              ],
              "optional": false,
              "start": 472,
              "end": 491
            },
            "directive": null,
            "start": 472,
            "end": 492
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "consume",
                "optional": false,
                "typeAnnotation": null,
                "start": 515,
                "end": 522
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 523,
                  "end": 524
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 526,
                  "end": 527
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "useA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 529,
                  "end": 533
                }
              ],
              "optional": false,
              "start": 515,
              "end": 534
            },
            "directive": null,
            "start": 515,
            "end": 535
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "consume",
                "optional": false,
                "typeAnnotation": null,
                "start": 558,
                "end": 565
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 566,
                  "end": 567
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 569,
                  "end": 570
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "useA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 572,
                  "end": 576
                }
              ],
              "optional": false,
              "start": 558,
              "end": 577
            },
            "directive": null,
            "start": 558,
            "end": 578
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "consume",
                "optional": false,
                "typeAnnotation": null,
                "start": 601,
                "end": 608
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 609,
                  "end": 610
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 612,
                  "end": 613
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "useA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 615,
                  "end": 619
                }
              ],
              "optional": false,
              "start": 601,
              "end": 620
            },
            "directive": null,
            "start": 601,
            "end": 621
          }
        ],
        "start": 466,
        "end": 641
      },
      "expression": false,
      "start": 442,
      "end": 641
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "every",
        "optional": false,
        "typeAnnotation": null,
        "start": 660,
        "end": 665
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
              "start": 666,
              "end": 667
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 666,
            "end": 667
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 669,
              "end": 670
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 679,
                "end": 680
              },
              "typeArguments": null,
              "start": 679,
              "end": 680
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 669,
            "end": 680
          }
        ],
        "start": 665,
        "end": 681
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "array",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeOperator",
              "operator": "readonly",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 698,
                    "end": 699
                  },
                  "typeArguments": null,
                  "start": 698,
                  "end": 699
                },
                "start": 698,
                "end": 701
              },
              "start": 689,
              "end": 701
            },
            "start": 687,
            "end": 701
          },
          "start": 682,
          "end": 701
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "f",
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
                        "start": 710,
                        "end": 711
                      },
                      "typeArguments": null,
                      "start": 710,
                      "end": 711
                    },
                    "start": 708,
                    "end": 711
                  },
                  "start": 707,
                  "end": 711
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypePredicate",
                  "parameterName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 716,
                    "end": 717
                  },
                  "asserts": false,
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
                        "start": 721,
                        "end": 722
                      },
                      "typeArguments": null,
                      "start": 721,
                      "end": 722
                    },
                    "start": 721,
                    "end": 722
                  },
                  "start": 716,
                  "end": 722
                },
                "start": 713,
                "end": 722
              },
              "start": 706,
              "end": 722
            },
            "start": 704,
            "end": 722
          },
          "start": 703,
          "end": 722
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "array",
            "optional": false,
            "typeAnnotation": null,
            "start": 725,
            "end": 730
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeOperator",
              "operator": "readonly",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 743,
                    "end": 744
                  },
                  "typeArguments": null,
                  "start": 743,
                  "end": 744
                },
                "start": 743,
                "end": 746
              },
              "start": 734,
              "end": 746
            },
            "start": 734,
            "end": 746
          },
          "start": 725,
          "end": 746
        },
        "start": 723,
        "end": 746
      },
      "body": null,
      "expression": false,
      "start": 643,
      "end": 747
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null,
        "start": 758,
        "end": 760
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "arr",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeOperator",
                  "operator": "readonly",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "B",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 775,
                        "end": 776
                      },
                      "typeArguments": null,
                      "start": 775,
                      "end": 776
                    },
                    "start": 775,
                    "end": 778
                  },
                  "start": 766,
                  "end": 778
                },
                {
                  "type": "TSTypeOperator",
                  "operator": "readonly",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 790,
                        "end": 791
                      },
                      "typeArguments": null,
                      "start": 790,
                      "end": 791
                    },
                    "start": 790,
                    "end": 793
                  },
                  "start": 781,
                  "end": 793
                }
              ],
              "start": 766,
              "end": 793
            },
            "start": 764,
            "end": 793
          },
          "start": 761,
          "end": 793
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "every",
                "optional": false,
                "typeAnnotation": null,
                "start": 805,
                "end": 810
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "arr",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 811,
                  "end": 814
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "isC",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 816,
                  "end": 819
                }
              ],
              "optional": false,
              "start": 805,
              "end": 820
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "arr",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 832,
                    "end": 835
                  },
                  "directive": null,
                  "start": 832,
                  "end": 836
                }
              ],
              "start": 822,
              "end": 858
            },
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "arr",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 878,
                    "end": 881
                  },
                  "directive": null,
                  "start": 878,
                  "end": 882
                }
              ],
              "start": 868,
              "end": 904
            },
            "start": 801,
            "end": 904
          }
        ],
        "start": 795,
        "end": 906
      },
      "expression": false,
      "start": 749,
      "end": 906
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "SyntaxKind",
        "optional": false,
        "typeAnnotation": null,
        "start": 935,
        "end": 945
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Block",
              "optional": false,
              "typeAnnotation": null,
              "start": 952,
              "end": 957
            },
            "initializer": null,
            "computed": false,
            "start": 952,
            "end": 957
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Identifier",
              "optional": false,
              "typeAnnotation": null,
              "start": 963,
              "end": 973
            },
            "initializer": null,
            "computed": false,
            "start": 963,
            "end": 973
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "CaseClause",
              "optional": false,
              "typeAnnotation": null,
              "start": 979,
              "end": 989
            },
            "initializer": null,
            "computed": false,
            "start": 979,
            "end": 989
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "FunctionExpression",
              "optional": false,
              "typeAnnotation": null,
              "start": 995,
              "end": 1013
            },
            "initializer": null,
            "computed": false,
            "start": 995,
            "end": 1013
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "FunctionDeclaration",
              "optional": false,
              "typeAnnotation": null,
              "start": 1019,
              "end": 1038
            },
            "initializer": null,
            "computed": false,
            "start": 1019,
            "end": 1038
          }
        ],
        "start": 946,
        "end": 1041
      },
      "const": false,
      "declare": false,
      "start": 930,
      "end": 1041
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Node",
        "optional": false,
        "typeAnnotation": null,
        "start": 1053,
        "end": 1057
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "kind",
              "optional": false,
              "typeAnnotation": null,
              "start": 1060,
              "end": 1064
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "SyntaxKind",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1066,
                  "end": 1076
                },
                "typeArguments": null,
                "start": 1066,
                "end": 1076
              },
              "start": 1064,
              "end": 1076
            },
            "accessibility": null,
            "static": false,
            "start": 1060,
            "end": 1077
          }
        ],
        "start": 1058,
        "end": 1079
      },
      "declare": false,
      "start": 1043,
      "end": 1079
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Expression",
        "optional": false,
        "typeAnnotation": null,
        "start": 1090,
        "end": 1100
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Node",
            "optional": false,
            "typeAnnotation": null,
            "start": 1109,
            "end": 1113
          },
          "typeArguments": null,
          "start": 1109,
          "end": 1113
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "_expressionBrand",
              "optional": false,
              "typeAnnotation": null,
              "start": 1116,
              "end": 1132
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 1134,
                "end": 1137
              },
              "start": 1132,
              "end": 1137
            },
            "accessibility": null,
            "static": false,
            "start": 1116,
            "end": 1138
          }
        ],
        "start": 1114,
        "end": 1140
      },
      "declare": false,
      "start": 1080,
      "end": 1140
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Declaration",
        "optional": false,
        "typeAnnotation": null,
        "start": 1151,
        "end": 1162
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Node",
            "optional": false,
            "typeAnnotation": null,
            "start": 1171,
            "end": 1175
          },
          "typeArguments": null,
          "start": 1171,
          "end": 1175
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "_declarationBrand",
              "optional": false,
              "typeAnnotation": null,
              "start": 1178,
              "end": 1195
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 1197,
                "end": 1200
              },
              "start": 1195,
              "end": 1200
            },
            "accessibility": null,
            "static": false,
            "start": 1178,
            "end": 1201
          }
        ],
        "start": 1176,
        "end": 1203
      },
      "declare": false,
      "start": 1141,
      "end": 1203
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Block",
        "optional": false,
        "typeAnnotation": null,
        "start": 1214,
        "end": 1219
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Node",
            "optional": false,
            "typeAnnotation": null,
            "start": 1228,
            "end": 1232
          },
          "typeArguments": null,
          "start": 1228,
          "end": 1232
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "kind",
              "optional": false,
              "typeAnnotation": null,
              "start": 1235,
              "end": 1239
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "SyntaxKind",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1241,
                    "end": 1251
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Block",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1252,
                    "end": 1257
                  },
                  "start": 1241,
                  "end": 1257
                },
                "typeArguments": null,
                "start": 1241,
                "end": 1257
              },
              "start": 1239,
              "end": 1257
            },
            "accessibility": null,
            "static": false,
            "start": 1235,
            "end": 1258
          }
        ],
        "start": 1233,
        "end": 1260
      },
      "declare": false,
      "start": 1204,
      "end": 1260
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Identifier",
        "optional": false,
        "typeAnnotation": null,
        "start": 1271,
        "end": 1281
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Expression",
            "optional": false,
            "typeAnnotation": null,
            "start": 1290,
            "end": 1300
          },
          "typeArguments": null,
          "start": 1290,
          "end": 1300
        },
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Declaration",
            "optional": false,
            "typeAnnotation": null,
            "start": 1302,
            "end": 1313
          },
          "typeArguments": null,
          "start": 1302,
          "end": 1313
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "kind",
              "optional": false,
              "typeAnnotation": null,
              "start": 1316,
              "end": 1320
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "SyntaxKind",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1322,
                    "end": 1332
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Identifier",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1333,
                    "end": 1343
                  },
                  "start": 1322,
                  "end": 1343
                },
                "typeArguments": null,
                "start": 1322,
                "end": 1343
              },
              "start": 1320,
              "end": 1343
            },
            "accessibility": null,
            "static": false,
            "start": 1316,
            "end": 1344
          }
        ],
        "start": 1314,
        "end": 1346
      },
      "declare": false,
      "start": 1261,
      "end": 1346
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "CaseClause",
        "optional": false,
        "typeAnnotation": null,
        "start": 1357,
        "end": 1367
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Node",
            "optional": false,
            "typeAnnotation": null,
            "start": 1376,
            "end": 1380
          },
          "typeArguments": null,
          "start": 1376,
          "end": 1380
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "kind",
              "optional": false,
              "typeAnnotation": null,
              "start": 1383,
              "end": 1387
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "SyntaxKind",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1389,
                    "end": 1399
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "CaseClause",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1400,
                    "end": 1410
                  },
                  "start": 1389,
                  "end": 1410
                },
                "typeArguments": null,
                "start": 1389,
                "end": 1410
              },
              "start": 1387,
              "end": 1410
            },
            "accessibility": null,
            "static": false,
            "start": 1383,
            "end": 1411
          }
        ],
        "start": 1381,
        "end": 1413
      },
      "declare": false,
      "start": 1347,
      "end": 1413
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "FunctionDeclaration",
        "optional": false,
        "typeAnnotation": null,
        "start": 1424,
        "end": 1443
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Declaration",
            "optional": false,
            "typeAnnotation": null,
            "start": 1452,
            "end": 1463
          },
          "typeArguments": null,
          "start": 1452,
          "end": 1463
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "kind",
              "optional": false,
              "typeAnnotation": null,
              "start": 1466,
              "end": 1470
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "SyntaxKind",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1472,
                    "end": 1482
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "FunctionDeclaration",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1483,
                    "end": 1502
                  },
                  "start": 1472,
                  "end": 1502
                },
                "typeArguments": null,
                "start": 1472,
                "end": 1502
              },
              "start": 1470,
              "end": 1502
            },
            "accessibility": null,
            "static": false,
            "start": 1466,
            "end": 1503
          }
        ],
        "start": 1464,
        "end": 1505
      },
      "declare": false,
      "start": 1414,
      "end": 1505
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "HasLocals",
        "optional": false,
        "typeAnnotation": null,
        "start": 1512,
        "end": 1521
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Block",
              "optional": false,
              "typeAnnotation": null,
              "start": 1524,
              "end": 1529
            },
            "typeArguments": null,
            "start": 1524,
            "end": 1529
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "FunctionDeclaration",
              "optional": false,
              "typeAnnotation": null,
              "start": 1532,
              "end": 1551
            },
            "typeArguments": null,
            "start": 1532,
            "end": 1551
          }
        ],
        "start": 1524,
        "end": 1551
      },
      "declare": false,
      "start": 1507,
      "end": 1552
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "canHaveLocals",
        "optional": false,
        "typeAnnotation": null,
        "start": 1570,
        "end": 1583
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "node",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Node",
                "optional": false,
                "typeAnnotation": null,
                "start": 1590,
                "end": 1594
              },
              "typeArguments": null,
              "start": 1590,
              "end": 1594
            },
            "start": 1588,
            "end": 1594
          },
          "start": 1584,
          "end": 1594
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "node",
            "optional": false,
            "typeAnnotation": null,
            "start": 1597,
            "end": 1601
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "HasLocals",
                "optional": false,
                "typeAnnotation": null,
                "start": 1605,
                "end": 1614
              },
              "typeArguments": null,
              "start": 1605,
              "end": 1614
            },
            "start": 1605,
            "end": 1614
          },
          "start": 1597,
          "end": 1614
        },
        "start": 1595,
        "end": 1614
      },
      "body": null,
      "expression": false,
      "start": 1553,
      "end": 1615
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "assertNode",
        "optional": false,
        "typeAnnotation": null,
        "start": 1634,
        "end": 1644
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
              "start": 1645,
              "end": 1646
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Node",
                "optional": false,
                "typeAnnotation": null,
                "start": 1655,
                "end": 1659
              },
              "typeArguments": null,
              "start": 1655,
              "end": 1659
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1645,
            "end": 1659
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 1661,
              "end": 1662
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 1671,
                "end": 1672
              },
              "typeArguments": null,
              "start": 1671,
              "end": 1672
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1661,
            "end": 1672
          }
        ],
        "start": 1644,
        "end": 1673
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "node",
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
                    "start": 1680,
                    "end": 1681
                  },
                  "typeArguments": null,
                  "start": 1680,
                  "end": 1681
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 1684,
                  "end": 1693
                }
              ],
              "start": 1680,
              "end": 1693
            },
            "start": 1678,
            "end": 1693
          },
          "start": 1674,
          "end": 1693
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "test",
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
                  "name": "node",
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
                        "start": 1708,
                        "end": 1709
                      },
                      "typeArguments": null,
                      "start": 1708,
                      "end": 1709
                    },
                    "start": 1706,
                    "end": 1709
                  },
                  "start": 1702,
                  "end": 1709
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypePredicate",
                  "parameterName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "node",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1714,
                    "end": 1718
                  },
                  "asserts": false,
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
                        "start": 1722,
                        "end": 1723
                      },
                      "typeArguments": null,
                      "start": 1722,
                      "end": 1723
                    },
                    "start": 1722,
                    "end": 1723
                  },
                  "start": 1714,
                  "end": 1723
                },
                "start": 1711,
                "end": 1723
              },
              "start": 1701,
              "end": 1723
            },
            "start": 1699,
            "end": 1723
          },
          "start": 1695,
          "end": 1723
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "node",
            "optional": false,
            "typeAnnotation": null,
            "start": 1734,
            "end": 1738
          },
          "asserts": true,
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
                "start": 1742,
                "end": 1743
              },
              "typeArguments": null,
              "start": 1742,
              "end": 1743
            },
            "start": 1742,
            "end": 1743
          },
          "start": 1726,
          "end": 1743
        },
        "start": 1724,
        "end": 1743
      },
      "body": null,
      "expression": false,
      "start": 1617,
      "end": 1744
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "assertNode",
        "optional": false,
        "typeAnnotation": null,
        "start": 1762,
        "end": 1772
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "node",
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
                    "name": "Node",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1779,
                    "end": 1783
                  },
                  "typeArguments": null,
                  "start": 1779,
                  "end": 1783
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 1786,
                  "end": 1795
                }
              ],
              "start": 1779,
              "end": 1795
            },
            "start": 1777,
            "end": 1795
          },
          "start": 1773,
          "end": 1795
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "test",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
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
                      "name": "node",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Node",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1811,
                            "end": 1815
                          },
                          "typeArguments": null,
                          "start": 1811,
                          "end": 1815
                        },
                        "start": 1809,
                        "end": 1815
                      },
                      "start": 1805,
                      "end": 1815
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "start": 1820,
                      "end": 1827
                    },
                    "start": 1817,
                    "end": 1827
                  },
                  "start": 1804,
                  "end": 1827
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 1831,
                  "end": 1840
                }
              ],
              "start": 1803,
              "end": 1840
            },
            "start": 1801,
            "end": 1840
          },
          "start": 1797,
          "end": 1840
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 1843,
          "end": 1847
        },
        "start": 1841,
        "end": 1847
      },
      "body": null,
      "expression": false,
      "start": 1745,
      "end": 1848
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 1859,
        "end": 1862
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "node",
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
                    "name": "FunctionDeclaration",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1869,
                    "end": 1888
                  },
                  "typeArguments": null,
                  "start": 1869,
                  "end": 1888
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "CaseClause",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1891,
                    "end": 1901
                  },
                  "typeArguments": null,
                  "start": 1891,
                  "end": 1901
                }
              ],
              "start": 1869,
              "end": 1901
            },
            "start": 1867,
            "end": 1901
          },
          "start": 1863,
          "end": 1901
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "assertNode",
                "optional": false,
                "typeAnnotation": null,
                "start": 1909,
                "end": 1919
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "node",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1920,
                  "end": 1924
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "canHaveLocals",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1926,
                  "end": 1939
                }
              ],
              "optional": false,
              "start": 1909,
              "end": 1940
            },
            "directive": null,
            "start": 1909,
            "end": 1941
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "node",
              "optional": false,
              "typeAnnotation": null,
              "start": 1978,
              "end": 1982
            },
            "directive": null,
            "start": 1978,
            "end": 1983
          }
        ],
        "start": 1903,
        "end": 2009
      },
      "expression": false,
      "start": 1850,
      "end": 2009
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "isExpression",
        "optional": false,
        "typeAnnotation": null,
        "start": 2028,
        "end": 2040
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "node",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Node",
                "optional": false,
                "typeAnnotation": null,
                "start": 2047,
                "end": 2051
              },
              "typeArguments": null,
              "start": 2047,
              "end": 2051
            },
            "start": 2045,
            "end": 2051
          },
          "start": 2041,
          "end": 2051
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "node",
            "optional": false,
            "typeAnnotation": null,
            "start": 2054,
            "end": 2058
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Expression",
                "optional": false,
                "typeAnnotation": null,
                "start": 2062,
                "end": 2072
              },
              "typeArguments": null,
              "start": 2062,
              "end": 2072
            },
            "start": 2062,
            "end": 2072
          },
          "start": 2054,
          "end": 2072
        },
        "start": 2052,
        "end": 2072
      },
      "body": null,
      "expression": false,
      "start": 2011,
      "end": 2073
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "tryCast",
        "optional": false,
        "typeAnnotation": null,
        "start": 2092,
        "end": 2099
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
              "name": "TOut",
              "optional": false,
              "typeAnnotation": null,
              "start": 2100,
              "end": 2104
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TIn",
                "optional": false,
                "typeAnnotation": null,
                "start": 2113,
                "end": 2116
              },
              "typeArguments": null,
              "start": 2113,
              "end": 2116
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2100,
            "end": 2116
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TIn",
              "optional": false,
              "typeAnnotation": null,
              "start": 2118,
              "end": 2121
            },
            "constraint": null,
            "default": {
              "type": "TSAnyKeyword",
              "start": 2124,
              "end": 2127
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 2118,
            "end": 2127
          }
        ],
        "start": 2099,
        "end": 2128
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "value",
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
                    "name": "TIn",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2136,
                    "end": 2139
                  },
                  "typeArguments": null,
                  "start": 2136,
                  "end": 2139
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 2142,
                  "end": 2151
                }
              ],
              "start": 2136,
              "end": 2151
            },
            "start": 2134,
            "end": 2151
          },
          "start": 2129,
          "end": 2151
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "test",
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
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "TIn",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2167,
                        "end": 2170
                      },
                      "typeArguments": null,
                      "start": 2167,
                      "end": 2170
                    },
                    "start": 2165,
                    "end": 2170
                  },
                  "start": 2160,
                  "end": 2170
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypePredicate",
                  "parameterName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2175,
                    "end": 2180
                  },
                  "asserts": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "TOut",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2184,
                        "end": 2188
                      },
                      "typeArguments": null,
                      "start": 2184,
                      "end": 2188
                    },
                    "start": 2184,
                    "end": 2188
                  },
                  "start": 2175,
                  "end": 2188
                },
                "start": 2172,
                "end": 2188
              },
              "start": 2159,
              "end": 2188
            },
            "start": 2157,
            "end": 2188
          },
          "start": 2153,
          "end": 2188
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "TOut",
            "optional": false,
            "typeAnnotation": null,
            "start": 2191,
            "end": 2195
          },
          "typeArguments": null,
          "start": 2191,
          "end": 2195
        },
        "start": 2189,
        "end": 2195
      },
      "body": null,
      "expression": false,
      "start": 2075,
      "end": 2196
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "bar",
        "optional": false,
        "typeAnnotation": null,
        "start": 2207,
        "end": 2210
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "node",
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
                    "name": "Identifier",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2217,
                    "end": 2227
                  },
                  "typeArguments": null,
                  "start": 2217,
                  "end": 2227
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "FunctionDeclaration",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2230,
                    "end": 2249
                  },
                  "typeArguments": null,
                  "start": 2230,
                  "end": 2249
                }
              ],
              "start": 2217,
              "end": 2249
            },
            "start": 2215,
            "end": 2249
          },
          "start": 2211,
          "end": 2249
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2263,
                  "end": 2264
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "tryCast",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2267,
                    "end": 2274
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "node",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2275,
                      "end": 2279
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "isExpression",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2281,
                      "end": 2293
                    }
                  ],
                  "optional": false,
                  "start": 2267,
                  "end": 2294
                },
                "definite": false,
                "start": 2263,
                "end": 2294
              }
            ],
            "declare": false,
            "start": 2257,
            "end": 2295
          }
        ],
        "start": 2251,
        "end": 2327
      },
      "expression": false,
      "start": 2198,
      "end": 2327
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "SyntaxKind1",
        "optional": false,
        "typeAnnotation": null,
        "start": 2362,
        "end": 2373
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "ClassExpression",
              "optional": false,
              "typeAnnotation": null,
              "start": 2380,
              "end": 2395
            },
            "initializer": null,
            "computed": false,
            "start": 2380,
            "end": 2395
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "ClassStatement",
              "optional": false,
              "typeAnnotation": null,
              "start": 2401,
              "end": 2415
            },
            "initializer": null,
            "computed": false,
            "start": 2401,
            "end": 2415
          }
        ],
        "start": 2374,
        "end": 2418
      },
      "const": true,
      "declare": false,
      "start": 2351,
      "end": 2418
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Node1",
        "optional": false,
        "typeAnnotation": null,
        "start": 2430,
        "end": 2435
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "kind",
              "optional": false,
              "typeAnnotation": null,
              "start": 2442,
              "end": 2446
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "SyntaxKind1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2448,
                  "end": 2459
                },
                "typeArguments": null,
                "start": 2448,
                "end": 2459
              },
              "start": 2446,
              "end": 2459
            },
            "accessibility": null,
            "static": false,
            "start": 2442,
            "end": 2460
          }
        ],
        "start": 2436,
        "end": 2462
      },
      "declare": false,
      "start": 2420,
      "end": 2462
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Statement1",
        "optional": false,
        "typeAnnotation": null,
        "start": 2474,
        "end": 2484
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Node1",
            "optional": false,
            "typeAnnotation": null,
            "start": 2493,
            "end": 2498
          },
          "typeArguments": null,
          "start": 2493,
          "end": 2498
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "_statementBrand",
              "optional": false,
              "typeAnnotation": null,
              "start": 2505,
              "end": 2520
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 2522,
                "end": 2525
              },
              "start": 2520,
              "end": 2525
            },
            "accessibility": null,
            "static": false,
            "start": 2505,
            "end": 2526
          }
        ],
        "start": 2499,
        "end": 2528
      },
      "declare": false,
      "start": 2464,
      "end": 2528
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ClassExpression1",
        "optional": false,
        "typeAnnotation": null,
        "start": 2540,
        "end": 2556
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Node1",
            "optional": false,
            "typeAnnotation": null,
            "start": 2565,
            "end": 2570
          },
          "typeArguments": null,
          "start": 2565,
          "end": 2570
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "kind",
              "optional": false,
              "typeAnnotation": null,
              "start": 2577,
              "end": 2581
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "SyntaxKind1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2583,
                    "end": 2594
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ClassExpression",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2595,
                    "end": 2610
                  },
                  "start": 2583,
                  "end": 2610
                },
                "typeArguments": null,
                "start": 2583,
                "end": 2610
              },
              "start": 2581,
              "end": 2610
            },
            "accessibility": null,
            "static": false,
            "start": 2577,
            "end": 2611
          }
        ],
        "start": 2571,
        "end": 2613
      },
      "declare": false,
      "start": 2530,
      "end": 2613
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ClassStatement1",
        "optional": false,
        "typeAnnotation": null,
        "start": 2625,
        "end": 2640
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Statement1",
            "optional": false,
            "typeAnnotation": null,
            "start": 2649,
            "end": 2659
          },
          "typeArguments": null,
          "start": 2649,
          "end": 2659
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "kind",
              "optional": false,
              "typeAnnotation": null,
              "start": 2666,
              "end": 2670
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "SyntaxKind1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2672,
                    "end": 2683
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ClassStatement",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2684,
                    "end": 2698
                  },
                  "start": 2672,
                  "end": 2698
                },
                "typeArguments": null,
                "start": 2672,
                "end": 2698
              },
              "start": 2670,
              "end": 2698
            },
            "accessibility": null,
            "static": false,
            "start": 2666,
            "end": 2699
          }
        ],
        "start": 2660,
        "end": 2701
      },
      "declare": false,
      "start": 2615,
      "end": 2701
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ClassLike1",
        "optional": false,
        "typeAnnotation": null,
        "start": 2708,
        "end": 2718
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "ClassExpression1",
              "optional": false,
              "typeAnnotation": null,
              "start": 2721,
              "end": 2737
            },
            "typeArguments": null,
            "start": 2721,
            "end": 2737
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "ClassStatement1",
              "optional": false,
              "typeAnnotation": null,
              "start": 2740,
              "end": 2755
            },
            "typeArguments": null,
            "start": 2740,
            "end": 2755
          }
        ],
        "start": 2721,
        "end": 2755
      },
      "declare": false,
      "start": 2703,
      "end": 2756
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "isClassLike",
        "optional": false,
        "typeAnnotation": null,
        "start": 2775,
        "end": 2786
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "node",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Node1",
                "optional": false,
                "typeAnnotation": null,
                "start": 2793,
                "end": 2798
              },
              "typeArguments": null,
              "start": 2793,
              "end": 2798
            },
            "start": 2791,
            "end": 2798
          },
          "start": 2787,
          "end": 2798
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "node",
            "optional": false,
            "typeAnnotation": null,
            "start": 2801,
            "end": 2805
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "ClassLike1",
                "optional": false,
                "typeAnnotation": null,
                "start": 2809,
                "end": 2819
              },
              "typeArguments": null,
              "start": 2809,
              "end": 2819
            },
            "start": 2809,
            "end": 2819
          },
          "start": 2801,
          "end": 2819
        },
        "start": 2799,
        "end": 2819
      },
      "body": null,
      "expression": false,
      "start": 2758,
      "end": 2820
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
            "name": "statement",
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
                      "name": "Statement1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2847,
                      "end": 2857
                    },
                    "typeArguments": null,
                    "start": 2847,
                    "end": 2857
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 2860,
                    "end": 2869
                  }
                ],
                "start": 2847,
                "end": 2869
              },
              "start": 2845,
              "end": 2869
            },
            "start": 2836,
            "end": 2869
          },
          "init": null,
          "definite": false,
          "start": 2836,
          "end": 2869
        }
      ],
      "declare": true,
      "start": 2822,
      "end": 2870
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
            "name": "maybeClassStatement",
            "optional": false,
            "typeAnnotation": null,
            "start": 2878,
            "end": 2897
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "tryCast",
              "optional": false,
              "typeAnnotation": null,
              "start": 2900,
              "end": 2907
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "statement",
                "optional": false,
                "typeAnnotation": null,
                "start": 2908,
                "end": 2917
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "isClassLike",
                "optional": false,
                "typeAnnotation": null,
                "start": 2919,
                "end": 2930
              }
            ],
            "optional": false,
            "start": 2900,
            "end": 2931
          },
          "definite": false,
          "start": 2878,
          "end": 2931
        }
      ],
      "declare": false,
      "start": 2872,
      "end": 2932
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TypeNode",
        "optional": false,
        "typeAnnotation": null,
        "start": 2981,
        "end": 2989
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Node",
            "optional": false,
            "typeAnnotation": null,
            "start": 2998,
            "end": 3002
          },
          "typeArguments": null,
          "start": 2998,
          "end": 3002
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "typeInfo",
              "optional": false,
              "typeAnnotation": null,
              "start": 3009,
              "end": 3017
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 3019,
                "end": 3025
              },
              "start": 3017,
              "end": 3025
            },
            "accessibility": null,
            "static": false,
            "start": 3009,
            "end": 3026
          }
        ],
        "start": 3003,
        "end": 3028
      },
      "declare": false,
      "start": 2971,
      "end": 3028
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "NodeArray",
        "optional": false,
        "typeAnnotation": null,
        "start": 3040,
        "end": 3049
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
              "start": 3050,
              "end": 3051
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Node",
                "optional": false,
                "typeAnnotation": null,
                "start": 3060,
                "end": 3064
              },
              "typeArguments": null,
              "start": 3060,
              "end": 3064
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3050,
            "end": 3064
          }
        ],
        "start": 3049,
        "end": 3065
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Array",
            "optional": false,
            "typeAnnotation": null,
            "start": 3074,
            "end": 3079
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
                  "start": 3080,
                  "end": 3081
                },
                "typeArguments": null,
                "start": 3080,
                "end": 3081
              }
            ],
            "start": 3079,
            "end": 3082
          },
          "start": 3074,
          "end": 3082
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "someProp",
              "optional": false,
              "typeAnnotation": null,
              "start": 3089,
              "end": 3097
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 3099,
                "end": 3105
              },
              "start": 3097,
              "end": 3105
            },
            "accessibility": null,
            "static": false,
            "start": 3089,
            "end": 3106
          }
        ],
        "start": 3083,
        "end": 3108
      },
      "declare": false,
      "start": 3030,
      "end": 3108
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "isNodeArray",
        "optional": false,
        "typeAnnotation": null,
        "start": 3127,
        "end": 3138
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
              "start": 3139,
              "end": 3140
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Node",
                "optional": false,
                "typeAnnotation": null,
                "start": 3149,
                "end": 3153
              },
              "typeArguments": null,
              "start": 3149,
              "end": 3153
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3139,
            "end": 3153
          }
        ],
        "start": 3138,
        "end": 3154
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "array",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeOperator",
              "operator": "readonly",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3171,
                    "end": 3172
                  },
                  "typeArguments": null,
                  "start": 3171,
                  "end": 3172
                },
                "start": 3171,
                "end": 3174
              },
              "start": 3162,
              "end": 3174
            },
            "start": 3160,
            "end": 3174
          },
          "start": 3155,
          "end": 3174
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "array",
            "optional": false,
            "typeAnnotation": null,
            "start": 3177,
            "end": 3182
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "NodeArray",
                "optional": false,
                "typeAnnotation": null,
                "start": 3186,
                "end": 3195
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
                      "start": 3196,
                      "end": 3197
                    },
                    "typeArguments": null,
                    "start": 3196,
                    "end": 3197
                  }
                ],
                "start": 3195,
                "end": 3198
              },
              "start": 3186,
              "end": 3198
            },
            "start": 3186,
            "end": 3198
          },
          "start": 3177,
          "end": 3198
        },
        "start": 3175,
        "end": 3198
      },
      "body": null,
      "expression": false,
      "start": 3110,
      "end": 3199
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
            "name": "types",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "operator": "readonly",
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TypeNode",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3231,
                      "end": 3239
                    },
                    "typeArguments": null,
                    "start": 3231,
                    "end": 3239
                  },
                  "start": 3231,
                  "end": 3241
                },
                "start": 3222,
                "end": 3241
              },
              "start": 3220,
              "end": 3241
            },
            "start": 3215,
            "end": 3241
          },
          "init": null,
          "definite": false,
          "start": 3215,
          "end": 3241
        }
      ],
      "declare": true,
      "start": 3201,
      "end": 3242
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
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 3250,
            "end": 3251
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "tryCast",
              "optional": false,
              "typeAnnotation": null,
              "start": 3254,
              "end": 3261
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "types",
                "optional": false,
                "typeAnnotation": null,
                "start": 3262,
                "end": 3267
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "isNodeArray",
                "optional": false,
                "typeAnnotation": null,
                "start": 3269,
                "end": 3280
              }
            ],
            "optional": false,
            "start": 3254,
            "end": 3281
          },
          "definite": false,
          "start": 3250,
          "end": 3281
        }
      ],
      "declare": false,
      "start": 3244,
      "end": 3282
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 3305
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "interface",
    "start": 0,
    "end": 9,
    "range": [
      0,
      9
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 10,
    "end": 11,
    "range": [
      10,
      11
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 12,
    "end": 13,
    "range": [
      12,
      13
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 14,
    "end": 15,
    "range": [
      14,
      15
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 15,
    "end": 16,
    "range": [
      15,
      16
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 17,
    "end": 23,
    "range": [
      17,
      23
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 24,
    "end": 25,
    "range": [
      24,
      25
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 26,
    "end": 35,
    "range": [
      26,
      35
    ]
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 36,
    "end": 37,
    "range": [
      36,
      37
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 38,
    "end": 45,
    "range": [
      38,
      45
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 46,
    "end": 47,
    "range": [
      46,
      47
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 48,
    "end": 49,
    "range": [
      48,
      49
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 50,
    "end": 51,
    "range": [
      50,
      51
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 51,
    "end": 52,
    "range": [
      51,
      52
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 53,
    "end": 59,
    "range": [
      53,
      59
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 60,
    "end": 61,
    "range": [
      60,
      61
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 62,
    "end": 71,
    "range": [
      62,
      71
    ]
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 72,
    "end": 73,
    "range": [
      72,
      73
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 74,
    "end": 81,
    "range": [
      74,
      81
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 82,
    "end": 83,
    "range": [
      82,
      83
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 84,
    "end": 85,
    "range": [
      84,
      85
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 86,
    "end": 87,
    "range": [
      86,
      87
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 87,
    "end": 88,
    "range": [
      87,
      88
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 89,
    "end": 95,
    "range": [
      89,
      95
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 96,
    "end": 97,
    "range": [
      96,
      97
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 99,
    "end": 106,
    "range": [
      99,
      106
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 107,
    "end": 115,
    "range": [
      107,
      115
    ]
  },
  {
    "type": "Identifier",
    "value": "cast",
    "start": 116,
    "end": 120,
    "range": [
      116,
      120
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 120,
    "end": 121,
    "range": [
      120,
      121
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 121,
    "end": 122,
    "range": [
      121,
      122
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 122,
    "end": 123,
    "range": [
      122,
      123
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 124,
    "end": 125,
    "range": [
      124,
      125
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 126,
    "end": 133,
    "range": [
      126,
      133
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 134,
    "end": 135,
    "range": [
      134,
      135
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 135,
    "end": 136,
    "range": [
      135,
      136
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 136,
    "end": 137,
    "range": [
      136,
      137
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 137,
    "end": 138,
    "range": [
      137,
      138
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 138,
    "end": 139,
    "range": [
      138,
      139
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 140,
    "end": 141,
    "range": [
      140,
      141
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 141,
    "end": 142,
    "range": [
      141,
      142
    ]
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 143,
    "end": 147,
    "range": [
      143,
      147
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 147,
    "end": 148,
    "range": [
      147,
      148
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 149,
    "end": 150,
    "range": [
      149,
      150
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 150,
    "end": 151,
    "range": [
      150,
      151
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 151,
    "end": 152,
    "range": [
      151,
      152
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 153,
    "end": 154,
    "range": [
      153,
      154
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 154,
    "end": 155,
    "range": [
      154,
      155
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 156,
    "end": 158,
    "range": [
      156,
      158
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 159,
    "end": 160,
    "range": [
      159,
      160
    ]
  },
  {
    "type": "Identifier",
    "value": "is",
    "start": 161,
    "end": 163,
    "range": [
      161,
      163
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 164,
    "end": 165,
    "range": [
      164,
      165
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 165,
    "end": 166,
    "range": [
      165,
      166
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 166,
    "end": 167,
    "range": [
      166,
      167
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 168,
    "end": 169,
    "range": [
      168,
      169
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 169,
    "end": 170,
    "range": [
      169,
      170
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 172,
    "end": 179,
    "range": [
      172,
      179
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 180,
    "end": 188,
    "range": [
      180,
      188
    ]
  },
  {
    "type": "Identifier",
    "value": "isC",
    "start": 189,
    "end": 192,
    "range": [
      189,
      192
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 192,
    "end": 193,
    "range": [
      192,
      193
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 193,
    "end": 194,
    "range": [
      193,
      194
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 194,
    "end": 195,
    "range": [
      194,
      195
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 196,
    "end": 197,
    "range": [
      196,
      197
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 197,
    "end": 198,
    "range": [
      197,
      198
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 198,
    "end": 199,
    "range": [
      198,
      199
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 200,
    "end": 201,
    "range": [
      200,
      201
    ]
  },
  {
    "type": "Identifier",
    "value": "is",
    "start": 202,
    "end": 204,
    "range": [
      202,
      204
    ]
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 205,
    "end": 206,
    "range": [
      205,
      206
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 206,
    "end": 207,
    "range": [
      206,
      207
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 209,
    "end": 217,
    "range": [
      209,
      217
    ]
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 218,
    "end": 220,
    "range": [
      218,
      220
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 220,
    "end": 221,
    "range": [
      220,
      221
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 221,
    "end": 222,
    "range": [
      221,
      222
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 222,
    "end": 223,
    "range": [
      222,
      223
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 224,
    "end": 225,
    "range": [
      224,
      225
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 225,
    "end": 226,
    "range": [
      225,
      226
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 227,
    "end": 228,
    "range": [
      227,
      228
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 228,
    "end": 229,
    "range": [
      228,
      229
    ]
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 230,
    "end": 231,
    "range": [
      230,
      231
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 231,
    "end": 232,
    "range": [
      231,
      232
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 233,
    "end": 234,
    "range": [
      233,
      234
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 239,
    "end": 244,
    "range": [
      239,
      244
    ]
  },
  {
    "type": "Identifier",
    "value": "x1",
    "start": 245,
    "end": 247,
    "range": [
      245,
      247
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 248,
    "end": 249,
    "range": [
      248,
      249
    ]
  },
  {
    "type": "Identifier",
    "value": "cast",
    "start": 250,
    "end": 254,
    "range": [
      250,
      254
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 254,
    "end": 255,
    "range": [
      254,
      255
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 255,
    "end": 256,
    "range": [
      255,
      256
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 256,
    "end": 257,
    "range": [
      256,
      257
    ]
  },
  {
    "type": "Identifier",
    "value": "isC",
    "start": 258,
    "end": 261,
    "range": [
      258,
      261
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 261,
    "end": 262,
    "range": [
      261,
      262
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 262,
    "end": 263,
    "range": [
      262,
      263
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 283,
    "end": 288,
    "range": [
      283,
      288
    ]
  },
  {
    "type": "Identifier",
    "value": "x2",
    "start": 289,
    "end": 291,
    "range": [
      289,
      291
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 292,
    "end": 293,
    "range": [
      292,
      293
    ]
  },
  {
    "type": "Identifier",
    "value": "cast",
    "start": 294,
    "end": 298,
    "range": [
      294,
      298
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 298,
    "end": 299,
    "range": [
      298,
      299
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 299,
    "end": 300,
    "range": [
      299,
      300
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 300,
    "end": 301,
    "range": [
      300,
      301
    ]
  },
  {
    "type": "Identifier",
    "value": "isC",
    "start": 302,
    "end": 305,
    "range": [
      302,
      305
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 305,
    "end": 306,
    "range": [
      305,
      306
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 306,
    "end": 307,
    "range": [
      306,
      307
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 323,
    "end": 324,
    "range": [
      323,
      324
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 326,
    "end": 333,
    "range": [
      326,
      333
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 334,
    "end": 342,
    "range": [
      334,
      342
    ]
  },
  {
    "type": "Identifier",
    "value": "useA",
    "start": 343,
    "end": 347,
    "range": [
      343,
      347
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 347,
    "end": 348,
    "range": [
      347,
      348
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 348,
    "end": 349,
    "range": [
      348,
      349
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 349,
    "end": 350,
    "range": [
      349,
      350
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 351,
    "end": 352,
    "range": [
      351,
      352
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 352,
    "end": 353,
    "range": [
      352,
      353
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 353,
    "end": 354,
    "range": [
      353,
      354
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 355,
    "end": 359,
    "range": [
      355,
      359
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 359,
    "end": 360,
    "range": [
      359,
      360
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 362,
    "end": 369,
    "range": [
      362,
      369
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 370,
    "end": 378,
    "range": [
      370,
      378
    ]
  },
  {
    "type": "Identifier",
    "value": "consume",
    "start": 379,
    "end": 386,
    "range": [
      379,
      386
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 386,
    "end": 387,
    "range": [
      386,
      387
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 387,
    "end": 388,
    "range": [
      387,
      388
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 388,
    "end": 389,
    "range": [
      388,
      389
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 390,
    "end": 391,
    "range": [
      390,
      391
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 392,
    "end": 399,
    "range": [
      392,
      399
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 400,
    "end": 401,
    "range": [
      400,
      401
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 401,
    "end": 402,
    "range": [
      401,
      402
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 402,
    "end": 403,
    "range": [
      402,
      403
    ]
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 403,
    "end": 404,
    "range": [
      403,
      404
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 404,
    "end": 405,
    "range": [
      404,
      405
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 406,
    "end": 407,
    "range": [
      406,
      407
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 407,
    "end": 408,
    "range": [
      407,
      408
    ]
  },
  {
    "type": "Identifier",
    "value": "u",
    "start": 409,
    "end": 410,
    "range": [
      409,
      410
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 410,
    "end": 411,
    "range": [
      410,
      411
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 412,
    "end": 413,
    "range": [
      412,
      413
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 413,
    "end": 414,
    "range": [
      413,
      414
    ]
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 415,
    "end": 416,
    "range": [
      415,
      416
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 416,
    "end": 417,
    "range": [
      416,
      417
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 418,
    "end": 419,
    "range": [
      418,
      419
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 419,
    "end": 420,
    "range": [
      419,
      420
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 420,
    "end": 421,
    "range": [
      420,
      421
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 422,
    "end": 423,
    "range": [
      422,
      423
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 423,
    "end": 424,
    "range": [
      423,
      424
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 425,
    "end": 427,
    "range": [
      425,
      427
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 428,
    "end": 432,
    "range": [
      428,
      432
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 432,
    "end": 433,
    "range": [
      432,
      433
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 433,
    "end": 434,
    "range": [
      433,
      434
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 435,
    "end": 439,
    "range": [
      435,
      439
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 439,
    "end": 440,
    "range": [
      439,
      440
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 442,
    "end": 450,
    "range": [
      442,
      450
    ]
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 451,
    "end": 453,
    "range": [
      451,
      453
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 453,
    "end": 454,
    "range": [
      453,
      454
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 454,
    "end": 455,
    "range": [
      454,
      455
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 455,
    "end": 456,
    "range": [
      455,
      456
    ]
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 457,
    "end": 458,
    "range": [
      457,
      458
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 458,
    "end": 459,
    "range": [
      458,
      459
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 460,
    "end": 461,
    "range": [
      460,
      461
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 461,
    "end": 462,
    "range": [
      461,
      462
    ]
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 463,
    "end": 464,
    "range": [
      463,
      464
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 464,
    "end": 465,
    "range": [
      464,
      465
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 466,
    "end": 467,
    "range": [
      466,
      467
    ]
  },
  {
    "type": "Identifier",
    "value": "consume",
    "start": 472,
    "end": 479,
    "range": [
      472,
      479
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 479,
    "end": 480,
    "range": [
      479,
      480
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 480,
    "end": 481,
    "range": [
      480,
      481
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 481,
    "end": 482,
    "range": [
      481,
      482
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 483,
    "end": 484,
    "range": [
      483,
      484
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 484,
    "end": 485,
    "range": [
      484,
      485
    ]
  },
  {
    "type": "Identifier",
    "value": "useA",
    "start": 486,
    "end": 490,
    "range": [
      486,
      490
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 490,
    "end": 491,
    "range": [
      490,
      491
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 491,
    "end": 492,
    "range": [
      491,
      492
    ]
  },
  {
    "type": "Identifier",
    "value": "consume",
    "start": 515,
    "end": 522,
    "range": [
      515,
      522
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 522,
    "end": 523,
    "range": [
      522,
      523
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 523,
    "end": 524,
    "range": [
      523,
      524
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 524,
    "end": 525,
    "range": [
      524,
      525
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 526,
    "end": 527,
    "range": [
      526,
      527
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 527,
    "end": 528,
    "range": [
      527,
      528
    ]
  },
  {
    "type": "Identifier",
    "value": "useA",
    "start": 529,
    "end": 533,
    "range": [
      529,
      533
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 533,
    "end": 534,
    "range": [
      533,
      534
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 534,
    "end": 535,
    "range": [
      534,
      535
    ]
  },
  {
    "type": "Identifier",
    "value": "consume",
    "start": 558,
    "end": 565,
    "range": [
      558,
      565
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 565,
    "end": 566,
    "range": [
      565,
      566
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 566,
    "end": 567,
    "range": [
      566,
      567
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 567,
    "end": 568,
    "range": [
      567,
      568
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 569,
    "end": 570,
    "range": [
      569,
      570
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 570,
    "end": 571,
    "range": [
      570,
      571
    ]
  },
  {
    "type": "Identifier",
    "value": "useA",
    "start": 572,
    "end": 576,
    "range": [
      572,
      576
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 576,
    "end": 577,
    "range": [
      576,
      577
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 577,
    "end": 578,
    "range": [
      577,
      578
    ]
  },
  {
    "type": "Identifier",
    "value": "consume",
    "start": 601,
    "end": 608,
    "range": [
      601,
      608
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 608,
    "end": 609,
    "range": [
      608,
      609
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 609,
    "end": 610,
    "range": [
      609,
      610
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 610,
    "end": 611,
    "range": [
      610,
      611
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 612,
    "end": 613,
    "range": [
      612,
      613
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 613,
    "end": 614,
    "range": [
      613,
      614
    ]
  },
  {
    "type": "Identifier",
    "value": "useA",
    "start": 615,
    "end": 619,
    "range": [
      615,
      619
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 619,
    "end": 620,
    "range": [
      619,
      620
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 620,
    "end": 621,
    "range": [
      620,
      621
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 640,
    "end": 641,
    "range": [
      640,
      641
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 643,
    "end": 650,
    "range": [
      643,
      650
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 651,
    "end": 659,
    "range": [
      651,
      659
    ]
  },
  {
    "type": "Identifier",
    "value": "every",
    "start": 660,
    "end": 665,
    "range": [
      660,
      665
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 665,
    "end": 666,
    "range": [
      665,
      666
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 666,
    "end": 667,
    "range": [
      666,
      667
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 667,
    "end": 668,
    "range": [
      667,
      668
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 669,
    "end": 670,
    "range": [
      669,
      670
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 671,
    "end": 678,
    "range": [
      671,
      678
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 679,
    "end": 680,
    "range": [
      679,
      680
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 680,
    "end": 681,
    "range": [
      680,
      681
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 681,
    "end": 682,
    "range": [
      681,
      682
    ]
  },
  {
    "type": "Identifier",
    "value": "array",
    "start": 682,
    "end": 687,
    "range": [
      682,
      687
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 687,
    "end": 688,
    "range": [
      687,
      688
    ]
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 689,
    "end": 697,
    "range": [
      689,
      697
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 698,
    "end": 699,
    "range": [
      698,
      699
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 699,
    "end": 700,
    "range": [
      699,
      700
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 700,
    "end": 701,
    "range": [
      700,
      701
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 701,
    "end": 702,
    "range": [
      701,
      702
    ]
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 703,
    "end": 704,
    "range": [
      703,
      704
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 704,
    "end": 705,
    "range": [
      704,
      705
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 706,
    "end": 707,
    "range": [
      706,
      707
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 707,
    "end": 708,
    "range": [
      707,
      708
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 708,
    "end": 709,
    "range": [
      708,
      709
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 710,
    "end": 711,
    "range": [
      710,
      711
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 711,
    "end": 712,
    "range": [
      711,
      712
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 713,
    "end": 715,
    "range": [
      713,
      715
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 716,
    "end": 717,
    "range": [
      716,
      717
    ]
  },
  {
    "type": "Identifier",
    "value": "is",
    "start": 718,
    "end": 720,
    "range": [
      718,
      720
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 721,
    "end": 722,
    "range": [
      721,
      722
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 722,
    "end": 723,
    "range": [
      722,
      723
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 723,
    "end": 724,
    "range": [
      723,
      724
    ]
  },
  {
    "type": "Identifier",
    "value": "array",
    "start": 725,
    "end": 730,
    "range": [
      725,
      730
    ]
  },
  {
    "type": "Identifier",
    "value": "is",
    "start": 731,
    "end": 733,
    "range": [
      731,
      733
    ]
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 734,
    "end": 742,
    "range": [
      734,
      742
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 743,
    "end": 744,
    "range": [
      743,
      744
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 744,
    "end": 745,
    "range": [
      744,
      745
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 745,
    "end": 746,
    "range": [
      745,
      746
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 746,
    "end": 747,
    "range": [
      746,
      747
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 749,
    "end": 757,
    "range": [
      749,
      757
    ]
  },
  {
    "type": "Identifier",
    "value": "f3",
    "start": 758,
    "end": 760,
    "range": [
      758,
      760
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 760,
    "end": 761,
    "range": [
      760,
      761
    ]
  },
  {
    "type": "Identifier",
    "value": "arr",
    "start": 761,
    "end": 764,
    "range": [
      761,
      764
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 764,
    "end": 765,
    "range": [
      764,
      765
    ]
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 766,
    "end": 774,
    "range": [
      766,
      774
    ]
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 775,
    "end": 776,
    "range": [
      775,
      776
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 776,
    "end": 777,
    "range": [
      776,
      777
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 777,
    "end": 778,
    "range": [
      777,
      778
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 779,
    "end": 780,
    "range": [
      779,
      780
    ]
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 781,
    "end": 789,
    "range": [
      781,
      789
    ]
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 790,
    "end": 791,
    "range": [
      790,
      791
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 791,
    "end": 792,
    "range": [
      791,
      792
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 792,
    "end": 793,
    "range": [
      792,
      793
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 793,
    "end": 794,
    "range": [
      793,
      794
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 795,
    "end": 796,
    "range": [
      795,
      796
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 801,
    "end": 803,
    "range": [
      801,
      803
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 804,
    "end": 805,
    "range": [
      804,
      805
    ]
  },
  {
    "type": "Identifier",
    "value": "every",
    "start": 805,
    "end": 810,
    "range": [
      805,
      810
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 810,
    "end": 811,
    "range": [
      810,
      811
    ]
  },
  {
    "type": "Identifier",
    "value": "arr",
    "start": 811,
    "end": 814,
    "range": [
      811,
      814
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 814,
    "end": 815,
    "range": [
      814,
      815
    ]
  },
  {
    "type": "Identifier",
    "value": "isC",
    "start": 816,
    "end": 819,
    "range": [
      816,
      819
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 819,
    "end": 820,
    "range": [
      819,
      820
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 820,
    "end": 821,
    "range": [
      820,
      821
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 822,
    "end": 823,
    "range": [
      822,
      823
    ]
  },
  {
    "type": "Identifier",
    "value": "arr",
    "start": 832,
    "end": 835,
    "range": [
      832,
      835
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 835,
    "end": 836,
    "range": [
      835,
      836
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 857,
    "end": 858,
    "range": [
      857,
      858
    ]
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 863,
    "end": 867,
    "range": [
      863,
      867
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 868,
    "end": 869,
    "range": [
      868,
      869
    ]
  },
  {
    "type": "Identifier",
    "value": "arr",
    "start": 878,
    "end": 881,
    "range": [
      878,
      881
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 881,
    "end": 882,
    "range": [
      881,
      882
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 903,
    "end": 904,
    "range": [
      903,
      904
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 905,
    "end": 906,
    "range": [
      905,
      906
    ]
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 930,
    "end": 934,
    "range": [
      930,
      934
    ]
  },
  {
    "type": "Identifier",
    "value": "SyntaxKind",
    "start": 935,
    "end": 945,
    "range": [
      935,
      945
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 946,
    "end": 947,
    "range": [
      946,
      947
    ]
  },
  {
    "type": "Identifier",
    "value": "Block",
    "start": 952,
    "end": 957,
    "range": [
      952,
      957
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 957,
    "end": 958,
    "range": [
      957,
      958
    ]
  },
  {
    "type": "Identifier",
    "value": "Identifier",
    "start": 963,
    "end": 973,
    "range": [
      963,
      973
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 973,
    "end": 974,
    "range": [
      973,
      974
    ]
  },
  {
    "type": "Identifier",
    "value": "CaseClause",
    "start": 979,
    "end": 989,
    "range": [
      979,
      989
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 989,
    "end": 990,
    "range": [
      989,
      990
    ]
  },
  {
    "type": "Identifier",
    "value": "FunctionExpression",
    "start": 995,
    "end": 1013,
    "range": [
      995,
      1013
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1013,
    "end": 1014,
    "range": [
      1013,
      1014
    ]
  },
  {
    "type": "Identifier",
    "value": "FunctionDeclaration",
    "start": 1019,
    "end": 1038,
    "range": [
      1019,
      1038
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1038,
    "end": 1039,
    "range": [
      1038,
      1039
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1040,
    "end": 1041,
    "range": [
      1040,
      1041
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1043,
    "end": 1052,
    "range": [
      1043,
      1052
    ]
  },
  {
    "type": "Identifier",
    "value": "Node",
    "start": 1053,
    "end": 1057,
    "range": [
      1053,
      1057
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1058,
    "end": 1059,
    "range": [
      1058,
      1059
    ]
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 1060,
    "end": 1064,
    "range": [
      1060,
      1064
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1064,
    "end": 1065,
    "range": [
      1064,
      1065
    ]
  },
  {
    "type": "Identifier",
    "value": "SyntaxKind",
    "start": 1066,
    "end": 1076,
    "range": [
      1066,
      1076
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1076,
    "end": 1077,
    "range": [
      1076,
      1077
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1078,
    "end": 1079,
    "range": [
      1078,
      1079
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1080,
    "end": 1089,
    "range": [
      1080,
      1089
    ]
  },
  {
    "type": "Identifier",
    "value": "Expression",
    "start": 1090,
    "end": 1100,
    "range": [
      1090,
      1100
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1101,
    "end": 1108,
    "range": [
      1101,
      1108
    ]
  },
  {
    "type": "Identifier",
    "value": "Node",
    "start": 1109,
    "end": 1113,
    "range": [
      1109,
      1113
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1114,
    "end": 1115,
    "range": [
      1114,
      1115
    ]
  },
  {
    "type": "Identifier",
    "value": "_expressionBrand",
    "start": 1116,
    "end": 1132,
    "range": [
      1116,
      1132
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1132,
    "end": 1133,
    "range": [
      1132,
      1133
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1134,
    "end": 1137,
    "range": [
      1134,
      1137
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1137,
    "end": 1138,
    "range": [
      1137,
      1138
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1139,
    "end": 1140,
    "range": [
      1139,
      1140
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1141,
    "end": 1150,
    "range": [
      1141,
      1150
    ]
  },
  {
    "type": "Identifier",
    "value": "Declaration",
    "start": 1151,
    "end": 1162,
    "range": [
      1151,
      1162
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1163,
    "end": 1170,
    "range": [
      1163,
      1170
    ]
  },
  {
    "type": "Identifier",
    "value": "Node",
    "start": 1171,
    "end": 1175,
    "range": [
      1171,
      1175
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1176,
    "end": 1177,
    "range": [
      1176,
      1177
    ]
  },
  {
    "type": "Identifier",
    "value": "_declarationBrand",
    "start": 1178,
    "end": 1195,
    "range": [
      1178,
      1195
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1195,
    "end": 1196,
    "range": [
      1195,
      1196
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1197,
    "end": 1200,
    "range": [
      1197,
      1200
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1200,
    "end": 1201,
    "range": [
      1200,
      1201
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1202,
    "end": 1203,
    "range": [
      1202,
      1203
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1204,
    "end": 1213,
    "range": [
      1204,
      1213
    ]
  },
  {
    "type": "Identifier",
    "value": "Block",
    "start": 1214,
    "end": 1219,
    "range": [
      1214,
      1219
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1220,
    "end": 1227,
    "range": [
      1220,
      1227
    ]
  },
  {
    "type": "Identifier",
    "value": "Node",
    "start": 1228,
    "end": 1232,
    "range": [
      1228,
      1232
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1233,
    "end": 1234,
    "range": [
      1233,
      1234
    ]
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 1235,
    "end": 1239,
    "range": [
      1235,
      1239
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1239,
    "end": 1240,
    "range": [
      1239,
      1240
    ]
  },
  {
    "type": "Identifier",
    "value": "SyntaxKind",
    "start": 1241,
    "end": 1251,
    "range": [
      1241,
      1251
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1251,
    "end": 1252,
    "range": [
      1251,
      1252
    ]
  },
  {
    "type": "Identifier",
    "value": "Block",
    "start": 1252,
    "end": 1257,
    "range": [
      1252,
      1257
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1257,
    "end": 1258,
    "range": [
      1257,
      1258
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1259,
    "end": 1260,
    "range": [
      1259,
      1260
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1261,
    "end": 1270,
    "range": [
      1261,
      1270
    ]
  },
  {
    "type": "Identifier",
    "value": "Identifier",
    "start": 1271,
    "end": 1281,
    "range": [
      1271,
      1281
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1282,
    "end": 1289,
    "range": [
      1282,
      1289
    ]
  },
  {
    "type": "Identifier",
    "value": "Expression",
    "start": 1290,
    "end": 1300,
    "range": [
      1290,
      1300
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1300,
    "end": 1301,
    "range": [
      1300,
      1301
    ]
  },
  {
    "type": "Identifier",
    "value": "Declaration",
    "start": 1302,
    "end": 1313,
    "range": [
      1302,
      1313
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1314,
    "end": 1315,
    "range": [
      1314,
      1315
    ]
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 1316,
    "end": 1320,
    "range": [
      1316,
      1320
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1320,
    "end": 1321,
    "range": [
      1320,
      1321
    ]
  },
  {
    "type": "Identifier",
    "value": "SyntaxKind",
    "start": 1322,
    "end": 1332,
    "range": [
      1322,
      1332
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1332,
    "end": 1333,
    "range": [
      1332,
      1333
    ]
  },
  {
    "type": "Identifier",
    "value": "Identifier",
    "start": 1333,
    "end": 1343,
    "range": [
      1333,
      1343
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1343,
    "end": 1344,
    "range": [
      1343,
      1344
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1345,
    "end": 1346,
    "range": [
      1345,
      1346
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1347,
    "end": 1356,
    "range": [
      1347,
      1356
    ]
  },
  {
    "type": "Identifier",
    "value": "CaseClause",
    "start": 1357,
    "end": 1367,
    "range": [
      1357,
      1367
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1368,
    "end": 1375,
    "range": [
      1368,
      1375
    ]
  },
  {
    "type": "Identifier",
    "value": "Node",
    "start": 1376,
    "end": 1380,
    "range": [
      1376,
      1380
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1381,
    "end": 1382,
    "range": [
      1381,
      1382
    ]
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 1383,
    "end": 1387,
    "range": [
      1383,
      1387
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1387,
    "end": 1388,
    "range": [
      1387,
      1388
    ]
  },
  {
    "type": "Identifier",
    "value": "SyntaxKind",
    "start": 1389,
    "end": 1399,
    "range": [
      1389,
      1399
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1399,
    "end": 1400,
    "range": [
      1399,
      1400
    ]
  },
  {
    "type": "Identifier",
    "value": "CaseClause",
    "start": 1400,
    "end": 1410,
    "range": [
      1400,
      1410
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1410,
    "end": 1411,
    "range": [
      1410,
      1411
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1412,
    "end": 1413,
    "range": [
      1412,
      1413
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1414,
    "end": 1423,
    "range": [
      1414,
      1423
    ]
  },
  {
    "type": "Identifier",
    "value": "FunctionDeclaration",
    "start": 1424,
    "end": 1443,
    "range": [
      1424,
      1443
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1444,
    "end": 1451,
    "range": [
      1444,
      1451
    ]
  },
  {
    "type": "Identifier",
    "value": "Declaration",
    "start": 1452,
    "end": 1463,
    "range": [
      1452,
      1463
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1464,
    "end": 1465,
    "range": [
      1464,
      1465
    ]
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 1466,
    "end": 1470,
    "range": [
      1466,
      1470
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1470,
    "end": 1471,
    "range": [
      1470,
      1471
    ]
  },
  {
    "type": "Identifier",
    "value": "SyntaxKind",
    "start": 1472,
    "end": 1482,
    "range": [
      1472,
      1482
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1482,
    "end": 1483,
    "range": [
      1482,
      1483
    ]
  },
  {
    "type": "Identifier",
    "value": "FunctionDeclaration",
    "start": 1483,
    "end": 1502,
    "range": [
      1483,
      1502
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1502,
    "end": 1503,
    "range": [
      1502,
      1503
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1504,
    "end": 1505,
    "range": [
      1504,
      1505
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1507,
    "end": 1511,
    "range": [
      1507,
      1511
    ]
  },
  {
    "type": "Identifier",
    "value": "HasLocals",
    "start": 1512,
    "end": 1521,
    "range": [
      1512,
      1521
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1522,
    "end": 1523,
    "range": [
      1522,
      1523
    ]
  },
  {
    "type": "Identifier",
    "value": "Block",
    "start": 1524,
    "end": 1529,
    "range": [
      1524,
      1529
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1530,
    "end": 1531,
    "range": [
      1530,
      1531
    ]
  },
  {
    "type": "Identifier",
    "value": "FunctionDeclaration",
    "start": 1532,
    "end": 1551,
    "range": [
      1532,
      1551
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1551,
    "end": 1552,
    "range": [
      1551,
      1552
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1553,
    "end": 1560,
    "range": [
      1553,
      1560
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1561,
    "end": 1569,
    "range": [
      1561,
      1569
    ]
  },
  {
    "type": "Identifier",
    "value": "canHaveLocals",
    "start": 1570,
    "end": 1583,
    "range": [
      1570,
      1583
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1583,
    "end": 1584,
    "range": [
      1583,
      1584
    ]
  },
  {
    "type": "Identifier",
    "value": "node",
    "start": 1584,
    "end": 1588,
    "range": [
      1584,
      1588
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1588,
    "end": 1589,
    "range": [
      1588,
      1589
    ]
  },
  {
    "type": "Identifier",
    "value": "Node",
    "start": 1590,
    "end": 1594,
    "range": [
      1590,
      1594
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1594,
    "end": 1595,
    "range": [
      1594,
      1595
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1595,
    "end": 1596,
    "range": [
      1595,
      1596
    ]
  },
  {
    "type": "Identifier",
    "value": "node",
    "start": 1597,
    "end": 1601,
    "range": [
      1597,
      1601
    ]
  },
  {
    "type": "Identifier",
    "value": "is",
    "start": 1602,
    "end": 1604,
    "range": [
      1602,
      1604
    ]
  },
  {
    "type": "Identifier",
    "value": "HasLocals",
    "start": 1605,
    "end": 1614,
    "range": [
      1605,
      1614
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1614,
    "end": 1615,
    "range": [
      1614,
      1615
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1617,
    "end": 1624,
    "range": [
      1617,
      1624
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1625,
    "end": 1633,
    "range": [
      1625,
      1633
    ]
  },
  {
    "type": "Identifier",
    "value": "assertNode",
    "start": 1634,
    "end": 1644,
    "range": [
      1634,
      1644
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1644,
    "end": 1645,
    "range": [
      1644,
      1645
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1645,
    "end": 1646,
    "range": [
      1645,
      1646
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1647,
    "end": 1654,
    "range": [
      1647,
      1654
    ]
  },
  {
    "type": "Identifier",
    "value": "Node",
    "start": 1655,
    "end": 1659,
    "range": [
      1655,
      1659
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1659,
    "end": 1660,
    "range": [
      1659,
      1660
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1661,
    "end": 1662,
    "range": [
      1661,
      1662
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1663,
    "end": 1670,
    "range": [
      1663,
      1670
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1671,
    "end": 1672,
    "range": [
      1671,
      1672
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1672,
    "end": 1673,
    "range": [
      1672,
      1673
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1673,
    "end": 1674,
    "range": [
      1673,
      1674
    ]
  },
  {
    "type": "Identifier",
    "value": "node",
    "start": 1674,
    "end": 1678,
    "range": [
      1674,
      1678
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1678,
    "end": 1679,
    "range": [
      1678,
      1679
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1680,
    "end": 1681,
    "range": [
      1680,
      1681
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1682,
    "end": 1683,
    "range": [
      1682,
      1683
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1684,
    "end": 1693,
    "range": [
      1684,
      1693
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1693,
    "end": 1694,
    "range": [
      1693,
      1694
    ]
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 1695,
    "end": 1699,
    "range": [
      1695,
      1699
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1699,
    "end": 1700,
    "range": [
      1699,
      1700
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1701,
    "end": 1702,
    "range": [
      1701,
      1702
    ]
  },
  {
    "type": "Identifier",
    "value": "node",
    "start": 1702,
    "end": 1706,
    "range": [
      1702,
      1706
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1706,
    "end": 1707,
    "range": [
      1706,
      1707
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1708,
    "end": 1709,
    "range": [
      1708,
      1709
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1709,
    "end": 1710,
    "range": [
      1709,
      1710
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1711,
    "end": 1713,
    "range": [
      1711,
      1713
    ]
  },
  {
    "type": "Identifier",
    "value": "node",
    "start": 1714,
    "end": 1718,
    "range": [
      1714,
      1718
    ]
  },
  {
    "type": "Identifier",
    "value": "is",
    "start": 1719,
    "end": 1721,
    "range": [
      1719,
      1721
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1722,
    "end": 1723,
    "range": [
      1722,
      1723
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1723,
    "end": 1724,
    "range": [
      1723,
      1724
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1724,
    "end": 1725,
    "range": [
      1724,
      1725
    ]
  },
  {
    "type": "Identifier",
    "value": "asserts",
    "start": 1726,
    "end": 1733,
    "range": [
      1726,
      1733
    ]
  },
  {
    "type": "Identifier",
    "value": "node",
    "start": 1734,
    "end": 1738,
    "range": [
      1734,
      1738
    ]
  },
  {
    "type": "Identifier",
    "value": "is",
    "start": 1739,
    "end": 1741,
    "range": [
      1739,
      1741
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1742,
    "end": 1743,
    "range": [
      1742,
      1743
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1743,
    "end": 1744,
    "range": [
      1743,
      1744
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1745,
    "end": 1752,
    "range": [
      1745,
      1752
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1753,
    "end": 1761,
    "range": [
      1753,
      1761
    ]
  },
  {
    "type": "Identifier",
    "value": "assertNode",
    "start": 1762,
    "end": 1772,
    "range": [
      1762,
      1772
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1772,
    "end": 1773,
    "range": [
      1772,
      1773
    ]
  },
  {
    "type": "Identifier",
    "value": "node",
    "start": 1773,
    "end": 1777,
    "range": [
      1773,
      1777
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1777,
    "end": 1778,
    "range": [
      1777,
      1778
    ]
  },
  {
    "type": "Identifier",
    "value": "Node",
    "start": 1779,
    "end": 1783,
    "range": [
      1779,
      1783
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1784,
    "end": 1785,
    "range": [
      1784,
      1785
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1786,
    "end": 1795,
    "range": [
      1786,
      1795
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1795,
    "end": 1796,
    "range": [
      1795,
      1796
    ]
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 1797,
    "end": 1801,
    "range": [
      1797,
      1801
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1801,
    "end": 1802,
    "range": [
      1801,
      1802
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1803,
    "end": 1804,
    "range": [
      1803,
      1804
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1804,
    "end": 1805,
    "range": [
      1804,
      1805
    ]
  },
  {
    "type": "Identifier",
    "value": "node",
    "start": 1805,
    "end": 1809,
    "range": [
      1805,
      1809
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1809,
    "end": 1810,
    "range": [
      1809,
      1810
    ]
  },
  {
    "type": "Identifier",
    "value": "Node",
    "start": 1811,
    "end": 1815,
    "range": [
      1811,
      1815
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1815,
    "end": 1816,
    "range": [
      1815,
      1816
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1817,
    "end": 1819,
    "range": [
      1817,
      1819
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1820,
    "end": 1827,
    "range": [
      1820,
      1827
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1827,
    "end": 1828,
    "range": [
      1827,
      1828
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1829,
    "end": 1830,
    "range": [
      1829,
      1830
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1831,
    "end": 1840,
    "range": [
      1831,
      1840
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1840,
    "end": 1841,
    "range": [
      1840,
      1841
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1841,
    "end": 1842,
    "range": [
      1841,
      1842
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1843,
    "end": 1847,
    "range": [
      1843,
      1847
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1847,
    "end": 1848,
    "range": [
      1847,
      1848
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1850,
    "end": 1858,
    "range": [
      1850,
      1858
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1859,
    "end": 1862,
    "range": [
      1859,
      1862
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1862,
    "end": 1863,
    "range": [
      1862,
      1863
    ]
  },
  {
    "type": "Identifier",
    "value": "node",
    "start": 1863,
    "end": 1867,
    "range": [
      1863,
      1867
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1867,
    "end": 1868,
    "range": [
      1867,
      1868
    ]
  },
  {
    "type": "Identifier",
    "value": "FunctionDeclaration",
    "start": 1869,
    "end": 1888,
    "range": [
      1869,
      1888
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1889,
    "end": 1890,
    "range": [
      1889,
      1890
    ]
  },
  {
    "type": "Identifier",
    "value": "CaseClause",
    "start": 1891,
    "end": 1901,
    "range": [
      1891,
      1901
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1901,
    "end": 1902,
    "range": [
      1901,
      1902
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1903,
    "end": 1904,
    "range": [
      1903,
      1904
    ]
  },
  {
    "type": "Identifier",
    "value": "assertNode",
    "start": 1909,
    "end": 1919,
    "range": [
      1909,
      1919
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1919,
    "end": 1920,
    "range": [
      1919,
      1920
    ]
  },
  {
    "type": "Identifier",
    "value": "node",
    "start": 1920,
    "end": 1924,
    "range": [
      1920,
      1924
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1924,
    "end": 1925,
    "range": [
      1924,
      1925
    ]
  },
  {
    "type": "Identifier",
    "value": "canHaveLocals",
    "start": 1926,
    "end": 1939,
    "range": [
      1926,
      1939
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1939,
    "end": 1940,
    "range": [
      1939,
      1940
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1940,
    "end": 1941,
    "range": [
      1940,
      1941
    ]
  },
  {
    "type": "Identifier",
    "value": "node",
    "start": 1978,
    "end": 1982,
    "range": [
      1978,
      1982
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1982,
    "end": 1983,
    "range": [
      1982,
      1983
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2008,
    "end": 2009,
    "range": [
      2008,
      2009
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2011,
    "end": 2018,
    "range": [
      2011,
      2018
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2019,
    "end": 2027,
    "range": [
      2019,
      2027
    ]
  },
  {
    "type": "Identifier",
    "value": "isExpression",
    "start": 2028,
    "end": 2040,
    "range": [
      2028,
      2040
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2040,
    "end": 2041,
    "range": [
      2040,
      2041
    ]
  },
  {
    "type": "Identifier",
    "value": "node",
    "start": 2041,
    "end": 2045,
    "range": [
      2041,
      2045
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2045,
    "end": 2046,
    "range": [
      2045,
      2046
    ]
  },
  {
    "type": "Identifier",
    "value": "Node",
    "start": 2047,
    "end": 2051,
    "range": [
      2047,
      2051
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2051,
    "end": 2052,
    "range": [
      2051,
      2052
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2052,
    "end": 2053,
    "range": [
      2052,
      2053
    ]
  },
  {
    "type": "Identifier",
    "value": "node",
    "start": 2054,
    "end": 2058,
    "range": [
      2054,
      2058
    ]
  },
  {
    "type": "Identifier",
    "value": "is",
    "start": 2059,
    "end": 2061,
    "range": [
      2059,
      2061
    ]
  },
  {
    "type": "Identifier",
    "value": "Expression",
    "start": 2062,
    "end": 2072,
    "range": [
      2062,
      2072
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2072,
    "end": 2073,
    "range": [
      2072,
      2073
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2075,
    "end": 2082,
    "range": [
      2075,
      2082
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2083,
    "end": 2091,
    "range": [
      2083,
      2091
    ]
  },
  {
    "type": "Identifier",
    "value": "tryCast",
    "start": 2092,
    "end": 2099,
    "range": [
      2092,
      2099
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2099,
    "end": 2100,
    "range": [
      2099,
      2100
    ]
  },
  {
    "type": "Identifier",
    "value": "TOut",
    "start": 2100,
    "end": 2104,
    "range": [
      2100,
      2104
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2105,
    "end": 2112,
    "range": [
      2105,
      2112
    ]
  },
  {
    "type": "Identifier",
    "value": "TIn",
    "start": 2113,
    "end": 2116,
    "range": [
      2113,
      2116
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2116,
    "end": 2117,
    "range": [
      2116,
      2117
    ]
  },
  {
    "type": "Identifier",
    "value": "TIn",
    "start": 2118,
    "end": 2121,
    "range": [
      2118,
      2121
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2122,
    "end": 2123,
    "range": [
      2122,
      2123
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2124,
    "end": 2127,
    "range": [
      2124,
      2127
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2127,
    "end": 2128,
    "range": [
      2127,
      2128
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2128,
    "end": 2129,
    "range": [
      2128,
      2129
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 2129,
    "end": 2134,
    "range": [
      2129,
      2134
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2134,
    "end": 2135,
    "range": [
      2134,
      2135
    ]
  },
  {
    "type": "Identifier",
    "value": "TIn",
    "start": 2136,
    "end": 2139,
    "range": [
      2136,
      2139
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2140,
    "end": 2141,
    "range": [
      2140,
      2141
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 2142,
    "end": 2151,
    "range": [
      2142,
      2151
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2151,
    "end": 2152,
    "range": [
      2151,
      2152
    ]
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 2153,
    "end": 2157,
    "range": [
      2153,
      2157
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2157,
    "end": 2158,
    "range": [
      2157,
      2158
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2159,
    "end": 2160,
    "range": [
      2159,
      2160
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 2160,
    "end": 2165,
    "range": [
      2160,
      2165
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2165,
    "end": 2166,
    "range": [
      2165,
      2166
    ]
  },
  {
    "type": "Identifier",
    "value": "TIn",
    "start": 2167,
    "end": 2170,
    "range": [
      2167,
      2170
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2170,
    "end": 2171,
    "range": [
      2170,
      2171
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2172,
    "end": 2174,
    "range": [
      2172,
      2174
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 2175,
    "end": 2180,
    "range": [
      2175,
      2180
    ]
  },
  {
    "type": "Identifier",
    "value": "is",
    "start": 2181,
    "end": 2183,
    "range": [
      2181,
      2183
    ]
  },
  {
    "type": "Identifier",
    "value": "TOut",
    "start": 2184,
    "end": 2188,
    "range": [
      2184,
      2188
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2188,
    "end": 2189,
    "range": [
      2188,
      2189
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2189,
    "end": 2190,
    "range": [
      2189,
      2190
    ]
  },
  {
    "type": "Identifier",
    "value": "TOut",
    "start": 2191,
    "end": 2195,
    "range": [
      2191,
      2195
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2195,
    "end": 2196,
    "range": [
      2195,
      2196
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2198,
    "end": 2206,
    "range": [
      2198,
      2206
    ]
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 2207,
    "end": 2210,
    "range": [
      2207,
      2210
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2210,
    "end": 2211,
    "range": [
      2210,
      2211
    ]
  },
  {
    "type": "Identifier",
    "value": "node",
    "start": 2211,
    "end": 2215,
    "range": [
      2211,
      2215
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2215,
    "end": 2216,
    "range": [
      2215,
      2216
    ]
  },
  {
    "type": "Identifier",
    "value": "Identifier",
    "start": 2217,
    "end": 2227,
    "range": [
      2217,
      2227
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2228,
    "end": 2229,
    "range": [
      2228,
      2229
    ]
  },
  {
    "type": "Identifier",
    "value": "FunctionDeclaration",
    "start": 2230,
    "end": 2249,
    "range": [
      2230,
      2249
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2249,
    "end": 2250,
    "range": [
      2249,
      2250
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2251,
    "end": 2252,
    "range": [
      2251,
      2252
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2257,
    "end": 2262,
    "range": [
      2257,
      2262
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2263,
    "end": 2264,
    "range": [
      2263,
      2264
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2265,
    "end": 2266,
    "range": [
      2265,
      2266
    ]
  },
  {
    "type": "Identifier",
    "value": "tryCast",
    "start": 2267,
    "end": 2274,
    "range": [
      2267,
      2274
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2274,
    "end": 2275,
    "range": [
      2274,
      2275
    ]
  },
  {
    "type": "Identifier",
    "value": "node",
    "start": 2275,
    "end": 2279,
    "range": [
      2275,
      2279
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2279,
    "end": 2280,
    "range": [
      2279,
      2280
    ]
  },
  {
    "type": "Identifier",
    "value": "isExpression",
    "start": 2281,
    "end": 2293,
    "range": [
      2281,
      2293
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2293,
    "end": 2294,
    "range": [
      2293,
      2294
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2294,
    "end": 2295,
    "range": [
      2294,
      2295
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2326,
    "end": 2327,
    "range": [
      2326,
      2327
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2351,
    "end": 2356,
    "range": [
      2351,
      2356
    ]
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 2357,
    "end": 2361,
    "range": [
      2357,
      2361
    ]
  },
  {
    "type": "Identifier",
    "value": "SyntaxKind1",
    "start": 2362,
    "end": 2373,
    "range": [
      2362,
      2373
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2374,
    "end": 2375,
    "range": [
      2374,
      2375
    ]
  },
  {
    "type": "Identifier",
    "value": "ClassExpression",
    "start": 2380,
    "end": 2395,
    "range": [
      2380,
      2395
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2395,
    "end": 2396,
    "range": [
      2395,
      2396
    ]
  },
  {
    "type": "Identifier",
    "value": "ClassStatement",
    "start": 2401,
    "end": 2415,
    "range": [
      2401,
      2415
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2415,
    "end": 2416,
    "range": [
      2415,
      2416
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2417,
    "end": 2418,
    "range": [
      2417,
      2418
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 2420,
    "end": 2429,
    "range": [
      2420,
      2429
    ]
  },
  {
    "type": "Identifier",
    "value": "Node1",
    "start": 2430,
    "end": 2435,
    "range": [
      2430,
      2435
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2436,
    "end": 2437,
    "range": [
      2436,
      2437
    ]
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 2442,
    "end": 2446,
    "range": [
      2442,
      2446
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2446,
    "end": 2447,
    "range": [
      2446,
      2447
    ]
  },
  {
    "type": "Identifier",
    "value": "SyntaxKind1",
    "start": 2448,
    "end": 2459,
    "range": [
      2448,
      2459
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2459,
    "end": 2460,
    "range": [
      2459,
      2460
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2461,
    "end": 2462,
    "range": [
      2461,
      2462
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 2464,
    "end": 2473,
    "range": [
      2464,
      2473
    ]
  },
  {
    "type": "Identifier",
    "value": "Statement1",
    "start": 2474,
    "end": 2484,
    "range": [
      2474,
      2484
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2485,
    "end": 2492,
    "range": [
      2485,
      2492
    ]
  },
  {
    "type": "Identifier",
    "value": "Node1",
    "start": 2493,
    "end": 2498,
    "range": [
      2493,
      2498
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2499,
    "end": 2500,
    "range": [
      2499,
      2500
    ]
  },
  {
    "type": "Identifier",
    "value": "_statementBrand",
    "start": 2505,
    "end": 2520,
    "range": [
      2505,
      2520
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2520,
    "end": 2521,
    "range": [
      2520,
      2521
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2522,
    "end": 2525,
    "range": [
      2522,
      2525
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2525,
    "end": 2526,
    "range": [
      2525,
      2526
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2527,
    "end": 2528,
    "range": [
      2527,
      2528
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 2530,
    "end": 2539,
    "range": [
      2530,
      2539
    ]
  },
  {
    "type": "Identifier",
    "value": "ClassExpression1",
    "start": 2540,
    "end": 2556,
    "range": [
      2540,
      2556
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2557,
    "end": 2564,
    "range": [
      2557,
      2564
    ]
  },
  {
    "type": "Identifier",
    "value": "Node1",
    "start": 2565,
    "end": 2570,
    "range": [
      2565,
      2570
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2571,
    "end": 2572,
    "range": [
      2571,
      2572
    ]
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 2577,
    "end": 2581,
    "range": [
      2577,
      2581
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2581,
    "end": 2582,
    "range": [
      2581,
      2582
    ]
  },
  {
    "type": "Identifier",
    "value": "SyntaxKind1",
    "start": 2583,
    "end": 2594,
    "range": [
      2583,
      2594
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2594,
    "end": 2595,
    "range": [
      2594,
      2595
    ]
  },
  {
    "type": "Identifier",
    "value": "ClassExpression",
    "start": 2595,
    "end": 2610,
    "range": [
      2595,
      2610
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2610,
    "end": 2611,
    "range": [
      2610,
      2611
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2612,
    "end": 2613,
    "range": [
      2612,
      2613
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 2615,
    "end": 2624,
    "range": [
      2615,
      2624
    ]
  },
  {
    "type": "Identifier",
    "value": "ClassStatement1",
    "start": 2625,
    "end": 2640,
    "range": [
      2625,
      2640
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2641,
    "end": 2648,
    "range": [
      2641,
      2648
    ]
  },
  {
    "type": "Identifier",
    "value": "Statement1",
    "start": 2649,
    "end": 2659,
    "range": [
      2649,
      2659
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2660,
    "end": 2661,
    "range": [
      2660,
      2661
    ]
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 2666,
    "end": 2670,
    "range": [
      2666,
      2670
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2670,
    "end": 2671,
    "range": [
      2670,
      2671
    ]
  },
  {
    "type": "Identifier",
    "value": "SyntaxKind1",
    "start": 2672,
    "end": 2683,
    "range": [
      2672,
      2683
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2683,
    "end": 2684,
    "range": [
      2683,
      2684
    ]
  },
  {
    "type": "Identifier",
    "value": "ClassStatement",
    "start": 2684,
    "end": 2698,
    "range": [
      2684,
      2698
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2698,
    "end": 2699,
    "range": [
      2698,
      2699
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2700,
    "end": 2701,
    "range": [
      2700,
      2701
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2703,
    "end": 2707,
    "range": [
      2703,
      2707
    ]
  },
  {
    "type": "Identifier",
    "value": "ClassLike1",
    "start": 2708,
    "end": 2718,
    "range": [
      2708,
      2718
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2719,
    "end": 2720,
    "range": [
      2719,
      2720
    ]
  },
  {
    "type": "Identifier",
    "value": "ClassExpression1",
    "start": 2721,
    "end": 2737,
    "range": [
      2721,
      2737
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2738,
    "end": 2739,
    "range": [
      2738,
      2739
    ]
  },
  {
    "type": "Identifier",
    "value": "ClassStatement1",
    "start": 2740,
    "end": 2755,
    "range": [
      2740,
      2755
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2755,
    "end": 2756,
    "range": [
      2755,
      2756
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2758,
    "end": 2765,
    "range": [
      2758,
      2765
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2766,
    "end": 2774,
    "range": [
      2766,
      2774
    ]
  },
  {
    "type": "Identifier",
    "value": "isClassLike",
    "start": 2775,
    "end": 2786,
    "range": [
      2775,
      2786
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2786,
    "end": 2787,
    "range": [
      2786,
      2787
    ]
  },
  {
    "type": "Identifier",
    "value": "node",
    "start": 2787,
    "end": 2791,
    "range": [
      2787,
      2791
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2791,
    "end": 2792,
    "range": [
      2791,
      2792
    ]
  },
  {
    "type": "Identifier",
    "value": "Node1",
    "start": 2793,
    "end": 2798,
    "range": [
      2793,
      2798
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2798,
    "end": 2799,
    "range": [
      2798,
      2799
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2799,
    "end": 2800,
    "range": [
      2799,
      2800
    ]
  },
  {
    "type": "Identifier",
    "value": "node",
    "start": 2801,
    "end": 2805,
    "range": [
      2801,
      2805
    ]
  },
  {
    "type": "Identifier",
    "value": "is",
    "start": 2806,
    "end": 2808,
    "range": [
      2806,
      2808
    ]
  },
  {
    "type": "Identifier",
    "value": "ClassLike1",
    "start": 2809,
    "end": 2819,
    "range": [
      2809,
      2819
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2819,
    "end": 2820,
    "range": [
      2819,
      2820
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2822,
    "end": 2829,
    "range": [
      2822,
      2829
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2830,
    "end": 2835,
    "range": [
      2830,
      2835
    ]
  },
  {
    "type": "Identifier",
    "value": "statement",
    "start": 2836,
    "end": 2845,
    "range": [
      2836,
      2845
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2845,
    "end": 2846,
    "range": [
      2845,
      2846
    ]
  },
  {
    "type": "Identifier",
    "value": "Statement1",
    "start": 2847,
    "end": 2857,
    "range": [
      2847,
      2857
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2858,
    "end": 2859,
    "range": [
      2858,
      2859
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 2860,
    "end": 2869,
    "range": [
      2860,
      2869
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2869,
    "end": 2870,
    "range": [
      2869,
      2870
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2872,
    "end": 2877,
    "range": [
      2872,
      2877
    ]
  },
  {
    "type": "Identifier",
    "value": "maybeClassStatement",
    "start": 2878,
    "end": 2897,
    "range": [
      2878,
      2897
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2898,
    "end": 2899,
    "range": [
      2898,
      2899
    ]
  },
  {
    "type": "Identifier",
    "value": "tryCast",
    "start": 2900,
    "end": 2907,
    "range": [
      2900,
      2907
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2907,
    "end": 2908,
    "range": [
      2907,
      2908
    ]
  },
  {
    "type": "Identifier",
    "value": "statement",
    "start": 2908,
    "end": 2917,
    "range": [
      2908,
      2917
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2917,
    "end": 2918,
    "range": [
      2917,
      2918
    ]
  },
  {
    "type": "Identifier",
    "value": "isClassLike",
    "start": 2919,
    "end": 2930,
    "range": [
      2919,
      2930
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2930,
    "end": 2931,
    "range": [
      2930,
      2931
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2931,
    "end": 2932,
    "range": [
      2931,
      2932
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 2971,
    "end": 2980,
    "range": [
      2971,
      2980
    ]
  },
  {
    "type": "Identifier",
    "value": "TypeNode",
    "start": 2981,
    "end": 2989,
    "range": [
      2981,
      2989
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2990,
    "end": 2997,
    "range": [
      2990,
      2997
    ]
  },
  {
    "type": "Identifier",
    "value": "Node",
    "start": 2998,
    "end": 3002,
    "range": [
      2998,
      3002
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3003,
    "end": 3004,
    "range": [
      3003,
      3004
    ]
  },
  {
    "type": "Identifier",
    "value": "typeInfo",
    "start": 3009,
    "end": 3017,
    "range": [
      3009,
      3017
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3017,
    "end": 3018,
    "range": [
      3017,
      3018
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3019,
    "end": 3025,
    "range": [
      3019,
      3025
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3025,
    "end": 3026,
    "range": [
      3025,
      3026
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3027,
    "end": 3028,
    "range": [
      3027,
      3028
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 3030,
    "end": 3039,
    "range": [
      3030,
      3039
    ]
  },
  {
    "type": "Identifier",
    "value": "NodeArray",
    "start": 3040,
    "end": 3049,
    "range": [
      3040,
      3049
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3049,
    "end": 3050,
    "range": [
      3049,
      3050
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3050,
    "end": 3051,
    "range": [
      3050,
      3051
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3052,
    "end": 3059,
    "range": [
      3052,
      3059
    ]
  },
  {
    "type": "Identifier",
    "value": "Node",
    "start": 3060,
    "end": 3064,
    "range": [
      3060,
      3064
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3064,
    "end": 3065,
    "range": [
      3064,
      3065
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3066,
    "end": 3073,
    "range": [
      3066,
      3073
    ]
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 3074,
    "end": 3079,
    "range": [
      3074,
      3079
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3079,
    "end": 3080,
    "range": [
      3079,
      3080
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3080,
    "end": 3081,
    "range": [
      3080,
      3081
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3081,
    "end": 3082,
    "range": [
      3081,
      3082
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3083,
    "end": 3084,
    "range": [
      3083,
      3084
    ]
  },
  {
    "type": "Identifier",
    "value": "someProp",
    "start": 3089,
    "end": 3097,
    "range": [
      3089,
      3097
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3097,
    "end": 3098,
    "range": [
      3097,
      3098
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3099,
    "end": 3105,
    "range": [
      3099,
      3105
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3105,
    "end": 3106,
    "range": [
      3105,
      3106
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3107,
    "end": 3108,
    "range": [
      3107,
      3108
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 3110,
    "end": 3117,
    "range": [
      3110,
      3117
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3118,
    "end": 3126,
    "range": [
      3118,
      3126
    ]
  },
  {
    "type": "Identifier",
    "value": "isNodeArray",
    "start": 3127,
    "end": 3138,
    "range": [
      3127,
      3138
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3138,
    "end": 3139,
    "range": [
      3138,
      3139
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3139,
    "end": 3140,
    "range": [
      3139,
      3140
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3141,
    "end": 3148,
    "range": [
      3141,
      3148
    ]
  },
  {
    "type": "Identifier",
    "value": "Node",
    "start": 3149,
    "end": 3153,
    "range": [
      3149,
      3153
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3153,
    "end": 3154,
    "range": [
      3153,
      3154
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3154,
    "end": 3155,
    "range": [
      3154,
      3155
    ]
  },
  {
    "type": "Identifier",
    "value": "array",
    "start": 3155,
    "end": 3160,
    "range": [
      3155,
      3160
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3160,
    "end": 3161,
    "range": [
      3160,
      3161
    ]
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 3162,
    "end": 3170,
    "range": [
      3162,
      3170
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3171,
    "end": 3172,
    "range": [
      3171,
      3172
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3172,
    "end": 3173,
    "range": [
      3172,
      3173
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3173,
    "end": 3174,
    "range": [
      3173,
      3174
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3174,
    "end": 3175,
    "range": [
      3174,
      3175
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3175,
    "end": 3176,
    "range": [
      3175,
      3176
    ]
  },
  {
    "type": "Identifier",
    "value": "array",
    "start": 3177,
    "end": 3182,
    "range": [
      3177,
      3182
    ]
  },
  {
    "type": "Identifier",
    "value": "is",
    "start": 3183,
    "end": 3185,
    "range": [
      3183,
      3185
    ]
  },
  {
    "type": "Identifier",
    "value": "NodeArray",
    "start": 3186,
    "end": 3195,
    "range": [
      3186,
      3195
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3195,
    "end": 3196,
    "range": [
      3195,
      3196
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3196,
    "end": 3197,
    "range": [
      3196,
      3197
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3197,
    "end": 3198,
    "range": [
      3197,
      3198
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3198,
    "end": 3199,
    "range": [
      3198,
      3199
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 3201,
    "end": 3208,
    "range": [
      3201,
      3208
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3209,
    "end": 3214,
    "range": [
      3209,
      3214
    ]
  },
  {
    "type": "Identifier",
    "value": "types",
    "start": 3215,
    "end": 3220,
    "range": [
      3215,
      3220
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3220,
    "end": 3221,
    "range": [
      3220,
      3221
    ]
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 3222,
    "end": 3230,
    "range": [
      3222,
      3230
    ]
  },
  {
    "type": "Identifier",
    "value": "TypeNode",
    "start": 3231,
    "end": 3239,
    "range": [
      3231,
      3239
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3239,
    "end": 3240,
    "range": [
      3239,
      3240
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3240,
    "end": 3241,
    "range": [
      3240,
      3241
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3241,
    "end": 3242,
    "range": [
      3241,
      3242
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3244,
    "end": 3249,
    "range": [
      3244,
      3249
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3250,
    "end": 3251,
    "range": [
      3250,
      3251
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3252,
    "end": 3253,
    "range": [
      3252,
      3253
    ]
  },
  {
    "type": "Identifier",
    "value": "tryCast",
    "start": 3254,
    "end": 3261,
    "range": [
      3254,
      3261
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3261,
    "end": 3262,
    "range": [
      3261,
      3262
    ]
  },
  {
    "type": "Identifier",
    "value": "types",
    "start": 3262,
    "end": 3267,
    "range": [
      3262,
      3267
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3267,
    "end": 3268,
    "range": [
      3267,
      3268
    ]
  },
  {
    "type": "Identifier",
    "value": "isNodeArray",
    "start": 3269,
    "end": 3280,
    "range": [
      3269,
      3280
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3280,
    "end": 3281,
    "range": [
      3280,
      3281
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3281,
    "end": 3282,
    "range": [
      3281,
      3282
    ]
  }
]
```
