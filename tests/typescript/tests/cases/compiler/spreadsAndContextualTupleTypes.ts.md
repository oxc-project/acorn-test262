__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fx1",
        "optional": false,
        "typeAnnotation": null,
        "start": 17,
        "end": 20
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
              "start": 21,
              "end": 22
            },
            "constraint": {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSStringKeyword",
                  "start": 32,
                  "end": 38
                },
                {
                  "type": "TSStringKeyword",
                  "start": 40,
                  "end": 46
                },
                {
                  "type": "TSStringKeyword",
                  "start": 48,
                  "end": 54
                },
                {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "a",
                        "raw": "'a'",
                        "start": 56,
                        "end": 59
                      },
                      "start": 56,
                      "end": 59
                    },
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "b",
                        "raw": "'b'",
                        "start": 62,
                        "end": 65
                      },
                      "start": 62,
                      "end": 65
                    }
                  ],
                  "start": 56,
                  "end": 65
                }
              ],
              "start": 31,
              "end": 66
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 21,
            "end": 66
          }
        ],
        "start": 20,
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
            "start": 75,
            "end": 76
          },
          "typeArguments": null,
          "start": 75,
          "end": 76
        },
        "start": 73,
        "end": 76
      },
      "body": null,
      "expression": false,
      "start": 0,
      "end": 77
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fx2",
        "optional": false,
        "typeAnnotation": null,
        "start": 95,
        "end": 98
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
              "start": 99,
              "end": 100
            },
            "constraint": {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSRestType",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSStringKeyword",
                      "start": 113,
                      "end": 119
                    },
                    "start": 113,
                    "end": 121
                  },
                  "start": 110,
                  "end": 121
                },
                {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "a",
                        "raw": "'a'",
                        "start": 123,
                        "end": 126
                      },
                      "start": 123,
                      "end": 126
                    },
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "b",
                        "raw": "'b'",
                        "start": 129,
                        "end": 132
                      },
                      "start": 129,
                      "end": 132
                    }
                  ],
                  "start": 123,
                  "end": 132
                }
              ],
              "start": 109,
              "end": 133
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 99,
            "end": 133
          }
        ],
        "start": 98,
        "end": 134
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
                "start": 138,
                "end": 139
              },
              "typeArguments": null,
              "start": 138,
              "end": 139
            },
            "start": 136,
            "end": 139
          },
          "start": 135,
          "end": 139
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
            "start": 142,
            "end": 143
          },
          "typeArguments": null,
          "start": 142,
          "end": 143
        },
        "start": 140,
        "end": 143
      },
      "body": null,
      "expression": false,
      "start": 78,
      "end": 144
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
            "name": "t3",
            "optional": false,
            "typeAnnotation": null,
            "start": 152,
            "end": 154
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "Literal",
                  "value": "x",
                  "raw": "'x'",
                  "start": 158,
                  "end": 161
                },
                {
                  "type": "Literal",
                  "value": "y",
                  "raw": "'y'",
                  "start": 163,
                  "end": 166
                },
                {
                  "type": "Literal",
                  "value": "z",
                  "raw": "'z'",
                  "start": 168,
                  "end": 171
                }
              ],
              "start": 157,
              "end": 172
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "const",
                "optional": false,
                "typeAnnotation": null,
                "start": 176,
                "end": 181
              },
              "typeArguments": null,
              "start": 176,
              "end": 181
            },
            "start": 157,
            "end": 181
          },
          "definite": false,
          "start": 152,
          "end": 181
        }
      ],
      "declare": false,
      "start": 146,
      "end": 182
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "fx1",
          "optional": false,
          "typeAnnotation": null,
          "start": 184,
          "end": 187
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": "x",
                "raw": "'x'",
                "start": 189,
                "end": 192
              },
              {
                "type": "Literal",
                "value": "y",
                "raw": "'y'",
                "start": 194,
                "end": 197
              },
              {
                "type": "Literal",
                "value": "z",
                "raw": "'z'",
                "start": 199,
                "end": 202
              },
              {
                "type": "Literal",
                "value": "a",
                "raw": "'a'",
                "start": 204,
                "end": 207
              }
            ],
            "start": 188,
            "end": 208
          }
        ],
        "optional": false,
        "start": 184,
        "end": 209
      },
      "directive": null,
      "start": 184,
      "end": 210
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "fx1",
          "optional": false,
          "typeAnnotation": null,
          "start": 211,
          "end": 214
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 219,
                  "end": 221
                },
                "start": 216,
                "end": 221
              },
              {
                "type": "Literal",
                "value": "a",
                "raw": "'a'",
                "start": 223,
                "end": 226
              }
            ],
            "start": 215,
            "end": 227
          }
        ],
        "optional": false,
        "start": 211,
        "end": 228
      },
      "directive": null,
      "start": 211,
      "end": 229
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "fx2",
          "optional": false,
          "typeAnnotation": null,
          "start": 231,
          "end": 234
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": "x",
                "raw": "'x'",
                "start": 236,
                "end": 239
              },
              {
                "type": "Literal",
                "value": "y",
                "raw": "'y'",
                "start": 241,
                "end": 244
              },
              {
                "type": "Literal",
                "value": "z",
                "raw": "'z'",
                "start": 246,
                "end": 249
              },
              {
                "type": "Literal",
                "value": "a",
                "raw": "'a'",
                "start": 251,
                "end": 254
              }
            ],
            "start": 235,
            "end": 255
          }
        ],
        "optional": false,
        "start": 231,
        "end": 256
      },
      "directive": null,
      "start": 231,
      "end": 257
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "fx2",
          "optional": false,
          "typeAnnotation": null,
          "start": 258,
          "end": 261
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 266,
                  "end": 268
                },
                "start": 263,
                "end": 268
              },
              {
                "type": "Literal",
                "value": "a",
                "raw": "'a'",
                "start": 270,
                "end": 273
              }
            ],
            "start": 262,
            "end": 274
          }
        ],
        "optional": false,
        "start": 258,
        "end": 275
      },
      "directive": null,
      "start": 258,
      "end": 276
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
            "name": "x1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSRestType",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSStringKeyword",
                        "start": 292,
                        "end": 298
                      },
                      "start": 292,
                      "end": 300
                    },
                    "start": 289,
                    "end": 300
                  },
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "!",
                      "raw": "'!'",
                      "start": 302,
                      "end": 305
                    },
                    "start": 302,
                    "end": 305
                  }
                ],
                "start": 288,
                "end": 306
              },
              "start": 286,
              "end": 306
            },
            "start": 284,
            "end": 306
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": "!",
                "raw": "'!'",
                "start": 310,
                "end": 313
              }
            ],
            "start": 309,
            "end": 314
          },
          "definite": false,
          "start": 284,
          "end": 314
        }
      ],
      "declare": false,
      "start": 278,
      "end": 315
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
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSRestType",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSStringKeyword",
                        "start": 330,
                        "end": 336
                      },
                      "start": 330,
                      "end": 338
                    },
                    "start": 327,
                    "end": 338
                  },
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "!",
                      "raw": "'!'",
                      "start": 340,
                      "end": 343
                    },
                    "start": 340,
                    "end": 343
                  }
                ],
                "start": 326,
                "end": 344
              },
              "start": 324,
              "end": 344
            },
            "start": 322,
            "end": 344
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": "a",
                "raw": "'a'",
                "start": 348,
                "end": 351
              },
              {
                "type": "Literal",
                "value": "!",
                "raw": "'!'",
                "start": 353,
                "end": 356
              }
            ],
            "start": 347,
            "end": 357
          },
          "definite": false,
          "start": 322,
          "end": 357
        }
      ],
      "declare": false,
      "start": 316,
      "end": 358
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
            "name": "x3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSRestType",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSStringKeyword",
                        "start": 373,
                        "end": 379
                      },
                      "start": 373,
                      "end": 381
                    },
                    "start": 370,
                    "end": 381
                  },
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "!",
                      "raw": "'!'",
                      "start": 383,
                      "end": 386
                    },
                    "start": 383,
                    "end": 386
                  }
                ],
                "start": 369,
                "end": 387
              },
              "start": 367,
              "end": 387
            },
            "start": 365,
            "end": 387
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 394,
                  "end": 396
                },
                "start": 391,
                "end": 396
              },
              {
                "type": "Literal",
                "value": "!",
                "raw": "'!'",
                "start": 398,
                "end": 401
              }
            ],
            "start": 390,
            "end": 402
          },
          "definite": false,
          "start": 365,
          "end": 402
        }
      ],
      "declare": false,
      "start": 359,
      "end": 403
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
            "name": "staticPath1Level",
            "optional": false,
            "typeAnnotation": null,
            "start": 433,
            "end": 449
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "Literal",
                  "value": "home",
                  "raw": "\"home\"",
                  "start": 453,
                  "end": 459
                }
              ],
              "start": 452,
              "end": 460
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "const",
                "optional": false,
                "typeAnnotation": null,
                "start": 464,
                "end": 469
              },
              "typeArguments": null,
              "start": 464,
              "end": 469
            },
            "start": 452,
            "end": 469
          },
          "definite": false,
          "start": 433,
          "end": 469
        }
      ],
      "declare": false,
      "start": 427,
      "end": 470
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
            "name": "staticPath2Level",
            "optional": false,
            "typeAnnotation": null,
            "start": 477,
            "end": 493
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "Literal",
                  "value": "home",
                  "raw": "\"home\"",
                  "start": 497,
                  "end": 503
                },
                {
                  "type": "Literal",
                  "value": "user",
                  "raw": "\"user\"",
                  "start": 505,
                  "end": 511
                }
              ],
              "start": 496,
              "end": 512
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "const",
                "optional": false,
                "typeAnnotation": null,
                "start": 516,
                "end": 521
              },
              "typeArguments": null,
              "start": 516,
              "end": 521
            },
            "start": 496,
            "end": 521
          },
          "definite": false,
          "start": 477,
          "end": 521
        }
      ],
      "declare": false,
      "start": 471,
      "end": 522
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
            "name": "staticPath3Level",
            "optional": false,
            "typeAnnotation": null,
            "start": 529,
            "end": 545
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "Literal",
                  "value": "home",
                  "raw": "\"home\"",
                  "start": 549,
                  "end": 555
                },
                {
                  "type": "Literal",
                  "value": "user",
                  "raw": "\"user\"",
                  "start": 557,
                  "end": 563
                },
                {
                  "type": "Literal",
                  "value": "downloads",
                  "raw": "\"downloads\"",
                  "start": 565,
                  "end": 576
                }
              ],
              "start": 548,
              "end": 577
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "const",
                "optional": false,
                "typeAnnotation": null,
                "start": 581,
                "end": 586
              },
              "typeArguments": null,
              "start": 581,
              "end": 586
            },
            "start": 548,
            "end": 586
          },
          "definite": false,
          "start": 529,
          "end": 586
        }
      ],
      "declare": false,
      "start": 523,
      "end": 587
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
            "name": "randomID",
            "optional": false,
            "typeAnnotation": null,
            "start": 595,
            "end": 603
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "Literal",
              "value": "id",
              "raw": "'id'",
              "start": 606,
              "end": 610
            },
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 614,
              "end": 620
            },
            "start": 606,
            "end": 620
          },
          "definite": false,
          "start": 595,
          "end": 620
        }
      ],
      "declare": false,
      "start": 589,
      "end": 621
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 640,
        "end": 643
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
              "start": 650,
              "end": 651
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": true,
            "start": 644,
            "end": 651
          }
        ],
        "start": 643,
        "end": 652
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "path",
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
                "start": 659,
                "end": 660
              },
              "typeArguments": null,
              "start": 659,
              "end": 660
            },
            "start": 657,
            "end": 660
          },
          "start": 653,
          "end": 660
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
            "start": 663,
            "end": 664
          },
          "typeArguments": null,
          "start": 663,
          "end": 664
        },
        "start": 661,
        "end": 664
      },
      "body": null,
      "expression": false,
      "start": 623,
      "end": 665
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
            "name": "a1",
            "optional": false,
            "typeAnnotation": null,
            "start": 673,
            "end": 675
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 678,
              "end": 681
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "SpreadElement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "staticPath1Level",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 686,
                      "end": 702
                    },
                    "start": 683,
                    "end": 702
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "randomID",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 704,
                    "end": 712
                  },
                  {
                    "type": "Literal",
                    "value": "doc.pdf",
                    "raw": "'doc.pdf'",
                    "start": 714,
                    "end": 723
                  }
                ],
                "start": 682,
                "end": 724
              }
            ],
            "optional": false,
            "start": 678,
            "end": 725
          },
          "definite": false,
          "start": 673,
          "end": 725
        }
      ],
      "declare": false,
      "start": 667,
      "end": 726
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
            "name": "a2",
            "optional": false,
            "typeAnnotation": null,
            "start": 733,
            "end": 735
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 738,
              "end": 741
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "SpreadElement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "staticPath2Level",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 746,
                      "end": 762
                    },
                    "start": 743,
                    "end": 762
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "randomID",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 764,
                    "end": 772
                  },
                  {
                    "type": "Literal",
                    "value": "doc.pdf",
                    "raw": "'doc.pdf'",
                    "start": 774,
                    "end": 783
                  }
                ],
                "start": 742,
                "end": 784
              }
            ],
            "optional": false,
            "start": 738,
            "end": 785
          },
          "definite": false,
          "start": 733,
          "end": 785
        }
      ],
      "declare": false,
      "start": 727,
      "end": 786
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
            "name": "a3",
            "optional": false,
            "typeAnnotation": null,
            "start": 793,
            "end": 795
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 798,
              "end": 801
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "SpreadElement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "staticPath3Level",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 806,
                      "end": 822
                    },
                    "start": 803,
                    "end": 822
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "randomID",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 824,
                    "end": 832
                  },
                  {
                    "type": "Literal",
                    "value": "doc.pdf",
                    "raw": "'doc.pdf'",
                    "start": 834,
                    "end": 843
                  }
                ],
                "start": 802,
                "end": 844
              }
            ],
            "optional": false,
            "start": 798,
            "end": 845
          },
          "definite": false,
          "start": 793,
          "end": 845
        }
      ],
      "declare": false,
      "start": 787,
      "end": 846
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
            "name": "b1",
            "optional": false,
            "typeAnnotation": null,
            "start": 854,
            "end": 856
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 859,
              "end": 862
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "SpreadElement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "staticPath1Level",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 867,
                      "end": 883
                    },
                    "start": 864,
                    "end": 883
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "randomID",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 885,
                    "end": 893
                  },
                  {
                    "type": "Literal",
                    "value": "folder",
                    "raw": "'folder'",
                    "start": 895,
                    "end": 903
                  },
                  {
                    "type": "Literal",
                    "value": "doc.pdf",
                    "raw": "'doc.pdf'",
                    "start": 905,
                    "end": 914
                  }
                ],
                "start": 863,
                "end": 915
              }
            ],
            "optional": false,
            "start": 859,
            "end": 916
          },
          "definite": false,
          "start": 854,
          "end": 916
        }
      ],
      "declare": false,
      "start": 848,
      "end": 917
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
            "name": "b2",
            "optional": false,
            "typeAnnotation": null,
            "start": 924,
            "end": 926
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 929,
              "end": 932
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "SpreadElement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "staticPath2Level",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 937,
                      "end": 953
                    },
                    "start": 934,
                    "end": 953
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "randomID",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 955,
                    "end": 963
                  },
                  {
                    "type": "Literal",
                    "value": "folder",
                    "raw": "'folder'",
                    "start": 965,
                    "end": 973
                  },
                  {
                    "type": "Literal",
                    "value": "doc.pdf",
                    "raw": "'doc.pdf'",
                    "start": 975,
                    "end": 984
                  }
                ],
                "start": 933,
                "end": 985
              }
            ],
            "optional": false,
            "start": 929,
            "end": 986
          },
          "definite": false,
          "start": 924,
          "end": 986
        }
      ],
      "declare": false,
      "start": 918,
      "end": 987
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
            "name": "b3",
            "optional": false,
            "typeAnnotation": null,
            "start": 994,
            "end": 996
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 999,
              "end": 1002
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "SpreadElement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "staticPath3Level",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1007,
                      "end": 1023
                    },
                    "start": 1004,
                    "end": 1023
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "randomID",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1025,
                    "end": 1033
                  },
                  {
                    "type": "Literal",
                    "value": "folder",
                    "raw": "'folder'",
                    "start": 1035,
                    "end": 1043
                  },
                  {
                    "type": "Literal",
                    "value": "doc.pdf",
                    "raw": "'doc.pdf'",
                    "start": 1045,
                    "end": 1054
                  }
                ],
                "start": 1003,
                "end": 1055
              }
            ],
            "optional": false,
            "start": 999,
            "end": 1056
          },
          "definite": false,
          "start": 994,
          "end": 1056
        }
      ],
      "declare": false,
      "start": 988,
      "end": 1057
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
            "name": "c1",
            "optional": false,
            "typeAnnotation": null,
            "start": 1065,
            "end": 1067
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 1070,
              "end": 1073
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "SpreadElement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "staticPath1Level",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1078,
                      "end": 1094
                    },
                    "start": 1075,
                    "end": 1094
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "randomID",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1096,
                    "end": 1104
                  },
                  {
                    "type": "Literal",
                    "value": "folder",
                    "raw": "'folder'",
                    "start": 1106,
                    "end": 1114
                  },
                  {
                    "type": "Literal",
                    "value": "subfolder",
                    "raw": "'subfolder'",
                    "start": 1116,
                    "end": 1127
                  },
                  {
                    "type": "Literal",
                    "value": "doc.pdf",
                    "raw": "'doc.pdf'",
                    "start": 1129,
                    "end": 1138
                  }
                ],
                "start": 1074,
                "end": 1139
              }
            ],
            "optional": false,
            "start": 1070,
            "end": 1140
          },
          "definite": false,
          "start": 1065,
          "end": 1140
        }
      ],
      "declare": false,
      "start": 1059,
      "end": 1141
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
            "name": "c2",
            "optional": false,
            "typeAnnotation": null,
            "start": 1148,
            "end": 1150
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 1153,
              "end": 1156
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "SpreadElement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "staticPath2Level",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1161,
                      "end": 1177
                    },
                    "start": 1158,
                    "end": 1177
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "randomID",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1179,
                    "end": 1187
                  },
                  {
                    "type": "Literal",
                    "value": "folder",
                    "raw": "'folder'",
                    "start": 1189,
                    "end": 1197
                  },
                  {
                    "type": "Literal",
                    "value": "subfolder",
                    "raw": "'subfolder'",
                    "start": 1199,
                    "end": 1210
                  },
                  {
                    "type": "Literal",
                    "value": "doc.pdf",
                    "raw": "'doc.pdf'",
                    "start": 1212,
                    "end": 1221
                  }
                ],
                "start": 1157,
                "end": 1222
              }
            ],
            "optional": false,
            "start": 1153,
            "end": 1223
          },
          "definite": false,
          "start": 1148,
          "end": 1223
        }
      ],
      "declare": false,
      "start": 1142,
      "end": 1224
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
            "name": "c3",
            "optional": false,
            "typeAnnotation": null,
            "start": 1231,
            "end": 1233
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 1236,
              "end": 1239
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "SpreadElement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "staticPath3Level",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1244,
                      "end": 1260
                    },
                    "start": 1241,
                    "end": 1260
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "randomID",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1262,
                    "end": 1270
                  },
                  {
                    "type": "Literal",
                    "value": "folder",
                    "raw": "'folder'",
                    "start": 1272,
                    "end": 1280
                  },
                  {
                    "type": "Literal",
                    "value": "subfolder",
                    "raw": "'subfolder'",
                    "start": 1282,
                    "end": 1293
                  },
                  {
                    "type": "Literal",
                    "value": "doc.pdf",
                    "raw": "'doc.pdf'",
                    "start": 1295,
                    "end": 1304
                  }
                ],
                "start": 1240,
                "end": 1305
              }
            ],
            "optional": false,
            "start": 1236,
            "end": 1306
          },
          "definite": false,
          "start": 1231,
          "end": 1306
        }
      ],
      "declare": false,
      "start": 1225,
      "end": 1307
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
            "name": "d1",
            "optional": false,
            "typeAnnotation": null,
            "start": 1315,
            "end": 1317
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 1320,
              "end": 1323
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "SpreadElement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "staticPath1Level",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1328,
                      "end": 1344
                    },
                    "start": 1325,
                    "end": 1344
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "randomID",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1346,
                    "end": 1354
                  },
                  {
                    "type": "Literal",
                    "value": "folder",
                    "raw": "'folder'",
                    "start": 1356,
                    "end": 1364
                  },
                  {
                    "type": "Literal",
                    "value": "subfolder",
                    "raw": "'subfolder'",
                    "start": 1366,
                    "end": 1377
                  },
                  {
                    "type": "Literal",
                    "value": "another-subfolder",
                    "raw": "'another-subfolder'",
                    "start": 1379,
                    "end": 1398
                  },
                  {
                    "type": "Literal",
                    "value": "doc.pdf",
                    "raw": "'doc.pdf'",
                    "start": 1400,
                    "end": 1409
                  }
                ],
                "start": 1324,
                "end": 1410
              }
            ],
            "optional": false,
            "start": 1320,
            "end": 1411
          },
          "definite": false,
          "start": 1315,
          "end": 1411
        }
      ],
      "declare": false,
      "start": 1309,
      "end": 1412
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
            "name": "d2",
            "optional": false,
            "typeAnnotation": null,
            "start": 1419,
            "end": 1421
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 1424,
              "end": 1427
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "SpreadElement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "staticPath2Level",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1432,
                      "end": 1448
                    },
                    "start": 1429,
                    "end": 1448
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "randomID",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1450,
                    "end": 1458
                  },
                  {
                    "type": "Literal",
                    "value": "folder",
                    "raw": "'folder'",
                    "start": 1460,
                    "end": 1468
                  },
                  {
                    "type": "Literal",
                    "value": "subfolder",
                    "raw": "'subfolder'",
                    "start": 1470,
                    "end": 1481
                  },
                  {
                    "type": "Literal",
                    "value": "another-subfolder",
                    "raw": "'another-subfolder'",
                    "start": 1483,
                    "end": 1502
                  },
                  {
                    "type": "Literal",
                    "value": "doc.pdf",
                    "raw": "'doc.pdf'",
                    "start": 1504,
                    "end": 1513
                  }
                ],
                "start": 1428,
                "end": 1514
              }
            ],
            "optional": false,
            "start": 1424,
            "end": 1515
          },
          "definite": false,
          "start": 1419,
          "end": 1515
        }
      ],
      "declare": false,
      "start": 1413,
      "end": 1516
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
            "name": "d3",
            "optional": false,
            "typeAnnotation": null,
            "start": 1523,
            "end": 1525
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 1528,
              "end": 1531
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "SpreadElement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "staticPath3Level",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1536,
                      "end": 1552
                    },
                    "start": 1533,
                    "end": 1552
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "randomID",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1554,
                    "end": 1562
                  },
                  {
                    "type": "Literal",
                    "value": "folder",
                    "raw": "'folder'",
                    "start": 1564,
                    "end": 1572
                  },
                  {
                    "type": "Literal",
                    "value": "subfolder",
                    "raw": "'subfolder'",
                    "start": 1574,
                    "end": 1585
                  },
                  {
                    "type": "Literal",
                    "value": "another-subfolder",
                    "raw": "'another-subfolder'",
                    "start": 1587,
                    "end": 1606
                  },
                  {
                    "type": "Literal",
                    "value": "doc.pdf",
                    "raw": "'doc.pdf'",
                    "start": 1608,
                    "end": 1617
                  }
                ],
                "start": 1532,
                "end": 1618
              }
            ],
            "optional": false,
            "start": 1528,
            "end": 1619
          },
          "definite": false,
          "start": 1523,
          "end": 1619
        }
      ],
      "declare": false,
      "start": 1517,
      "end": 1620
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1620
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "declare",
    "start": 0,
    "end": 7,
    "range": [
      0,
      7
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 8,
    "end": 16,
    "range": [
      8,
      16
    ]
  },
  {
    "type": "Identifier",
    "value": "fx1",
    "start": 17,
    "end": 20,
    "range": [
      17,
      20
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 20,
    "end": 21,
    "range": [
      20,
      21
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 21,
    "end": 22,
    "range": [
      21,
      22
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 23,
    "end": 30,
    "range": [
      23,
      30
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 31,
    "end": 32,
    "range": [
      31,
      32
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 32,
    "end": 38,
    "range": [
      32,
      38
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 38,
    "end": 39,
    "range": [
      38,
      39
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 40,
    "end": 46,
    "range": [
      40,
      46
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 46,
    "end": 47,
    "range": [
      46,
      47
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 48,
    "end": 54,
    "range": [
      48,
      54
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 54,
    "end": 55,
    "range": [
      54,
      55
    ]
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 56,
    "end": 59,
    "range": [
      56,
      59
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 60,
    "end": 61,
    "range": [
      60,
      61
    ]
  },
  {
    "type": "String",
    "value": "'b'",
    "start": 62,
    "end": 65,
    "range": [
      62,
      65
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 65,
    "end": 66,
    "range": [
      65,
      66
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 66,
    "end": 67,
    "range": [
      66,
      67
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 67,
    "end": 68,
    "range": [
      67,
      68
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 68,
    "end": 69,
    "range": [
      68,
      69
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 69,
    "end": 70,
    "range": [
      69,
      70
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 71,
    "end": 72,
    "range": [
      71,
      72
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 72,
    "end": 73,
    "range": [
      72,
      73
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 73,
    "end": 74,
    "range": [
      73,
      74
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 75,
    "end": 76,
    "range": [
      75,
      76
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 76,
    "end": 77,
    "range": [
      76,
      77
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 78,
    "end": 85,
    "range": [
      78,
      85
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 86,
    "end": 94,
    "range": [
      86,
      94
    ]
  },
  {
    "type": "Identifier",
    "value": "fx2",
    "start": 95,
    "end": 98,
    "range": [
      95,
      98
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 98,
    "end": 99,
    "range": [
      98,
      99
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 99,
    "end": 100,
    "range": [
      99,
      100
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 101,
    "end": 108,
    "range": [
      101,
      108
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 109,
    "end": 110,
    "range": [
      109,
      110
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 110,
    "end": 113,
    "range": [
      110,
      113
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 113,
    "end": 119,
    "range": [
      113,
      119
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 119,
    "end": 120,
    "range": [
      119,
      120
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 120,
    "end": 121,
    "range": [
      120,
      121
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 121,
    "end": 122,
    "range": [
      121,
      122
    ]
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 123,
    "end": 126,
    "range": [
      123,
      126
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 127,
    "end": 128,
    "range": [
      127,
      128
    ]
  },
  {
    "type": "String",
    "value": "'b'",
    "start": 129,
    "end": 132,
    "range": [
      129,
      132
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 132,
    "end": 133,
    "range": [
      132,
      133
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 133,
    "end": 134,
    "range": [
      133,
      134
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 134,
    "end": 135,
    "range": [
      134,
      135
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 135,
    "end": 136,
    "range": [
      135,
      136
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 136,
    "end": 137,
    "range": [
      136,
      137
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 138,
    "end": 139,
    "range": [
      138,
      139
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 139,
    "end": 140,
    "range": [
      139,
      140
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 140,
    "end": 141,
    "range": [
      140,
      141
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 142,
    "end": 143,
    "range": [
      142,
      143
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 143,
    "end": 144,
    "range": [
      143,
      144
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 146,
    "end": 151,
    "range": [
      146,
      151
    ]
  },
  {
    "type": "Identifier",
    "value": "t3",
    "start": 152,
    "end": 154,
    "range": [
      152,
      154
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 155,
    "end": 156,
    "range": [
      155,
      156
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 157,
    "end": 158,
    "range": [
      157,
      158
    ]
  },
  {
    "type": "String",
    "value": "'x'",
    "start": 158,
    "end": 161,
    "range": [
      158,
      161
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 161,
    "end": 162,
    "range": [
      161,
      162
    ]
  },
  {
    "type": "String",
    "value": "'y'",
    "start": 163,
    "end": 166,
    "range": [
      163,
      166
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 166,
    "end": 167,
    "range": [
      166,
      167
    ]
  },
  {
    "type": "String",
    "value": "'z'",
    "start": 168,
    "end": 171,
    "range": [
      168,
      171
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 171,
    "end": 172,
    "range": [
      171,
      172
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 173,
    "end": 175,
    "range": [
      173,
      175
    ]
  },
  {
    "type": "Identifier",
    "value": "const",
    "start": 176,
    "end": 181,
    "range": [
      176,
      181
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 181,
    "end": 182,
    "range": [
      181,
      182
    ]
  },
  {
    "type": "Identifier",
    "value": "fx1",
    "start": 184,
    "end": 187,
    "range": [
      184,
      187
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 187,
    "end": 188,
    "range": [
      187,
      188
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 188,
    "end": 189,
    "range": [
      188,
      189
    ]
  },
  {
    "type": "String",
    "value": "'x'",
    "start": 189,
    "end": 192,
    "range": [
      189,
      192
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 192,
    "end": 193,
    "range": [
      192,
      193
    ]
  },
  {
    "type": "String",
    "value": "'y'",
    "start": 194,
    "end": 197,
    "range": [
      194,
      197
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 197,
    "end": 198,
    "range": [
      197,
      198
    ]
  },
  {
    "type": "String",
    "value": "'z'",
    "start": 199,
    "end": 202,
    "range": [
      199,
      202
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 202,
    "end": 203,
    "range": [
      202,
      203
    ]
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 204,
    "end": 207,
    "range": [
      204,
      207
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 207,
    "end": 208,
    "range": [
      207,
      208
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 208,
    "end": 209,
    "range": [
      208,
      209
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 209,
    "end": 210,
    "range": [
      209,
      210
    ]
  },
  {
    "type": "Identifier",
    "value": "fx1",
    "start": 211,
    "end": 214,
    "range": [
      211,
      214
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 214,
    "end": 215,
    "range": [
      214,
      215
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 215,
    "end": 216,
    "range": [
      215,
      216
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 216,
    "end": 219,
    "range": [
      216,
      219
    ]
  },
  {
    "type": "Identifier",
    "value": "t3",
    "start": 219,
    "end": 221,
    "range": [
      219,
      221
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 221,
    "end": 222,
    "range": [
      221,
      222
    ]
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 223,
    "end": 226,
    "range": [
      223,
      226
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 226,
    "end": 227,
    "range": [
      226,
      227
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 227,
    "end": 228,
    "range": [
      227,
      228
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 228,
    "end": 229,
    "range": [
      228,
      229
    ]
  },
  {
    "type": "Identifier",
    "value": "fx2",
    "start": 231,
    "end": 234,
    "range": [
      231,
      234
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 234,
    "end": 235,
    "range": [
      234,
      235
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 235,
    "end": 236,
    "range": [
      235,
      236
    ]
  },
  {
    "type": "String",
    "value": "'x'",
    "start": 236,
    "end": 239,
    "range": [
      236,
      239
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 239,
    "end": 240,
    "range": [
      239,
      240
    ]
  },
  {
    "type": "String",
    "value": "'y'",
    "start": 241,
    "end": 244,
    "range": [
      241,
      244
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 244,
    "end": 245,
    "range": [
      244,
      245
    ]
  },
  {
    "type": "String",
    "value": "'z'",
    "start": 246,
    "end": 249,
    "range": [
      246,
      249
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 249,
    "end": 250,
    "range": [
      249,
      250
    ]
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 251,
    "end": 254,
    "range": [
      251,
      254
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 254,
    "end": 255,
    "range": [
      254,
      255
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 255,
    "end": 256,
    "range": [
      255,
      256
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 256,
    "end": 257,
    "range": [
      256,
      257
    ]
  },
  {
    "type": "Identifier",
    "value": "fx2",
    "start": 258,
    "end": 261,
    "range": [
      258,
      261
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 261,
    "end": 262,
    "range": [
      261,
      262
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 262,
    "end": 263,
    "range": [
      262,
      263
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 263,
    "end": 266,
    "range": [
      263,
      266
    ]
  },
  {
    "type": "Identifier",
    "value": "t3",
    "start": 266,
    "end": 268,
    "range": [
      266,
      268
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 268,
    "end": 269,
    "range": [
      268,
      269
    ]
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 270,
    "end": 273,
    "range": [
      270,
      273
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 273,
    "end": 274,
    "range": [
      273,
      274
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 274,
    "end": 275,
    "range": [
      274,
      275
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 275,
    "end": 276,
    "range": [
      275,
      276
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 278,
    "end": 283,
    "range": [
      278,
      283
    ]
  },
  {
    "type": "Identifier",
    "value": "x1",
    "start": 284,
    "end": 286,
    "range": [
      284,
      286
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 286,
    "end": 287,
    "range": [
      286,
      287
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 288,
    "end": 289,
    "range": [
      288,
      289
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 289,
    "end": 292,
    "range": [
      289,
      292
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 292,
    "end": 298,
    "range": [
      292,
      298
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 298,
    "end": 299,
    "range": [
      298,
      299
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "type": "String",
    "value": "'!'",
    "start": 302,
    "end": 305,
    "range": [
      302,
      305
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 305,
    "end": 306,
    "range": [
      305,
      306
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 307,
    "end": 308,
    "range": [
      307,
      308
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 309,
    "end": 310,
    "range": [
      309,
      310
    ]
  },
  {
    "type": "String",
    "value": "'!'",
    "start": 310,
    "end": 313,
    "range": [
      310,
      313
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 313,
    "end": 314,
    "range": [
      313,
      314
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 314,
    "end": 315,
    "range": [
      314,
      315
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 316,
    "end": 321,
    "range": [
      316,
      321
    ]
  },
  {
    "type": "Identifier",
    "value": "x2",
    "start": 322,
    "end": 324,
    "range": [
      322,
      324
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 324,
    "end": 325,
    "range": [
      324,
      325
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 326,
    "end": 327,
    "range": [
      326,
      327
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 327,
    "end": 330,
    "range": [
      327,
      330
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 330,
    "end": 336,
    "range": [
      330,
      336
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 336,
    "end": 337,
    "range": [
      336,
      337
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 337,
    "end": 338,
    "range": [
      337,
      338
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 338,
    "end": 339,
    "range": [
      338,
      339
    ]
  },
  {
    "type": "String",
    "value": "'!'",
    "start": 340,
    "end": 343,
    "range": [
      340,
      343
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 343,
    "end": 344,
    "range": [
      343,
      344
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 345,
    "end": 346,
    "range": [
      345,
      346
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 347,
    "end": 348,
    "range": [
      347,
      348
    ]
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 348,
    "end": 351,
    "range": [
      348,
      351
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 351,
    "end": 352,
    "range": [
      351,
      352
    ]
  },
  {
    "type": "String",
    "value": "'!'",
    "start": 353,
    "end": 356,
    "range": [
      353,
      356
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 356,
    "end": 357,
    "range": [
      356,
      357
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 357,
    "end": 358,
    "range": [
      357,
      358
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 359,
    "end": 364,
    "range": [
      359,
      364
    ]
  },
  {
    "type": "Identifier",
    "value": "x3",
    "start": 365,
    "end": 367,
    "range": [
      365,
      367
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 367,
    "end": 368,
    "range": [
      367,
      368
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 369,
    "end": 370,
    "range": [
      369,
      370
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 370,
    "end": 373,
    "range": [
      370,
      373
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 373,
    "end": 379,
    "range": [
      373,
      379
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 379,
    "end": 380,
    "range": [
      379,
      380
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 380,
    "end": 381,
    "range": [
      380,
      381
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 381,
    "end": 382,
    "range": [
      381,
      382
    ]
  },
  {
    "type": "String",
    "value": "'!'",
    "start": 383,
    "end": 386,
    "range": [
      383,
      386
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 386,
    "end": 387,
    "range": [
      386,
      387
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 388,
    "end": 389,
    "range": [
      388,
      389
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 390,
    "end": 391,
    "range": [
      390,
      391
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 391,
    "end": 394,
    "range": [
      391,
      394
    ]
  },
  {
    "type": "Identifier",
    "value": "t3",
    "start": 394,
    "end": 396,
    "range": [
      394,
      396
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 396,
    "end": 397,
    "range": [
      396,
      397
    ]
  },
  {
    "type": "String",
    "value": "'!'",
    "start": 398,
    "end": 401,
    "range": [
      398,
      401
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 401,
    "end": 402,
    "range": [
      401,
      402
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 402,
    "end": 403,
    "range": [
      402,
      403
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 427,
    "end": 432,
    "range": [
      427,
      432
    ]
  },
  {
    "type": "Identifier",
    "value": "staticPath1Level",
    "start": 433,
    "end": 449,
    "range": [
      433,
      449
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 450,
    "end": 451,
    "range": [
      450,
      451
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 452,
    "end": 453,
    "range": [
      452,
      453
    ]
  },
  {
    "type": "String",
    "value": "\"home\"",
    "start": 453,
    "end": 459,
    "range": [
      453,
      459
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 459,
    "end": 460,
    "range": [
      459,
      460
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 461,
    "end": 463,
    "range": [
      461,
      463
    ]
  },
  {
    "type": "Identifier",
    "value": "const",
    "start": 464,
    "end": 469,
    "range": [
      464,
      469
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 469,
    "end": 470,
    "range": [
      469,
      470
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 471,
    "end": 476,
    "range": [
      471,
      476
    ]
  },
  {
    "type": "Identifier",
    "value": "staticPath2Level",
    "start": 477,
    "end": 493,
    "range": [
      477,
      493
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 494,
    "end": 495,
    "range": [
      494,
      495
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 496,
    "end": 497,
    "range": [
      496,
      497
    ]
  },
  {
    "type": "String",
    "value": "\"home\"",
    "start": 497,
    "end": 503,
    "range": [
      497,
      503
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 503,
    "end": 504,
    "range": [
      503,
      504
    ]
  },
  {
    "type": "String",
    "value": "\"user\"",
    "start": 505,
    "end": 511,
    "range": [
      505,
      511
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 511,
    "end": 512,
    "range": [
      511,
      512
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 513,
    "end": 515,
    "range": [
      513,
      515
    ]
  },
  {
    "type": "Identifier",
    "value": "const",
    "start": 516,
    "end": 521,
    "range": [
      516,
      521
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 521,
    "end": 522,
    "range": [
      521,
      522
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 523,
    "end": 528,
    "range": [
      523,
      528
    ]
  },
  {
    "type": "Identifier",
    "value": "staticPath3Level",
    "start": 529,
    "end": 545,
    "range": [
      529,
      545
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 546,
    "end": 547,
    "range": [
      546,
      547
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 548,
    "end": 549,
    "range": [
      548,
      549
    ]
  },
  {
    "type": "String",
    "value": "\"home\"",
    "start": 549,
    "end": 555,
    "range": [
      549,
      555
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 555,
    "end": 556,
    "range": [
      555,
      556
    ]
  },
  {
    "type": "String",
    "value": "\"user\"",
    "start": 557,
    "end": 563,
    "range": [
      557,
      563
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 563,
    "end": 564,
    "range": [
      563,
      564
    ]
  },
  {
    "type": "String",
    "value": "\"downloads\"",
    "start": 565,
    "end": 576,
    "range": [
      565,
      576
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 576,
    "end": 577,
    "range": [
      576,
      577
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 578,
    "end": 580,
    "range": [
      578,
      580
    ]
  },
  {
    "type": "Identifier",
    "value": "const",
    "start": 581,
    "end": 586,
    "range": [
      581,
      586
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 586,
    "end": 587,
    "range": [
      586,
      587
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 589,
    "end": 594,
    "range": [
      589,
      594
    ]
  },
  {
    "type": "Identifier",
    "value": "randomID",
    "start": 595,
    "end": 603,
    "range": [
      595,
      603
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 604,
    "end": 605,
    "range": [
      604,
      605
    ]
  },
  {
    "type": "String",
    "value": "'id'",
    "start": 606,
    "end": 610,
    "range": [
      606,
      610
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 611,
    "end": 613,
    "range": [
      611,
      613
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 614,
    "end": 620,
    "range": [
      614,
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
    "type": "Identifier",
    "value": "declare",
    "start": 623,
    "end": 630,
    "range": [
      623,
      630
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 631,
    "end": 639,
    "range": [
      631,
      639
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 640,
    "end": 643,
    "range": [
      640,
      643
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 643,
    "end": 644,
    "range": [
      643,
      644
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 644,
    "end": 649,
    "range": [
      644,
      649
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 650,
    "end": 651,
    "range": [
      650,
      651
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 651,
    "end": 652,
    "range": [
      651,
      652
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 652,
    "end": 653,
    "range": [
      652,
      653
    ]
  },
  {
    "type": "Identifier",
    "value": "path",
    "start": 653,
    "end": 657,
    "range": [
      653,
      657
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 657,
    "end": 658,
    "range": [
      657,
      658
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 659,
    "end": 660,
    "range": [
      659,
      660
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 660,
    "end": 661,
    "range": [
      660,
      661
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 661,
    "end": 662,
    "range": [
      661,
      662
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 663,
    "end": 664,
    "range": [
      663,
      664
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 664,
    "end": 665,
    "range": [
      664,
      665
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 667,
    "end": 672,
    "range": [
      667,
      672
    ]
  },
  {
    "type": "Identifier",
    "value": "a1",
    "start": 673,
    "end": 675,
    "range": [
      673,
      675
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 676,
    "end": 677,
    "range": [
      676,
      677
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 678,
    "end": 681,
    "range": [
      678,
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
    "type": "Punctuator",
    "value": "[",
    "start": 682,
    "end": 683,
    "range": [
      682,
      683
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 683,
    "end": 686,
    "range": [
      683,
      686
    ]
  },
  {
    "type": "Identifier",
    "value": "staticPath1Level",
    "start": 686,
    "end": 702,
    "range": [
      686,
      702
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 702,
    "end": 703,
    "range": [
      702,
      703
    ]
  },
  {
    "type": "Identifier",
    "value": "randomID",
    "start": 704,
    "end": 712,
    "range": [
      704,
      712
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 712,
    "end": 713,
    "range": [
      712,
      713
    ]
  },
  {
    "type": "String",
    "value": "'doc.pdf'",
    "start": 714,
    "end": 723,
    "range": [
      714,
      723
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 723,
    "end": 724,
    "range": [
      723,
      724
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 724,
    "end": 725,
    "range": [
      724,
      725
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 725,
    "end": 726,
    "range": [
      725,
      726
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 727,
    "end": 732,
    "range": [
      727,
      732
    ]
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 733,
    "end": 735,
    "range": [
      733,
      735
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 736,
    "end": 737,
    "range": [
      736,
      737
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 738,
    "end": 741,
    "range": [
      738,
      741
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 741,
    "end": 742,
    "range": [
      741,
      742
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 742,
    "end": 743,
    "range": [
      742,
      743
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 743,
    "end": 746,
    "range": [
      743,
      746
    ]
  },
  {
    "type": "Identifier",
    "value": "staticPath2Level",
    "start": 746,
    "end": 762,
    "range": [
      746,
      762
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 762,
    "end": 763,
    "range": [
      762,
      763
    ]
  },
  {
    "type": "Identifier",
    "value": "randomID",
    "start": 764,
    "end": 772,
    "range": [
      764,
      772
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 772,
    "end": 773,
    "range": [
      772,
      773
    ]
  },
  {
    "type": "String",
    "value": "'doc.pdf'",
    "start": 774,
    "end": 783,
    "range": [
      774,
      783
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 783,
    "end": 784,
    "range": [
      783,
      784
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 784,
    "end": 785,
    "range": [
      784,
      785
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 785,
    "end": 786,
    "range": [
      785,
      786
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 787,
    "end": 792,
    "range": [
      787,
      792
    ]
  },
  {
    "type": "Identifier",
    "value": "a3",
    "start": 793,
    "end": 795,
    "range": [
      793,
      795
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 796,
    "end": 797,
    "range": [
      796,
      797
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 798,
    "end": 801,
    "range": [
      798,
      801
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 801,
    "end": 802,
    "range": [
      801,
      802
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 802,
    "end": 803,
    "range": [
      802,
      803
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 803,
    "end": 806,
    "range": [
      803,
      806
    ]
  },
  {
    "type": "Identifier",
    "value": "staticPath3Level",
    "start": 806,
    "end": 822,
    "range": [
      806,
      822
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 822,
    "end": 823,
    "range": [
      822,
      823
    ]
  },
  {
    "type": "Identifier",
    "value": "randomID",
    "start": 824,
    "end": 832,
    "range": [
      824,
      832
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 832,
    "end": 833,
    "range": [
      832,
      833
    ]
  },
  {
    "type": "String",
    "value": "'doc.pdf'",
    "start": 834,
    "end": 843,
    "range": [
      834,
      843
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 843,
    "end": 844,
    "range": [
      843,
      844
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 844,
    "end": 845,
    "range": [
      844,
      845
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 845,
    "end": 846,
    "range": [
      845,
      846
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 848,
    "end": 853,
    "range": [
      848,
      853
    ]
  },
  {
    "type": "Identifier",
    "value": "b1",
    "start": 854,
    "end": 856,
    "range": [
      854,
      856
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 857,
    "end": 858,
    "range": [
      857,
      858
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 859,
    "end": 862,
    "range": [
      859,
      862
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 862,
    "end": 863,
    "range": [
      862,
      863
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 863,
    "end": 864,
    "range": [
      863,
      864
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 864,
    "end": 867,
    "range": [
      864,
      867
    ]
  },
  {
    "type": "Identifier",
    "value": "staticPath1Level",
    "start": 867,
    "end": 883,
    "range": [
      867,
      883
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 883,
    "end": 884,
    "range": [
      883,
      884
    ]
  },
  {
    "type": "Identifier",
    "value": "randomID",
    "start": 885,
    "end": 893,
    "range": [
      885,
      893
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 893,
    "end": 894,
    "range": [
      893,
      894
    ]
  },
  {
    "type": "String",
    "value": "'folder'",
    "start": 895,
    "end": 903,
    "range": [
      895,
      903
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 903,
    "end": 904,
    "range": [
      903,
      904
    ]
  },
  {
    "type": "String",
    "value": "'doc.pdf'",
    "start": 905,
    "end": 914,
    "range": [
      905,
      914
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 914,
    "end": 915,
    "range": [
      914,
      915
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 915,
    "end": 916,
    "range": [
      915,
      916
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 916,
    "end": 917,
    "range": [
      916,
      917
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 918,
    "end": 923,
    "range": [
      918,
      923
    ]
  },
  {
    "type": "Identifier",
    "value": "b2",
    "start": 924,
    "end": 926,
    "range": [
      924,
      926
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 927,
    "end": 928,
    "range": [
      927,
      928
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 929,
    "end": 932,
    "range": [
      929,
      932
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 932,
    "end": 933,
    "range": [
      932,
      933
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 933,
    "end": 934,
    "range": [
      933,
      934
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 934,
    "end": 937,
    "range": [
      934,
      937
    ]
  },
  {
    "type": "Identifier",
    "value": "staticPath2Level",
    "start": 937,
    "end": 953,
    "range": [
      937,
      953
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 953,
    "end": 954,
    "range": [
      953,
      954
    ]
  },
  {
    "type": "Identifier",
    "value": "randomID",
    "start": 955,
    "end": 963,
    "range": [
      955,
      963
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 963,
    "end": 964,
    "range": [
      963,
      964
    ]
  },
  {
    "type": "String",
    "value": "'folder'",
    "start": 965,
    "end": 973,
    "range": [
      965,
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
    "type": "String",
    "value": "'doc.pdf'",
    "start": 975,
    "end": 984,
    "range": [
      975,
      984
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 984,
    "end": 985,
    "range": [
      984,
      985
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 985,
    "end": 986,
    "range": [
      985,
      986
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 986,
    "end": 987,
    "range": [
      986,
      987
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 988,
    "end": 993,
    "range": [
      988,
      993
    ]
  },
  {
    "type": "Identifier",
    "value": "b3",
    "start": 994,
    "end": 996,
    "range": [
      994,
      996
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 997,
    "end": 998,
    "range": [
      997,
      998
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 999,
    "end": 1002,
    "range": [
      999,
      1002
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1002,
    "end": 1003,
    "range": [
      1002,
      1003
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1003,
    "end": 1004,
    "range": [
      1003,
      1004
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1004,
    "end": 1007,
    "range": [
      1004,
      1007
    ]
  },
  {
    "type": "Identifier",
    "value": "staticPath3Level",
    "start": 1007,
    "end": 1023,
    "range": [
      1007,
      1023
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1023,
    "end": 1024,
    "range": [
      1023,
      1024
    ]
  },
  {
    "type": "Identifier",
    "value": "randomID",
    "start": 1025,
    "end": 1033,
    "range": [
      1025,
      1033
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1033,
    "end": 1034,
    "range": [
      1033,
      1034
    ]
  },
  {
    "type": "String",
    "value": "'folder'",
    "start": 1035,
    "end": 1043,
    "range": [
      1035,
      1043
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1043,
    "end": 1044,
    "range": [
      1043,
      1044
    ]
  },
  {
    "type": "String",
    "value": "'doc.pdf'",
    "start": 1045,
    "end": 1054,
    "range": [
      1045,
      1054
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1054,
    "end": 1055,
    "range": [
      1054,
      1055
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1055,
    "end": 1056,
    "range": [
      1055,
      1056
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1056,
    "end": 1057,
    "range": [
      1056,
      1057
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1059,
    "end": 1064,
    "range": [
      1059,
      1064
    ]
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 1065,
    "end": 1067,
    "range": [
      1065,
      1067
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1068,
    "end": 1069,
    "range": [
      1068,
      1069
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1070,
    "end": 1073,
    "range": [
      1070,
      1073
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1073,
    "end": 1074,
    "range": [
      1073,
      1074
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1074,
    "end": 1075,
    "range": [
      1074,
      1075
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1075,
    "end": 1078,
    "range": [
      1075,
      1078
    ]
  },
  {
    "type": "Identifier",
    "value": "staticPath1Level",
    "start": 1078,
    "end": 1094,
    "range": [
      1078,
      1094
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1094,
    "end": 1095,
    "range": [
      1094,
      1095
    ]
  },
  {
    "type": "Identifier",
    "value": "randomID",
    "start": 1096,
    "end": 1104,
    "range": [
      1096,
      1104
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1104,
    "end": 1105,
    "range": [
      1104,
      1105
    ]
  },
  {
    "type": "String",
    "value": "'folder'",
    "start": 1106,
    "end": 1114,
    "range": [
      1106,
      1114
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1114,
    "end": 1115,
    "range": [
      1114,
      1115
    ]
  },
  {
    "type": "String",
    "value": "'subfolder'",
    "start": 1116,
    "end": 1127,
    "range": [
      1116,
      1127
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1127,
    "end": 1128,
    "range": [
      1127,
      1128
    ]
  },
  {
    "type": "String",
    "value": "'doc.pdf'",
    "start": 1129,
    "end": 1138,
    "range": [
      1129,
      1138
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1138,
    "end": 1139,
    "range": [
      1138,
      1139
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1139,
    "end": 1140,
    "range": [
      1139,
      1140
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1140,
    "end": 1141,
    "range": [
      1140,
      1141
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1142,
    "end": 1147,
    "range": [
      1142,
      1147
    ]
  },
  {
    "type": "Identifier",
    "value": "c2",
    "start": 1148,
    "end": 1150,
    "range": [
      1148,
      1150
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1151,
    "end": 1152,
    "range": [
      1151,
      1152
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1153,
    "end": 1156,
    "range": [
      1153,
      1156
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1156,
    "end": 1157,
    "range": [
      1156,
      1157
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1157,
    "end": 1158,
    "range": [
      1157,
      1158
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1158,
    "end": 1161,
    "range": [
      1158,
      1161
    ]
  },
  {
    "type": "Identifier",
    "value": "staticPath2Level",
    "start": 1161,
    "end": 1177,
    "range": [
      1161,
      1177
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1177,
    "end": 1178,
    "range": [
      1177,
      1178
    ]
  },
  {
    "type": "Identifier",
    "value": "randomID",
    "start": 1179,
    "end": 1187,
    "range": [
      1179,
      1187
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1187,
    "end": 1188,
    "range": [
      1187,
      1188
    ]
  },
  {
    "type": "String",
    "value": "'folder'",
    "start": 1189,
    "end": 1197,
    "range": [
      1189,
      1197
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1197,
    "end": 1198,
    "range": [
      1197,
      1198
    ]
  },
  {
    "type": "String",
    "value": "'subfolder'",
    "start": 1199,
    "end": 1210,
    "range": [
      1199,
      1210
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1210,
    "end": 1211,
    "range": [
      1210,
      1211
    ]
  },
  {
    "type": "String",
    "value": "'doc.pdf'",
    "start": 1212,
    "end": 1221,
    "range": [
      1212,
      1221
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1221,
    "end": 1222,
    "range": [
      1221,
      1222
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1222,
    "end": 1223,
    "range": [
      1222,
      1223
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1223,
    "end": 1224,
    "range": [
      1223,
      1224
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1225,
    "end": 1230,
    "range": [
      1225,
      1230
    ]
  },
  {
    "type": "Identifier",
    "value": "c3",
    "start": 1231,
    "end": 1233,
    "range": [
      1231,
      1233
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1234,
    "end": 1235,
    "range": [
      1234,
      1235
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1236,
    "end": 1239,
    "range": [
      1236,
      1239
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1239,
    "end": 1240,
    "range": [
      1239,
      1240
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1240,
    "end": 1241,
    "range": [
      1240,
      1241
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1241,
    "end": 1244,
    "range": [
      1241,
      1244
    ]
  },
  {
    "type": "Identifier",
    "value": "staticPath3Level",
    "start": 1244,
    "end": 1260,
    "range": [
      1244,
      1260
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1260,
    "end": 1261,
    "range": [
      1260,
      1261
    ]
  },
  {
    "type": "Identifier",
    "value": "randomID",
    "start": 1262,
    "end": 1270,
    "range": [
      1262,
      1270
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1270,
    "end": 1271,
    "range": [
      1270,
      1271
    ]
  },
  {
    "type": "String",
    "value": "'folder'",
    "start": 1272,
    "end": 1280,
    "range": [
      1272,
      1280
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1280,
    "end": 1281,
    "range": [
      1280,
      1281
    ]
  },
  {
    "type": "String",
    "value": "'subfolder'",
    "start": 1282,
    "end": 1293,
    "range": [
      1282,
      1293
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1293,
    "end": 1294,
    "range": [
      1293,
      1294
    ]
  },
  {
    "type": "String",
    "value": "'doc.pdf'",
    "start": 1295,
    "end": 1304,
    "range": [
      1295,
      1304
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1304,
    "end": 1305,
    "range": [
      1304,
      1305
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1305,
    "end": 1306,
    "range": [
      1305,
      1306
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1306,
    "end": 1307,
    "range": [
      1306,
      1307
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1309,
    "end": 1314,
    "range": [
      1309,
      1314
    ]
  },
  {
    "type": "Identifier",
    "value": "d1",
    "start": 1315,
    "end": 1317,
    "range": [
      1315,
      1317
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1318,
    "end": 1319,
    "range": [
      1318,
      1319
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1320,
    "end": 1323,
    "range": [
      1320,
      1323
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1323,
    "end": 1324,
    "range": [
      1323,
      1324
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1324,
    "end": 1325,
    "range": [
      1324,
      1325
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1325,
    "end": 1328,
    "range": [
      1325,
      1328
    ]
  },
  {
    "type": "Identifier",
    "value": "staticPath1Level",
    "start": 1328,
    "end": 1344,
    "range": [
      1328,
      1344
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1344,
    "end": 1345,
    "range": [
      1344,
      1345
    ]
  },
  {
    "type": "Identifier",
    "value": "randomID",
    "start": 1346,
    "end": 1354,
    "range": [
      1346,
      1354
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1354,
    "end": 1355,
    "range": [
      1354,
      1355
    ]
  },
  {
    "type": "String",
    "value": "'folder'",
    "start": 1356,
    "end": 1364,
    "range": [
      1356,
      1364
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1364,
    "end": 1365,
    "range": [
      1364,
      1365
    ]
  },
  {
    "type": "String",
    "value": "'subfolder'",
    "start": 1366,
    "end": 1377,
    "range": [
      1366,
      1377
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1377,
    "end": 1378,
    "range": [
      1377,
      1378
    ]
  },
  {
    "type": "String",
    "value": "'another-subfolder'",
    "start": 1379,
    "end": 1398,
    "range": [
      1379,
      1398
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1398,
    "end": 1399,
    "range": [
      1398,
      1399
    ]
  },
  {
    "type": "String",
    "value": "'doc.pdf'",
    "start": 1400,
    "end": 1409,
    "range": [
      1400,
      1409
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1409,
    "end": 1410,
    "range": [
      1409,
      1410
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1410,
    "end": 1411,
    "range": [
      1410,
      1411
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1411,
    "end": 1412,
    "range": [
      1411,
      1412
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1413,
    "end": 1418,
    "range": [
      1413,
      1418
    ]
  },
  {
    "type": "Identifier",
    "value": "d2",
    "start": 1419,
    "end": 1421,
    "range": [
      1419,
      1421
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1422,
    "end": 1423,
    "range": [
      1422,
      1423
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1424,
    "end": 1427,
    "range": [
      1424,
      1427
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1427,
    "end": 1428,
    "range": [
      1427,
      1428
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1428,
    "end": 1429,
    "range": [
      1428,
      1429
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1429,
    "end": 1432,
    "range": [
      1429,
      1432
    ]
  },
  {
    "type": "Identifier",
    "value": "staticPath2Level",
    "start": 1432,
    "end": 1448,
    "range": [
      1432,
      1448
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1448,
    "end": 1449,
    "range": [
      1448,
      1449
    ]
  },
  {
    "type": "Identifier",
    "value": "randomID",
    "start": 1450,
    "end": 1458,
    "range": [
      1450,
      1458
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1458,
    "end": 1459,
    "range": [
      1458,
      1459
    ]
  },
  {
    "type": "String",
    "value": "'folder'",
    "start": 1460,
    "end": 1468,
    "range": [
      1460,
      1468
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1468,
    "end": 1469,
    "range": [
      1468,
      1469
    ]
  },
  {
    "type": "String",
    "value": "'subfolder'",
    "start": 1470,
    "end": 1481,
    "range": [
      1470,
      1481
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1481,
    "end": 1482,
    "range": [
      1481,
      1482
    ]
  },
  {
    "type": "String",
    "value": "'another-subfolder'",
    "start": 1483,
    "end": 1502,
    "range": [
      1483,
      1502
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1502,
    "end": 1503,
    "range": [
      1502,
      1503
    ]
  },
  {
    "type": "String",
    "value": "'doc.pdf'",
    "start": 1504,
    "end": 1513,
    "range": [
      1504,
      1513
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1513,
    "end": 1514,
    "range": [
      1513,
      1514
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1514,
    "end": 1515,
    "range": [
      1514,
      1515
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1515,
    "end": 1516,
    "range": [
      1515,
      1516
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1517,
    "end": 1522,
    "range": [
      1517,
      1522
    ]
  },
  {
    "type": "Identifier",
    "value": "d3",
    "start": 1523,
    "end": 1525,
    "range": [
      1523,
      1525
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1526,
    "end": 1527,
    "range": [
      1526,
      1527
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1528,
    "end": 1531,
    "range": [
      1528,
      1531
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1531,
    "end": 1532,
    "range": [
      1531,
      1532
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1532,
    "end": 1533,
    "range": [
      1532,
      1533
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1533,
    "end": 1536,
    "range": [
      1533,
      1536
    ]
  },
  {
    "type": "Identifier",
    "value": "staticPath3Level",
    "start": 1536,
    "end": 1552,
    "range": [
      1536,
      1552
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1552,
    "end": 1553,
    "range": [
      1552,
      1553
    ]
  },
  {
    "type": "Identifier",
    "value": "randomID",
    "start": 1554,
    "end": 1562,
    "range": [
      1554,
      1562
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1562,
    "end": 1563,
    "range": [
      1562,
      1563
    ]
  },
  {
    "type": "String",
    "value": "'folder'",
    "start": 1564,
    "end": 1572,
    "range": [
      1564,
      1572
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1572,
    "end": 1573,
    "range": [
      1572,
      1573
    ]
  },
  {
    "type": "String",
    "value": "'subfolder'",
    "start": 1574,
    "end": 1585,
    "range": [
      1574,
      1585
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1585,
    "end": 1586,
    "range": [
      1585,
      1586
    ]
  },
  {
    "type": "String",
    "value": "'another-subfolder'",
    "start": 1587,
    "end": 1606,
    "range": [
      1587,
      1606
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1606,
    "end": 1607,
    "range": [
      1606,
      1607
    ]
  },
  {
    "type": "String",
    "value": "'doc.pdf'",
    "start": 1608,
    "end": 1617,
    "range": [
      1608,
      1617
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1617,
    "end": 1618,
    "range": [
      1617,
      1618
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1618,
    "end": 1619,
    "range": [
      1618,
      1619
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1619,
    "end": 1620,
    "range": [
      1619,
      1620
    ]
  }
]
```
