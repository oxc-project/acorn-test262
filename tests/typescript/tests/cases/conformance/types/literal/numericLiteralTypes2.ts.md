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
        "name": "A1",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 7
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSLiteralType",
        "literal": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 10,
          "end": 11
        },
        "start": 10,
        "end": 11
      },
      "declare": false,
      "start": 0,
      "end": 12
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A2",
        "optional": false,
        "typeAnnotation": null,
        "start": 18,
        "end": 20
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSLiteralType",
        "literal": {
          "type": "Literal",
          "value": 1,
          "raw": "1.0",
          "start": 23,
          "end": 26
        },
        "start": 23,
        "end": 26
      },
      "declare": false,
      "start": 13,
      "end": 27
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A3",
        "optional": false,
        "typeAnnotation": null,
        "start": 33,
        "end": 35
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSLiteralType",
        "literal": {
          "type": "Literal",
          "value": 1,
          "raw": "1e0",
          "start": 38,
          "end": 41
        },
        "start": 38,
        "end": 41
      },
      "declare": false,
      "start": 28,
      "end": 42
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A4",
        "optional": false,
        "typeAnnotation": null,
        "start": 48,
        "end": 50
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSLiteralType",
        "literal": {
          "type": "Literal",
          "value": 1,
          "raw": "10e-1",
          "start": 53,
          "end": 58
        },
        "start": 53,
        "end": 58
      },
      "declare": false,
      "start": 43,
      "end": 59
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A5",
        "optional": false,
        "typeAnnotation": null,
        "start": 65,
        "end": 67
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 70,
              "end": 71
            },
            "start": 70,
            "end": 71
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": 1,
              "raw": "1.0",
              "start": 74,
              "end": 77
            },
            "start": 74,
            "end": 77
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": 1,
              "raw": "1e0",
              "start": 80,
              "end": 83
            },
            "start": 80,
            "end": 83
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": 1,
              "raw": "10e-1",
              "start": 86,
              "end": 91
            },
            "start": 86,
            "end": 91
          }
        ],
        "start": 70,
        "end": 91
      },
      "declare": false,
      "start": 60,
      "end": 92
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null,
        "start": 103,
        "end": 105
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
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
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "A1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 121,
                        "end": 123
                      },
                      "typeArguments": null,
                      "start": 121,
                      "end": 123
                    },
                    "start": 119,
                    "end": 123
                  },
                  "start": 118,
                  "end": 123
                },
                "init": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 126,
                  "end": 127
                },
                "definite": false,
                "start": 118,
                "end": 127
              }
            ],
            "declare": false,
            "start": 114,
            "end": 128
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
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "A2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 140,
                        "end": 142
                      },
                      "typeArguments": null,
                      "start": 140,
                      "end": 142
                    },
                    "start": 138,
                    "end": 142
                  },
                  "start": 137,
                  "end": 142
                },
                "init": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 145,
                  "end": 146
                },
                "definite": false,
                "start": 137,
                "end": 146
              }
            ],
            "declare": false,
            "start": 133,
            "end": 147
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
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "A3",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 159,
                        "end": 161
                      },
                      "typeArguments": null,
                      "start": 159,
                      "end": 161
                    },
                    "start": 157,
                    "end": 161
                  },
                  "start": 156,
                  "end": 161
                },
                "init": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 164,
                  "end": 165
                },
                "definite": false,
                "start": 156,
                "end": 165
              }
            ],
            "declare": false,
            "start": 152,
            "end": 166
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
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "A4",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 178,
                        "end": 180
                      },
                      "typeArguments": null,
                      "start": 178,
                      "end": 180
                    },
                    "start": 176,
                    "end": 180
                  },
                  "start": 175,
                  "end": 180
                },
                "init": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 183,
                  "end": 184
                },
                "definite": false,
                "start": 175,
                "end": 184
              }
            ],
            "declare": false,
            "start": 171,
            "end": 185
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
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "A5",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 197,
                        "end": 199
                      },
                      "typeArguments": null,
                      "start": 197,
                      "end": 199
                    },
                    "start": 195,
                    "end": 199
                  },
                  "start": 194,
                  "end": 199
                },
                "init": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 202,
                  "end": 203
                },
                "definite": false,
                "start": 194,
                "end": 203
              }
            ],
            "declare": false,
            "start": 190,
            "end": 204
          }
        ],
        "start": 108,
        "end": 206
      },
      "expression": false,
      "start": 94,
      "end": 206
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B1",
        "optional": false,
        "typeAnnotation": null,
        "start": 213,
        "end": 215
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "UnaryExpression",
              "operator": "-",
              "argument": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 219,
                "end": 220
              },
              "prefix": true,
              "start": 218,
              "end": 220
            },
            "start": 218,
            "end": 220
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 223,
              "end": 224
            },
            "start": 223,
            "end": 224
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 227,
              "end": 228
            },
            "start": 227,
            "end": 228
          }
        ],
        "start": 218,
        "end": 228
      },
      "declare": false,
      "start": 208,
      "end": 229
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B2",
        "optional": false,
        "typeAnnotation": null,
        "start": 235,
        "end": 237
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 240,
              "end": 241
            },
            "start": 240,
            "end": 241
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 244,
              "end": 245
            },
            "start": 244,
            "end": 245
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "UnaryExpression",
              "operator": "-",
              "argument": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 249,
                "end": 250
              },
              "prefix": true,
              "start": 248,
              "end": 250
            },
            "start": 248,
            "end": 250
          }
        ],
        "start": 240,
        "end": 250
      },
      "declare": false,
      "start": 230,
      "end": 251
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B3",
        "optional": false,
        "typeAnnotation": null,
        "start": 257,
        "end": 259
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 262,
              "end": 263
            },
            "start": 262,
            "end": 263
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "UnaryExpression",
              "operator": "-",
              "argument": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 267,
                "end": 268
              },
              "prefix": true,
              "start": 266,
              "end": 268
            },
            "start": 266,
            "end": 268
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 271,
              "end": 272
            },
            "start": 271,
            "end": 272
          }
        ],
        "start": 262,
        "end": 272
      },
      "declare": false,
      "start": 252,
      "end": 273
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null,
        "start": 284,
        "end": 286
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
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
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "B1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 302,
                        "end": 304
                      },
                      "typeArguments": null,
                      "start": 302,
                      "end": 304
                    },
                    "start": 300,
                    "end": 304
                  },
                  "start": 299,
                  "end": 304
                },
                "init": {
                  "type": "UnaryExpression",
                  "operator": "-",
                  "argument": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 308,
                    "end": 309
                  },
                  "prefix": true,
                  "start": 307,
                  "end": 309
                },
                "definite": false,
                "start": 299,
                "end": 309
              }
            ],
            "declare": false,
            "start": 295,
            "end": 310
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
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "B2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 322,
                        "end": 324
                      },
                      "typeArguments": null,
                      "start": 322,
                      "end": 324
                    },
                    "start": 320,
                    "end": 324
                  },
                  "start": 319,
                  "end": 324
                },
                "init": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 327,
                  "end": 328
                },
                "definite": false,
                "start": 319,
                "end": 328
              }
            ],
            "declare": false,
            "start": 315,
            "end": 329
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
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "B3",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 341,
                        "end": 343
                      },
                      "typeArguments": null,
                      "start": 341,
                      "end": 343
                    },
                    "start": 339,
                    "end": 343
                  },
                  "start": 338,
                  "end": 343
                },
                "init": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 346,
                  "end": 347
                },
                "definite": false,
                "start": 338,
                "end": 347
              }
            ],
            "declare": false,
            "start": 334,
            "end": 348
          }
        ],
        "start": 289,
        "end": 350
      },
      "expression": false,
      "start": 275,
      "end": 350
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null,
        "start": 361,
        "end": 363
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
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 367,
                "end": 368
              },
              "start": 367,
              "end": 368
            },
            "start": 365,
            "end": 368
          },
          "start": 364,
          "end": 368
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 373,
                    "end": 374
                  },
                  "start": 373,
                  "end": 374
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 377,
                    "end": 378
                  },
                  "start": 377,
                  "end": 378
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2",
                    "start": 381,
                    "end": 382
                  },
                  "start": 381,
                  "end": 382
                }
              ],
              "start": 373,
              "end": 382
            },
            "start": 371,
            "end": 382
          },
          "start": 370,
          "end": 382
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 394,
                  "end": 395
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 398,
                    "end": 399
                  },
                  "operator": "+",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 402,
                    "end": 403
                  },
                  "start": 398,
                  "end": 403
                },
                "definite": false,
                "start": 394,
                "end": 403
              }
            ],
            "declare": false,
            "start": 390,
            "end": 404
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 413,
                  "end": 414
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 417,
                    "end": 418
                  },
                  "operator": "-",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 421,
                    "end": 422
                  },
                  "start": 417,
                  "end": 422
                },
                "definite": false,
                "start": 413,
                "end": 422
              }
            ],
            "declare": false,
            "start": 409,
            "end": 423
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 432,
                  "end": 433
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 436,
                    "end": 437
                  },
                  "operator": "*",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 440,
                    "end": 441
                  },
                  "start": 436,
                  "end": 441
                },
                "definite": false,
                "start": 432,
                "end": 441
              }
            ],
            "declare": false,
            "start": 428,
            "end": 442
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 451,
                  "end": 452
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 455,
                    "end": 456
                  },
                  "operator": "/",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 459,
                    "end": 460
                  },
                  "start": 455,
                  "end": 460
                },
                "definite": false,
                "start": 451,
                "end": 460
              }
            ],
            "declare": false,
            "start": 447,
            "end": 461
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 470,
                  "end": 471
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 474,
                    "end": 475
                  },
                  "operator": "%",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 478,
                    "end": 479
                  },
                  "start": 474,
                  "end": 479
                },
                "definite": false,
                "start": 470,
                "end": 479
              }
            ],
            "declare": false,
            "start": 466,
            "end": 480
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 489,
                  "end": 490
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 493,
                    "end": 494
                  },
                  "operator": "|",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 497,
                    "end": 498
                  },
                  "start": 493,
                  "end": 498
                },
                "definite": false,
                "start": 489,
                "end": 498
              }
            ],
            "declare": false,
            "start": 485,
            "end": 499
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 508,
                  "end": 509
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 512,
                    "end": 513
                  },
                  "operator": "&",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 516,
                    "end": 517
                  },
                  "start": 512,
                  "end": 517
                },
                "definite": false,
                "start": 508,
                "end": 517
              }
            ],
            "declare": false,
            "start": 504,
            "end": 518
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 527,
                  "end": 528
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 531,
                    "end": 532
                  },
                  "operator": "^",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 535,
                    "end": 536
                  },
                  "start": 531,
                  "end": 536
                },
                "definite": false,
                "start": 527,
                "end": 536
              }
            ],
            "declare": false,
            "start": 523,
            "end": 537
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 546,
                  "end": 547
                },
                "init": {
                  "type": "UnaryExpression",
                  "operator": "-",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 551,
                    "end": 552
                  },
                  "prefix": true,
                  "start": 550,
                  "end": 552
                },
                "definite": false,
                "start": 546,
                "end": 552
              }
            ],
            "declare": false,
            "start": 542,
            "end": 553
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 562,
                  "end": 563
                },
                "init": {
                  "type": "UnaryExpression",
                  "operator": "~",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 567,
                    "end": 568
                  },
                  "prefix": true,
                  "start": 566,
                  "end": 568
                },
                "definite": false,
                "start": 562,
                "end": 568
              }
            ],
            "declare": false,
            "start": 558,
            "end": 569
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
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 578,
                  "end": 579
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 582,
                    "end": 583
                  },
                  "operator": "==",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 587,
                    "end": 588
                  },
                  "start": 582,
                  "end": 588
                },
                "definite": false,
                "start": 578,
                "end": 588
              }
            ],
            "declare": false,
            "start": 574,
            "end": 589
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
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 598,
                  "end": 599
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 602,
                    "end": 603
                  },
                  "operator": "!=",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 607,
                    "end": 608
                  },
                  "start": 602,
                  "end": 608
                },
                "definite": false,
                "start": 598,
                "end": 608
              }
            ],
            "declare": false,
            "start": 594,
            "end": 609
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
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 618,
                  "end": 619
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 622,
                    "end": 623
                  },
                  "operator": "===",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 628,
                    "end": 629
                  },
                  "start": 622,
                  "end": 629
                },
                "definite": false,
                "start": 618,
                "end": 629
              }
            ],
            "declare": false,
            "start": 614,
            "end": 630
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
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 639,
                  "end": 640
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 643,
                    "end": 644
                  },
                  "operator": "!==",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 649,
                    "end": 650
                  },
                  "start": 643,
                  "end": 650
                },
                "definite": false,
                "start": 639,
                "end": 650
              }
            ],
            "declare": false,
            "start": 635,
            "end": 651
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
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 660,
                  "end": 661
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 664,
                    "end": 665
                  },
                  "operator": ">",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 668,
                    "end": 669
                  },
                  "start": 664,
                  "end": 669
                },
                "definite": false,
                "start": 660,
                "end": 669
              }
            ],
            "declare": false,
            "start": 656,
            "end": 670
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
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 679,
                  "end": 680
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 683,
                    "end": 684
                  },
                  "operator": "<",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 687,
                    "end": 688
                  },
                  "start": 683,
                  "end": 688
                },
                "definite": false,
                "start": 679,
                "end": 688
              }
            ],
            "declare": false,
            "start": 675,
            "end": 689
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
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 698,
                  "end": 699
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 702,
                    "end": 703
                  },
                  "operator": ">=",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 707,
                    "end": 708
                  },
                  "start": 702,
                  "end": 708
                },
                "definite": false,
                "start": 698,
                "end": 708
              }
            ],
            "declare": false,
            "start": 694,
            "end": 709
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
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 718,
                  "end": 719
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 722,
                    "end": 723
                  },
                  "operator": "<=",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 727,
                    "end": 728
                  },
                  "start": 722,
                  "end": 728
                },
                "definite": false,
                "start": 718,
                "end": 728
              }
            ],
            "declare": false,
            "start": 714,
            "end": 729
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
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 738,
                  "end": 739
                },
                "init": {
                  "type": "UnaryExpression",
                  "operator": "!",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 743,
                    "end": 744
                  },
                  "prefix": true,
                  "start": 742,
                  "end": 744
                },
                "definite": false,
                "start": 738,
                "end": 744
              }
            ],
            "declare": false,
            "start": 734,
            "end": 745
          }
        ],
        "start": 384,
        "end": 747
      },
      "expression": false,
      "start": 352,
      "end": 747
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f4",
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
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 764,
                "end": 765
              },
              "start": 764,
              "end": 765
            },
            "start": 762,
            "end": 765
          },
          "start": 761,
          "end": 765
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 770,
                    "end": 771
                  },
                  "start": 770,
                  "end": 771
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 774,
                    "end": 775
                  },
                  "start": 774,
                  "end": 775
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2",
                    "start": 778,
                    "end": 779
                  },
                  "start": 778,
                  "end": 779
                }
              ],
              "start": 770,
              "end": 779
            },
            "start": 768,
            "end": 779
          },
          "start": 767,
          "end": 779
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "UpdateExpression",
              "operator": "++",
              "prefix": false,
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 787,
                "end": 788
              },
              "start": 787,
              "end": 790
            },
            "directive": null,
            "start": 787,
            "end": 791
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "UpdateExpression",
              "operator": "++",
              "prefix": false,
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 796,
                "end": 797
              },
              "start": 796,
              "end": 799
            },
            "directive": null,
            "start": 796,
            "end": 800
          }
        ],
        "start": 781,
        "end": 802
      },
      "expression": false,
      "start": 749,
      "end": 802
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "g",
        "optional": false,
        "typeAnnotation": null,
        "start": 821,
        "end": 822
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
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 826,
                "end": 827
              },
              "start": 826,
              "end": 827
            },
            "start": 824,
            "end": 827
          },
          "start": 823,
          "end": 827
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 830,
          "end": 836
        },
        "start": 828,
        "end": 836
      },
      "body": null,
      "expression": false,
      "start": 804,
      "end": 837
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "g",
        "optional": false,
        "typeAnnotation": null,
        "start": 855,
        "end": 856
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
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 860,
                "end": 861
              },
              "start": 860,
              "end": 861
            },
            "start": 858,
            "end": 861
          },
          "start": 857,
          "end": 861
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSBooleanKeyword",
          "start": 864,
          "end": 871
        },
        "start": 862,
        "end": 871
      },
      "body": null,
      "expression": false,
      "start": 838,
      "end": 872
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "g",
        "optional": false,
        "typeAnnotation": null,
        "start": 890,
        "end": 891
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
              "type": "TSNumberKeyword",
              "start": 895,
              "end": 901
            },
            "start": 893,
            "end": 901
          },
          "start": 892,
          "end": 901
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 904,
          "end": 910
        },
        "start": 902,
        "end": 910
      },
      "body": null,
      "expression": false,
      "start": 873,
      "end": 911
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f5",
        "optional": false,
        "typeAnnotation": null,
        "start": 922,
        "end": 924
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
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 928,
                "end": 929
              },
              "start": 928,
              "end": 929
            },
            "start": 926,
            "end": 929
          },
          "start": 925,
          "end": 929
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 934,
                    "end": 935
                  },
                  "start": 934,
                  "end": 935
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 938,
                    "end": 939
                  },
                  "start": 938,
                  "end": 939
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2",
                    "start": 942,
                    "end": 943
                  },
                  "start": 942,
                  "end": 943
                }
              ],
              "start": 934,
              "end": 943
            },
            "start": 932,
            "end": 943
          },
          "start": 931,
          "end": 943
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "z1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 955,
                  "end": 957
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "g",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 960,
                    "end": 961
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 962,
                      "end": 963
                    }
                  ],
                  "optional": false,
                  "start": 960,
                  "end": 964
                },
                "definite": false,
                "start": 955,
                "end": 964
              }
            ],
            "declare": false,
            "start": 951,
            "end": 965
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
                  "name": "z2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 974,
                  "end": 976
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "g",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 979,
                    "end": 980
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 981,
                      "end": 982
                    }
                  ],
                  "optional": false,
                  "start": 979,
                  "end": 983
                },
                "definite": false,
                "start": 974,
                "end": 983
              }
            ],
            "declare": false,
            "start": 970,
            "end": 984
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
                  "name": "z3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 993,
                  "end": 995
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "g",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 998,
                    "end": 999
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": 2,
                      "raw": "2",
                      "start": 1000,
                      "end": 1001
                    }
                  ],
                  "optional": false,
                  "start": 998,
                  "end": 1002
                },
                "definite": false,
                "start": 993,
                "end": 1002
              }
            ],
            "declare": false,
            "start": 989,
            "end": 1003
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
                  "name": "z4",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1012,
                  "end": 1014
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "g",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1017,
                    "end": 1018
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1019,
                      "end": 1020
                    }
                  ],
                  "optional": false,
                  "start": 1017,
                  "end": 1021
                },
                "definite": false,
                "start": 1012,
                "end": 1021
              }
            ],
            "declare": false,
            "start": 1008,
            "end": 1022
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
                  "name": "z5",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1031,
                  "end": 1033
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "g",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1036,
                    "end": 1037
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1038,
                      "end": 1039
                    }
                  ],
                  "optional": false,
                  "start": 1036,
                  "end": 1040
                },
                "definite": false,
                "start": 1031,
                "end": 1040
              }
            ],
            "declare": false,
            "start": 1027,
            "end": 1041
          }
        ],
        "start": 945,
        "end": 1043
      },
      "expression": false,
      "start": 913,
      "end": 1043
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "assertNever",
        "optional": false,
        "typeAnnotation": null,
        "start": 1054,
        "end": 1065
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
              "type": "TSNeverKeyword",
              "start": 1069,
              "end": 1074
            },
            "start": 1067,
            "end": 1074
          },
          "start": 1066,
          "end": 1074
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSNeverKeyword",
          "start": 1077,
          "end": 1082
        },
        "start": 1075,
        "end": 1082
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ThrowStatement",
            "argument": {
              "type": "NewExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "Error",
                "optional": false,
                "typeAnnotation": null,
                "start": 1099,
                "end": 1104
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": "Unexpected value",
                  "raw": "\"Unexpected value\"",
                  "start": 1105,
                  "end": 1123
                }
              ],
              "start": 1095,
              "end": 1124
            },
            "start": 1089,
            "end": 1125
          }
        ],
        "start": 1083,
        "end": 1127
      },
      "expression": false,
      "start": 1045,
      "end": 1127
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Tag",
        "optional": false,
        "typeAnnotation": null,
        "start": 1134,
        "end": 1137
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 1140,
              "end": 1141
            },
            "start": 1140,
            "end": 1141
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 1144,
              "end": 1145
            },
            "start": 1144,
            "end": 1145
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": 2,
              "raw": "2",
              "start": 1148,
              "end": 1149
            },
            "start": 1148,
            "end": 1149
          }
        ],
        "start": 1140,
        "end": 1149
      },
      "declare": false,
      "start": 1129,
      "end": 1150
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f10",
        "optional": false,
        "typeAnnotation": null,
        "start": 1161,
        "end": 1164
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
                "name": "Tag",
                "optional": false,
                "typeAnnotation": null,
                "start": 1168,
                "end": 1171
              },
              "typeArguments": null,
              "start": 1168,
              "end": 1171
            },
            "start": 1166,
            "end": 1171
          },
          "start": 1165,
          "end": 1171
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "SwitchStatement",
            "discriminant": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 1187,
              "end": 1188
            },
            "cases": [
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 1205,
                  "end": 1206
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": "a",
                      "raw": "\"a\"",
                      "start": 1215,
                      "end": 1218
                    },
                    "start": 1208,
                    "end": 1219
                  }
                ],
                "start": 1200,
                "end": 1219
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 1233,
                  "end": 1234
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": "b",
                      "raw": "\"b\"",
                      "start": 1243,
                      "end": 1246
                    },
                    "start": 1236,
                    "end": 1247
                  }
                ],
                "start": 1228,
                "end": 1247
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 1261,
                  "end": 1262
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": "c",
                      "raw": "\"c\"",
                      "start": 1271,
                      "end": 1274
                    },
                    "start": 1264,
                    "end": 1275
                  }
                ],
                "start": 1256,
                "end": 1275
              }
            ],
            "start": 1179,
            "end": 1281
          }
        ],
        "start": 1173,
        "end": 1283
      },
      "expression": false,
      "start": 1152,
      "end": 1283
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f11",
        "optional": false,
        "typeAnnotation": null,
        "start": 1294,
        "end": 1297
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
                "name": "Tag",
                "optional": false,
                "typeAnnotation": null,
                "start": 1301,
                "end": 1304
              },
              "typeArguments": null,
              "start": 1301,
              "end": 1304
            },
            "start": 1299,
            "end": 1304
          },
          "start": 1298,
          "end": 1304
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "SwitchStatement",
            "discriminant": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 1320,
              "end": 1321
            },
            "cases": [
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 1338,
                  "end": 1339
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": "a",
                      "raw": "\"a\"",
                      "start": 1348,
                      "end": 1351
                    },
                    "start": 1341,
                    "end": 1352
                  }
                ],
                "start": 1333,
                "end": 1352
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 1366,
                  "end": 1367
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": "b",
                      "raw": "\"b\"",
                      "start": 1376,
                      "end": 1379
                    },
                    "start": 1369,
                    "end": 1380
                  }
                ],
                "start": 1361,
                "end": 1380
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 1394,
                  "end": 1395
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": "c",
                      "raw": "\"c\"",
                      "start": 1404,
                      "end": 1407
                    },
                    "start": 1397,
                    "end": 1408
                  }
                ],
                "start": 1389,
                "end": 1408
              }
            ],
            "start": 1312,
            "end": 1414
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "assertNever",
                "optional": false,
                "typeAnnotation": null,
                "start": 1426,
                "end": 1437
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1438,
                  "end": 1439
                }
              ],
              "optional": false,
              "start": 1426,
              "end": 1440
            },
            "start": 1419,
            "end": 1441
          }
        ],
        "start": 1306,
        "end": 1443
      },
      "expression": false,
      "start": 1285,
      "end": 1443
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f12",
        "optional": false,
        "typeAnnotation": null,
        "start": 1454,
        "end": 1457
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
                "name": "Tag",
                "optional": false,
                "typeAnnotation": null,
                "start": 1461,
                "end": 1464
              },
              "typeArguments": null,
              "start": 1461,
              "end": 1464
            },
            "start": 1459,
            "end": 1464
          },
          "start": 1458,
          "end": 1464
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 1476,
              "end": 1477
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1489,
                    "end": 1490
                  },
                  "directive": null,
                  "start": 1489,
                  "end": 1491
                }
              ],
              "start": 1479,
              "end": 1497
            },
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1517,
                    "end": 1518
                  },
                  "directive": null,
                  "start": 1517,
                  "end": 1519
                }
              ],
              "start": 1507,
              "end": 1525
            },
            "start": 1472,
            "end": 1525
          }
        ],
        "start": 1466,
        "end": 1527
      },
      "expression": false,
      "start": 1445,
      "end": 1527
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f13",
        "optional": false,
        "typeAnnotation": null,
        "start": 1538,
        "end": 1541
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
                "name": "Tag",
                "optional": false,
                "typeAnnotation": null,
                "start": 1545,
                "end": 1548
              },
              "typeArguments": null,
              "start": 1545,
              "end": 1548
            },
            "start": 1543,
            "end": 1548
          },
          "start": 1542,
          "end": 1548
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "LogicalExpression",
              "left": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1560,
                  "end": 1561
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 1566,
                  "end": 1567
                },
                "start": 1560,
                "end": 1567
              },
              "operator": "||",
              "right": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1571,
                  "end": 1572
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 1577,
                  "end": 1578
                },
                "start": 1571,
                "end": 1578
              },
              "start": 1560,
              "end": 1578
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1590,
                    "end": 1591
                  },
                  "directive": null,
                  "start": 1590,
                  "end": 1592
                }
              ],
              "start": 1580,
              "end": 1598
            },
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1618,
                    "end": 1619
                  },
                  "directive": null,
                  "start": 1618,
                  "end": 1620
                }
              ],
              "start": 1608,
              "end": 1626
            },
            "start": 1556,
            "end": 1626
          }
        ],
        "start": 1550,
        "end": 1628
      },
      "expression": false,
      "start": 1529,
      "end": 1628
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f14",
        "optional": false,
        "typeAnnotation": null,
        "start": 1639,
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
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 1646,
                    "end": 1647
                  },
                  "start": 1646,
                  "end": 1647
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 1650,
                    "end": 1651
                  },
                  "start": 1650,
                  "end": 1651
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2",
                    "start": 1654,
                    "end": 1655
                  },
                  "start": 1654,
                  "end": 1655
                }
              ],
              "start": 1646,
              "end": 1655
            },
            "start": 1644,
            "end": 1655
          },
          "start": 1643,
          "end": 1655
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 1660,
              "end": 1666
            },
            "start": 1658,
            "end": 1666
          },
          "start": 1657,
          "end": 1666
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
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
                  "typeAnnotation": null,
                  "start": 1678,
                  "end": 1679
                },
                "init": {
                  "type": "LogicalExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1682,
                    "end": 1683
                  },
                  "operator": "&&",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1687,
                    "end": 1688
                  },
                  "start": 1682,
                  "end": 1688
                },
                "definite": false,
                "start": 1678,
                "end": 1688
              }
            ],
            "declare": false,
            "start": 1674,
            "end": 1689
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
                  "start": 1698,
                  "end": 1699
                },
                "init": {
                  "type": "LogicalExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1702,
                    "end": 1703
                  },
                  "operator": "||",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1707,
                    "end": 1708
                  },
                  "start": 1702,
                  "end": 1708
                },
                "definite": false,
                "start": 1698,
                "end": 1708
              }
            ],
            "declare": false,
            "start": 1694,
            "end": 1709
          }
        ],
        "start": 1668,
        "end": 1711
      },
      "expression": false,
      "start": 1630,
      "end": 1711
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f15",
        "optional": false,
        "typeAnnotation": null,
        "start": 1722,
        "end": 1725
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
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 1729,
                    "end": 1730
                  },
                  "start": 1729,
                  "end": 1730
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": false,
                    "raw": "false",
                    "start": 1733,
                    "end": 1738
                  },
                  "start": 1733,
                  "end": 1738
                }
              ],
              "start": 1729,
              "end": 1738
            },
            "start": 1727,
            "end": 1738
          },
          "start": 1726,
          "end": 1738
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 1743,
                    "end": 1744
                  },
                  "start": 1743,
                  "end": 1744
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "one",
                    "raw": "\"one\"",
                    "start": 1747,
                    "end": 1752
                  },
                  "start": 1747,
                  "end": 1752
                }
              ],
              "start": 1743,
              "end": 1752
            },
            "start": 1741,
            "end": 1752
          },
          "start": 1740,
          "end": 1752
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
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
                  "typeAnnotation": null,
                  "start": 1764,
                  "end": 1765
                },
                "init": {
                  "type": "LogicalExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1768,
                    "end": 1769
                  },
                  "operator": "&&",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1773,
                    "end": 1774
                  },
                  "start": 1768,
                  "end": 1774
                },
                "definite": false,
                "start": 1764,
                "end": 1774
              }
            ],
            "declare": false,
            "start": 1760,
            "end": 1775
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
                  "start": 1784,
                  "end": 1785
                },
                "init": {
                  "type": "LogicalExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1788,
                    "end": 1789
                  },
                  "operator": "&&",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1793,
                    "end": 1794
                  },
                  "start": 1788,
                  "end": 1794
                },
                "definite": false,
                "start": 1784,
                "end": 1794
              }
            ],
            "declare": false,
            "start": 1780,
            "end": 1795
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
                  "typeAnnotation": null,
                  "start": 1804,
                  "end": 1805
                },
                "init": {
                  "type": "LogicalExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1808,
                    "end": 1809
                  },
                  "operator": "||",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1813,
                    "end": 1814
                  },
                  "start": 1808,
                  "end": 1814
                },
                "definite": false,
                "start": 1804,
                "end": 1814
              }
            ],
            "declare": false,
            "start": 1800,
            "end": 1815
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
                  "name": "d",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1824,
                  "end": 1825
                },
                "init": {
                  "type": "LogicalExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1828,
                    "end": 1829
                  },
                  "operator": "||",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1833,
                    "end": 1834
                  },
                  "start": 1828,
                  "end": 1834
                },
                "definite": false,
                "start": 1824,
                "end": 1834
              }
            ],
            "declare": false,
            "start": 1820,
            "end": 1835
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
                  "name": "e",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1844,
                  "end": 1845
                },
                "init": {
                  "type": "UnaryExpression",
                  "operator": "!",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1849,
                    "end": 1850
                  },
                  "prefix": true,
                  "start": 1848,
                  "end": 1850
                },
                "definite": false,
                "start": 1844,
                "end": 1850
              }
            ],
            "declare": false,
            "start": 1840,
            "end": 1851
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
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1860,
                  "end": 1861
                },
                "init": {
                  "type": "UnaryExpression",
                  "operator": "!",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1865,
                    "end": 1866
                  },
                  "prefix": true,
                  "start": 1864,
                  "end": 1866
                },
                "definite": false,
                "start": 1860,
                "end": 1866
              }
            ],
            "declare": false,
            "start": 1856,
            "end": 1867
          }
        ],
        "start": 1754,
        "end": 1869
      },
      "expression": false,
      "start": 1713,
      "end": 1869
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Item",
        "optional": false,
        "typeAnnotation": null,
        "start": 1876,
        "end": 1880
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
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
                  "name": "kind",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1889,
                  "end": 1893
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 1895,
                      "end": 1896
                    },
                    "start": 1895,
                    "end": 1896
                  },
                  "start": 1893,
                  "end": 1896
                },
                "accessibility": null,
                "static": false,
                "start": 1889,
                "end": 1897
              },
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
                  "start": 1898,
                  "end": 1899
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1901,
                    "end": 1907
                  },
                  "start": 1899,
                  "end": 1907
                },
                "accessibility": null,
                "static": false,
                "start": 1898,
                "end": 1907
              }
            ],
            "start": 1887,
            "end": 1909
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
                  "name": "kind",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1918,
                  "end": 1922
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 1924,
                      "end": 1925
                    },
                    "start": 1924,
                    "end": 1925
                  },
                  "start": 1922,
                  "end": 1925
                },
                "accessibility": null,
                "static": false,
                "start": 1918,
                "end": 1926
              },
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
                  "start": 1927,
                  "end": 1928
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1930,
                    "end": 1936
                  },
                  "start": 1928,
                  "end": 1936
                },
                "accessibility": null,
                "static": false,
                "start": 1927,
                "end": 1936
              }
            ],
            "start": 1916,
            "end": 1938
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
                  "name": "kind",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1947,
                  "end": 1951
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": 2,
                      "raw": "2",
                      "start": 1953,
                      "end": 1954
                    },
                    "start": 1953,
                    "end": 1954
                  },
                  "start": 1951,
                  "end": 1954
                },
                "accessibility": null,
                "static": false,
                "start": 1947,
                "end": 1955
              },
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
                  "start": 1956,
                  "end": 1957
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1959,
                    "end": 1965
                  },
                  "start": 1957,
                  "end": 1965
                },
                "accessibility": null,
                "static": false,
                "start": 1956,
                "end": 1965
              }
            ],
            "start": 1945,
            "end": 1967
          }
        ],
        "start": 1887,
        "end": 1967
      },
      "declare": false,
      "start": 1871,
      "end": 1968
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f20",
        "optional": false,
        "typeAnnotation": null,
        "start": 1979,
        "end": 1982
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
                "name": "Item",
                "optional": false,
                "typeAnnotation": null,
                "start": 1986,
                "end": 1990
              },
              "typeArguments": null,
              "start": 1986,
              "end": 1990
            },
            "start": 1984,
            "end": 1990
          },
          "start": 1983,
          "end": 1990
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "SwitchStatement",
            "discriminant": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 2006,
                "end": 2007
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "kind",
                "optional": false,
                "typeAnnotation": null,
                "start": 2008,
                "end": 2012
              },
              "optional": false,
              "computed": false,
              "start": 2006,
              "end": 2012
            },
            "cases": [
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 2029,
                  "end": 2030
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2039,
                        "end": 2040
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2041,
                        "end": 2042
                      },
                      "optional": false,
                      "computed": false,
                      "start": 2039,
                      "end": 2042
                    },
                    "start": 2032,
                    "end": 2043
                  }
                ],
                "start": 2024,
                "end": 2043
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 2057,
                  "end": 2058
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2067,
                        "end": 2068
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2069,
                        "end": 2070
                      },
                      "optional": false,
                      "computed": false,
                      "start": 2067,
                      "end": 2070
                    },
                    "start": 2060,
                    "end": 2071
                  }
                ],
                "start": 2052,
                "end": 2071
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 2085,
                  "end": 2086
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2095,
                        "end": 2096
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2097,
                        "end": 2098
                      },
                      "optional": false,
                      "computed": false,
                      "start": 2095,
                      "end": 2098
                    },
                    "start": 2088,
                    "end": 2099
                  }
                ],
                "start": 2080,
                "end": 2099
              }
            ],
            "start": 1998,
            "end": 2105
          }
        ],
        "start": 1992,
        "end": 2107
      },
      "expression": false,
      "start": 1970,
      "end": 2107
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f21",
        "optional": false,
        "typeAnnotation": null,
        "start": 2118,
        "end": 2121
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
                "name": "Item",
                "optional": false,
                "typeAnnotation": null,
                "start": 2125,
                "end": 2129
              },
              "typeArguments": null,
              "start": 2125,
              "end": 2129
            },
            "start": 2123,
            "end": 2129
          },
          "start": 2122,
          "end": 2129
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "SwitchStatement",
            "discriminant": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 2145,
                "end": 2146
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "kind",
                "optional": false,
                "typeAnnotation": null,
                "start": 2147,
                "end": 2151
              },
              "optional": false,
              "computed": false,
              "start": 2145,
              "end": 2151
            },
            "cases": [
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 2168,
                  "end": 2169
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2178,
                        "end": 2179
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2180,
                        "end": 2181
                      },
                      "optional": false,
                      "computed": false,
                      "start": 2178,
                      "end": 2181
                    },
                    "start": 2171,
                    "end": 2182
                  }
                ],
                "start": 2163,
                "end": 2182
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 2196,
                  "end": 2197
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2206,
                        "end": 2207
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2208,
                        "end": 2209
                      },
                      "optional": false,
                      "computed": false,
                      "start": 2206,
                      "end": 2209
                    },
                    "start": 2199,
                    "end": 2210
                  }
                ],
                "start": 2191,
                "end": 2210
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 2224,
                  "end": 2225
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2234,
                        "end": 2235
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2236,
                        "end": 2237
                      },
                      "optional": false,
                      "computed": false,
                      "start": 2234,
                      "end": 2237
                    },
                    "start": 2227,
                    "end": 2238
                  }
                ],
                "start": 2219,
                "end": 2238
              }
            ],
            "start": 2137,
            "end": 2244
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "assertNever",
                "optional": false,
                "typeAnnotation": null,
                "start": 2256,
                "end": 2267
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2268,
                  "end": 2269
                }
              ],
              "optional": false,
              "start": 2256,
              "end": 2270
            },
            "start": 2249,
            "end": 2271
          }
        ],
        "start": 2131,
        "end": 2273
      },
      "expression": false,
      "start": 2109,
      "end": 2273
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 2273
}
```
