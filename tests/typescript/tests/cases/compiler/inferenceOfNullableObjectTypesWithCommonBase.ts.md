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
        "name": "equal",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 14
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
              "start": 15,
              "end": 16
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 15,
            "end": 16
          }
        ],
        "start": 14,
        "end": 17
      },
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
                "start": 21,
                "end": 22
              },
              "typeArguments": null,
              "start": 21,
              "end": 22
            },
            "start": 19,
            "end": 22
          },
          "start": 18,
          "end": 22
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
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 27,
                "end": 28
              },
              "typeArguments": null,
              "start": 27,
              "end": 28
            },
            "start": 25,
            "end": 28
          },
          "start": 24,
          "end": 28
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 30,
        "end": 33
      },
      "expression": false,
      "start": 0,
      "end": 33
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "v",
            "optional": false,
            "typeAnnotation": null,
            "start": 39,
            "end": 40
          },
          "init": {
            "type": "TSNonNullExpression",
            "expression": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 43,
              "end": 47
            },
            "start": 43,
            "end": 48
          },
          "definite": false,
          "start": 39,
          "end": 48
        }
      ],
      "declare": false,
      "start": 35,
      "end": 49
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 96,
        "end": 97
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 102,
              "end": 105
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 107,
                "end": 113
              },
              "start": 105,
              "end": 113
            },
            "accessibility": null,
            "static": false,
            "start": 102,
            "end": 113
          }
        ],
        "start": 100,
        "end": 115
      },
      "declare": false,
      "start": 91,
      "end": 115
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null,
        "start": 121,
        "end": 122
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 127,
              "end": 130
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 132,
                "end": 138
              },
              "start": 130,
              "end": 138
            },
            "accessibility": null,
            "static": false,
            "start": 127,
            "end": 139
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 140,
              "end": 143
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 145,
                "end": 151
              },
              "start": 143,
              "end": 151
            },
            "accessibility": null,
            "static": false,
            "start": 140,
            "end": 151
          }
        ],
        "start": 125,
        "end": 153
      },
      "declare": false,
      "start": 116,
      "end": 153
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "equal",
          "optional": false,
          "typeAnnotation": null,
          "start": 155,
          "end": 160
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "TSAsExpression",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "v",
              "optional": false,
              "typeAnnotation": null,
              "start": 161,
              "end": 162
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 166,
                "end": 167
              },
              "typeArguments": null,
              "start": 166,
              "end": 167
            },
            "start": 161,
            "end": 167
          },
          {
            "type": "TSAsExpression",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "v",
              "optional": false,
              "typeAnnotation": null,
              "start": 169,
              "end": 170
            },
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSUndefinedKeyword",
                  "start": 174,
                  "end": 183
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "D",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 186,
                    "end": 187
                  },
                  "typeArguments": null,
                  "start": 186,
                  "end": 187
                }
              ],
              "start": 174,
              "end": 187
            },
            "start": 169,
            "end": 187
          }
        ],
        "optional": false,
        "start": 155,
        "end": 188
      },
      "directive": null,
      "start": 155,
      "end": 188
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "equal",
          "optional": false,
          "typeAnnotation": null,
          "start": 189,
          "end": 194
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "TSAsExpression",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "v",
              "optional": false,
              "typeAnnotation": null,
              "start": 195,
              "end": 196
            },
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSUndefinedKeyword",
                  "start": 200,
                  "end": 209
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "D",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 212,
                    "end": 213
                  },
                  "typeArguments": null,
                  "start": 212,
                  "end": 213
                }
              ],
              "start": 200,
              "end": 213
            },
            "start": 195,
            "end": 213
          },
          {
            "type": "TSAsExpression",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "v",
              "optional": false,
              "typeAnnotation": null,
              "start": 215,
              "end": 216
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 220,
                "end": 221
              },
              "typeArguments": null,
              "start": 220,
              "end": 221
            },
            "start": 215,
            "end": 221
          }
        ],
        "optional": false,
        "start": 189,
        "end": 222
      },
      "directive": null,
      "start": 189,
      "end": 222
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "equal",
          "optional": false,
          "typeAnnotation": null,
          "start": 224,
          "end": 229
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSUndefinedKeyword",
                  "start": 230,
                  "end": 239
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 242,
                    "end": 243
                  },
                  "typeArguments": null,
                  "start": 242,
                  "end": 243
                }
              ],
              "start": 230,
              "end": 243
            }
          ],
          "start": 229,
          "end": 244
        },
        "arguments": [
          {
            "type": "TSAsExpression",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "v",
              "optional": false,
              "typeAnnotation": null,
              "start": 245,
              "end": 246
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 250,
                "end": 251
              },
              "typeArguments": null,
              "start": 250,
              "end": 251
            },
            "start": 245,
            "end": 251
          },
          {
            "type": "TSAsExpression",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "v",
              "optional": false,
              "typeAnnotation": null,
              "start": 253,
              "end": 254
            },
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSUndefinedKeyword",
                  "start": 258,
                  "end": 267
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "D",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 270,
                    "end": 271
                  },
                  "typeArguments": null,
                  "start": 270,
                  "end": 271
                }
              ],
              "start": 258,
              "end": 271
            },
            "start": 253,
            "end": 271
          }
        ],
        "optional": false,
        "start": 224,
        "end": 272
      },
      "directive": null,
      "start": 224,
      "end": 272
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "equal",
          "optional": false,
          "typeAnnotation": null,
          "start": 273,
          "end": 278
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSUndefinedKeyword",
                  "start": 279,
                  "end": 288
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 291,
                    "end": 292
                  },
                  "typeArguments": null,
                  "start": 291,
                  "end": 292
                }
              ],
              "start": 279,
              "end": 292
            }
          ],
          "start": 278,
          "end": 293
        },
        "arguments": [
          {
            "type": "TSAsExpression",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "v",
              "optional": false,
              "typeAnnotation": null,
              "start": 294,
              "end": 295
            },
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSUndefinedKeyword",
                  "start": 299,
                  "end": 308
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "D",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 311,
                    "end": 312
                  },
                  "typeArguments": null,
                  "start": 311,
                  "end": 312
                }
              ],
              "start": 299,
              "end": 312
            },
            "start": 294,
            "end": 312
          },
          {
            "type": "TSAsExpression",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "v",
              "optional": false,
              "typeAnnotation": null,
              "start": 314,
              "end": 315
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 319,
                "end": 320
              },
              "typeArguments": null,
              "start": 319,
              "end": 320
            },
            "start": 314,
            "end": 320
          }
        ],
        "optional": false,
        "start": 273,
        "end": 321
      },
      "directive": null,
      "start": 273,
      "end": 321
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "equal",
          "optional": false,
          "typeAnnotation": null,
          "start": 323,
          "end": 328
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "TSAsExpression",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "v",
              "optional": false,
              "typeAnnotation": null,
              "start": 329,
              "end": 330
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 334,
                "end": 335
              },
              "typeArguments": null,
              "start": 334,
              "end": 335
            },
            "start": 329,
            "end": 335
          },
          {
            "type": "TSAsExpression",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "v",
              "optional": false,
              "typeAnnotation": null,
              "start": 337,
              "end": 338
            },
            "typeAnnotation": {
              "type": "TSUndefinedKeyword",
              "start": 342,
              "end": 351
            },
            "start": 337,
            "end": 351
          }
        ],
        "optional": false,
        "start": 323,
        "end": 352
      },
      "directive": null,
      "start": 323,
      "end": 352
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "equal",
          "optional": false,
          "typeAnnotation": null,
          "start": 353,
          "end": 358
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "TSAsExpression",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "v",
              "optional": false,
              "typeAnnotation": null,
              "start": 359,
              "end": 360
            },
            "typeAnnotation": {
              "type": "TSUndefinedKeyword",
              "start": 364,
              "end": 373
            },
            "start": 359,
            "end": 373
          },
          {
            "type": "TSAsExpression",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "v",
              "optional": false,
              "typeAnnotation": null,
              "start": 375,
              "end": 376
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 380,
                "end": 381
              },
              "typeArguments": null,
              "start": 380,
              "end": 381
            },
            "start": 375,
            "end": 381
          }
        ],
        "optional": false,
        "start": 353,
        "end": 382
      },
      "directive": null,
      "start": 353,
      "end": 382
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "equal",
          "optional": false,
          "typeAnnotation": null,
          "start": 384,
          "end": 389
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "TSAsExpression",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "v",
              "optional": false,
              "typeAnnotation": null,
              "start": 390,
              "end": 391
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 395,
                "end": 396
              },
              "typeArguments": null,
              "start": 395,
              "end": 396
            },
            "start": 390,
            "end": 396
          },
          {
            "type": "TSAsExpression",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "v",
              "optional": false,
              "typeAnnotation": null,
              "start": 398,
              "end": 399
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "D",
                "optional": false,
                "typeAnnotation": null,
                "start": 403,
                "end": 404
              },
              "typeArguments": null,
              "start": 403,
              "end": 404
            },
            "start": 398,
            "end": 404
          }
        ],
        "optional": false,
        "start": 384,
        "end": 405
      },
      "directive": null,
      "start": 384,
      "end": 405
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "equal",
          "optional": false,
          "typeAnnotation": null,
          "start": 406,
          "end": 411
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "TSAsExpression",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "v",
              "optional": false,
              "typeAnnotation": null,
              "start": 412,
              "end": 413
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "D",
                "optional": false,
                "typeAnnotation": null,
                "start": 417,
                "end": 418
              },
              "typeArguments": null,
              "start": 417,
              "end": 418
            },
            "start": 412,
            "end": 418
          },
          {
            "type": "TSAsExpression",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "v",
              "optional": false,
              "typeAnnotation": null,
              "start": 420,
              "end": 421
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 425,
                "end": 426
              },
              "typeArguments": null,
              "start": 425,
              "end": 426
            },
            "start": 420,
            "end": 426
          }
        ],
        "optional": false,
        "start": 406,
        "end": 427
      },
      "directive": null,
      "start": 406,
      "end": 427
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "equal",
          "optional": false,
          "typeAnnotation": null,
          "start": 429,
          "end": 434
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "TSAsExpression",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "v",
              "optional": false,
              "typeAnnotation": null,
              "start": 435,
              "end": 436
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 440,
                "end": 441
              },
              "typeArguments": null,
              "start": 440,
              "end": 441
            },
            "start": 435,
            "end": 441
          },
          {
            "type": "TSAsExpression",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "v",
              "optional": false,
              "typeAnnotation": null,
              "start": 443,
              "end": 444
            },
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 448,
                    "end": 449
                  },
                  "typeArguments": null,
                  "start": 448,
                  "end": 449
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 452,
                  "end": 461
                }
              ],
              "start": 448,
              "end": 461
            },
            "start": 443,
            "end": 461
          }
        ],
        "optional": false,
        "start": 429,
        "end": 462
      },
      "directive": null,
      "start": 429,
      "end": 462
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "equal",
          "optional": false,
          "typeAnnotation": null,
          "start": 463,
          "end": 468
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "TSAsExpression",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "v",
              "optional": false,
              "typeAnnotation": null,
              "start": 469,
              "end": 470
            },
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 474,
                    "end": 475
                  },
                  "typeArguments": null,
                  "start": 474,
                  "end": 475
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 478,
                  "end": 487
                }
              ],
              "start": 474,
              "end": 487
            },
            "start": 469,
            "end": 487
          },
          {
            "type": "TSAsExpression",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "v",
              "optional": false,
              "typeAnnotation": null,
              "start": 489,
              "end": 490
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 494,
                "end": 495
              },
              "typeArguments": null,
              "start": 494,
              "end": 495
            },
            "start": 489,
            "end": 495
          }
        ],
        "optional": false,
        "start": 463,
        "end": 496
      },
      "directive": null,
      "start": 463,
      "end": 496
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "equal",
          "optional": false,
          "typeAnnotation": null,
          "start": 498,
          "end": 503
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "TSAsExpression",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "v",
              "optional": false,
              "typeAnnotation": null,
              "start": 504,
              "end": 505
            },
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "a",
                    "raw": "'a'",
                    "start": 509,
                    "end": 512
                  },
                  "start": 509,
                  "end": 512
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 515,
                  "end": 524
                }
              ],
              "start": 509,
              "end": 524
            },
            "start": 504,
            "end": 524
          },
          {
            "type": "TSAsExpression",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "v",
              "optional": false,
              "typeAnnotation": null,
              "start": 526,
              "end": 527
            },
            "typeAnnotation": {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "b",
                "raw": "'b'",
                "start": 531,
                "end": 534
              },
              "start": 531,
              "end": 534
            },
            "start": 526,
            "end": 534
          }
        ],
        "optional": false,
        "start": 498,
        "end": 535
      },
      "directive": null,
      "start": 498,
      "end": 536
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "equal",
          "optional": false,
          "typeAnnotation": null,
          "start": 537,
          "end": 542
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "TSAsExpression",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "v",
              "optional": false,
              "typeAnnotation": null,
              "start": 543,
              "end": 544
            },
            "typeAnnotation": {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "a",
                "raw": "'a'",
                "start": 548,
                "end": 551
              },
              "start": 548,
              "end": 551
            },
            "start": 543,
            "end": 551
          },
          {
            "type": "TSAsExpression",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "v",
              "optional": false,
              "typeAnnotation": null,
              "start": 553,
              "end": 554
            },
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "b",
                    "raw": "'b'",
                    "start": 558,
                    "end": 561
                  },
                  "start": 558,
                  "end": 561
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 564,
                  "end": 573
                }
              ],
              "start": 558,
              "end": 573
            },
            "start": 553,
            "end": 573
          }
        ],
        "optional": false,
        "start": 537,
        "end": 574
      },
      "directive": null,
      "start": 537,
      "end": 575
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "equal",
          "optional": false,
          "typeAnnotation": null,
          "start": 577,
          "end": 582
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "TSAsExpression",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "v",
              "optional": false,
              "typeAnnotation": null,
              "start": 583,
              "end": 584
            },
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "a",
                    "raw": "'a'",
                    "start": 588,
                    "end": 591
                  },
                  "start": 588,
                  "end": 591
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 594,
                  "end": 603
                }
              ],
              "start": 588,
              "end": 603
            },
            "start": 583,
            "end": 603
          },
          {
            "type": "TSAsExpression",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "v",
              "optional": false,
              "typeAnnotation": null,
              "start": 605,
              "end": 606
            },
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "b",
                    "raw": "'b'",
                    "start": 610,
                    "end": 613
                  },
                  "start": 610,
                  "end": 613
                },
                {
                  "type": "TSNullKeyword",
                  "start": 616,
                  "end": 620
                }
              ],
              "start": 610,
              "end": 620
            },
            "start": 605,
            "end": 620
          }
        ],
        "optional": false,
        "start": 577,
        "end": 621
      },
      "directive": null,
      "start": 577,
      "end": 622
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "equal",
          "optional": false,
          "typeAnnotation": null,
          "start": 623,
          "end": 628
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "TSAsExpression",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "v",
              "optional": false,
              "typeAnnotation": null,
              "start": 629,
              "end": 630
            },
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "a",
                    "raw": "'a'",
                    "start": 634,
                    "end": 637
                  },
                  "start": 634,
                  "end": 637
                },
                {
                  "type": "TSNullKeyword",
                  "start": 640,
                  "end": 644
                }
              ],
              "start": 634,
              "end": 644
            },
            "start": 629,
            "end": 644
          },
          {
            "type": "TSAsExpression",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "v",
              "optional": false,
              "typeAnnotation": null,
              "start": 646,
              "end": 647
            },
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "b",
                    "raw": "'b'",
                    "start": 651,
                    "end": 654
                  },
                  "start": 651,
                  "end": 654
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 657,
                  "end": 666
                }
              ],
              "start": 651,
              "end": 666
            },
            "start": 646,
            "end": 666
          }
        ],
        "optional": false,
        "start": 623,
        "end": 667
      },
      "directive": null,
      "start": 623,
      "end": 668
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "equal",
          "optional": false,
          "typeAnnotation": null,
          "start": 670,
          "end": 675
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "TSAsExpression",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "v",
              "optional": false,
              "typeAnnotation": null,
              "start": 676,
              "end": 677
            },
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 681,
              "end": 687
            },
            "start": 676,
            "end": 687
          },
          {
            "type": "TSAsExpression",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "v",
              "optional": false,
              "typeAnnotation": null,
              "start": 689,
              "end": 690
            },
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSIntersectionType",
                  "types": [
                    {
                      "type": "TSStringKeyword",
                      "start": 694,
                      "end": 700
                    },
                    {
                      "type": "TSTypeLiteral",
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "tag",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 705,
                            "end": 708
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSLiteralType",
                              "literal": {
                                "type": "Literal",
                                "value": "foo",
                                "raw": "'foo'",
                                "start": 710,
                                "end": 715
                              },
                              "start": 710,
                              "end": 715
                            },
                            "start": 708,
                            "end": 715
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 705,
                          "end": 715
                        }
                      ],
                      "start": 703,
                      "end": 717
                    }
                  ],
                  "start": 694,
                  "end": 717
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 720,
                  "end": 729
                }
              ],
              "start": 694,
              "end": 729
            },
            "start": 689,
            "end": 729
          }
        ],
        "optional": false,
        "start": 670,
        "end": 730
      },
      "directive": null,
      "start": 670,
      "end": 731
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "equal",
          "optional": false,
          "typeAnnotation": null,
          "start": 732,
          "end": 737
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "TSAsExpression",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "v",
              "optional": false,
              "typeAnnotation": null,
              "start": 738,
              "end": 739
            },
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSIntersectionType",
                  "types": [
                    {
                      "type": "TSStringKeyword",
                      "start": 743,
                      "end": 749
                    },
                    {
                      "type": "TSTypeLiteral",
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "tag",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 754,
                            "end": 757
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSLiteralType",
                              "literal": {
                                "type": "Literal",
                                "value": "foo",
                                "raw": "'foo'",
                                "start": 759,
                                "end": 764
                              },
                              "start": 759,
                              "end": 764
                            },
                            "start": 757,
                            "end": 764
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 754,
                          "end": 764
                        }
                      ],
                      "start": 752,
                      "end": 766
                    }
                  ],
                  "start": 743,
                  "end": 766
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 769,
                  "end": 778
                }
              ],
              "start": 743,
              "end": 778
            },
            "start": 738,
            "end": 778
          },
          {
            "type": "TSAsExpression",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "v",
              "optional": false,
              "typeAnnotation": null,
              "start": 780,
              "end": 781
            },
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 785,
              "end": 791
            },
            "start": 780,
            "end": 791
          }
        ],
        "optional": false,
        "start": 732,
        "end": 792
      },
      "directive": null,
      "start": 732,
      "end": 793
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 793
}
```
