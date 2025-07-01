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
