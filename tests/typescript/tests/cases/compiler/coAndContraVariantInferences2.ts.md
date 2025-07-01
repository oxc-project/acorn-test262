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
