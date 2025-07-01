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
            "type": "TSCallSignatureDeclaration",
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
                    "start": 22,
                    "end": 28
                  },
                  "start": 20,
                  "end": 28
                },
                "start": 19,
                "end": 28
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 31,
                "end": 37
              },
              "start": 29,
              "end": 37
            },
            "start": 18,
            "end": 38
          },
          {
            "type": "TSCallSignatureDeclaration",
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
                    "type": "TSStringKeyword",
                    "start": 47,
                    "end": 53
                  },
                  "start": 45,
                  "end": 53
                },
                "start": 44,
                "end": 53
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 59,
                    "end": 65
                  },
                  "start": 57,
                  "end": 65
                },
                "start": 55,
                "end": 65
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 68,
                "end": 75
              },
              "start": 66,
              "end": 75
            },
            "start": 43,
            "end": 76
          },
          {
            "type": "TSCallSignatureDeclaration",
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
                      "name": "Date",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 85,
                      "end": 89
                    },
                    "typeArguments": null,
                    "start": 85,
                    "end": 89
                  },
                  "start": 83,
                  "end": 89
                },
                "start": 82,
                "end": 89
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 92,
                "end": 96
              },
              "start": 90,
              "end": 96
            },
            "start": 81,
            "end": 97
          },
          {
            "type": "TSCallSignatureDeclaration",
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
                    "start": 103,
                    "end": 104
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 103,
                  "end": 104
                }
              ],
              "start": 102,
              "end": 105
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
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 109,
                        "end": 110
                      },
                      "typeArguments": null,
                      "start": 109,
                      "end": 110
                    },
                    "start": 109,
                    "end": 112
                  },
                  "start": 107,
                  "end": 112
                },
                "start": 106,
                "end": 112
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
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
                    "start": 115,
                    "end": 116
                  },
                  "typeArguments": null,
                  "start": 115,
                  "end": 116
                },
                "start": 115,
                "end": 118
              },
              "start": 113,
              "end": 118
            },
            "start": 102,
            "end": 119
          }
        ],
        "start": 12,
        "end": 121
      },
      "declare": false,
      "start": 0,
      "end": 121
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 133,
        "end": 134
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
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
                    "start": 145,
                    "end": 151
                  },
                  "start": 143,
                  "end": 151
                },
                "start": 142,
                "end": 151
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 154,
                "end": 160
              },
              "start": 152,
              "end": 160
            },
            "start": 141,
            "end": 161
          },
          {
            "type": "TSCallSignatureDeclaration",
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
                    "type": "TSStringKeyword",
                    "start": 170,
                    "end": 176
                  },
                  "start": 168,
                  "end": 176
                },
                "start": 167,
                "end": 176
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 179,
                "end": 185
              },
              "start": 177,
              "end": 185
            },
            "start": 166,
            "end": 186
          },
          {
            "type": "TSCallSignatureDeclaration",
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
                      "name": "Date",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 195,
                      "end": 199
                    },
                    "typeArguments": null,
                    "start": 195,
                    "end": 199
                  },
                  "start": 193,
                  "end": 199
                },
                "start": 192,
                "end": 199
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 202,
                "end": 206
              },
              "start": 200,
              "end": 206
            },
            "start": 191,
            "end": 207
          },
          {
            "type": "TSCallSignatureDeclaration",
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
                    "start": 213,
                    "end": 214
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 213,
                  "end": 214
                }
              ],
              "start": 212,
              "end": 215
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
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 219,
                        "end": 220
                      },
                      "typeArguments": null,
                      "start": 219,
                      "end": 220
                    },
                    "start": 219,
                    "end": 222
                  },
                  "start": 217,
                  "end": 222
                },
                "start": 216,
                "end": 222
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
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
                    "start": 225,
                    "end": 226
                  },
                  "typeArguments": null,
                  "start": 225,
                  "end": 226
                },
                "start": 225,
                "end": 228
              },
              "start": 223,
              "end": 228
            },
            "start": 212,
            "end": 229
          }
        ],
        "start": 135,
        "end": 231
      },
      "declare": false,
      "start": 123,
      "end": 231
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 243,
        "end": 244
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
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
                    "type": "TSStringKeyword",
                    "start": 255,
                    "end": 261
                  },
                  "start": 253,
                  "end": 261
                },
                "start": 252,
                "end": 261
              },
              {
                "type": "RestElement",
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 266,
                  "end": 267
                },
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSStringKeyword",
                      "start": 269,
                      "end": 275
                    },
                    "start": 269,
                    "end": 277
                  },
                  "start": 267,
                  "end": 277
                },
                "value": null,
                "start": 263,
                "end": 277
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 280,
                "end": 286
              },
              "start": 278,
              "end": 286
            },
            "start": 251,
            "end": 287
          },
          {
            "type": "TSCallSignatureDeclaration",
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
                    "start": 296,
                    "end": 302
                  },
                  "start": 294,
                  "end": 302
                },
                "start": 293,
                "end": 302
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "s",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 308,
                    "end": 314
                  },
                  "start": 306,
                  "end": 314
                },
                "start": 304,
                "end": 314
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 317,
                "end": 323
              },
              "start": 315,
              "end": 323
            },
            "start": 292,
            "end": 324
          },
          {
            "type": "TSCallSignatureDeclaration",
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
                    "start": 330,
                    "end": 331
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 330,
                  "end": 331
                }
              ],
              "start": 329,
              "end": 332
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
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 336,
                        "end": 337
                      },
                      "typeArguments": null,
                      "start": 336,
                      "end": 337
                    },
                    "start": 336,
                    "end": 339
                  },
                  "start": 334,
                  "end": 339
                },
                "start": 333,
                "end": 339
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
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
                    "start": 342,
                    "end": 343
                  },
                  "typeArguments": null,
                  "start": 342,
                  "end": 343
                },
                "start": 342,
                "end": 345
              },
              "start": 340,
              "end": 345
            },
            "start": 329,
            "end": 346
          }
        ],
        "start": 245,
        "end": 348
      },
      "declare": false,
      "start": 233,
      "end": 348
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
            "name": "f1",
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
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 358,
                      "end": 359
                    },
                    "typeArguments": null,
                    "start": 358,
                    "end": 359
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 362,
                      "end": 363
                    },
                    "typeArguments": null,
                    "start": 362,
                    "end": 363
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 366,
                      "end": 367
                    },
                    "typeArguments": null,
                    "start": 366,
                    "end": 367
                  }
                ],
                "start": 358,
                "end": 367
              },
              "start": 356,
              "end": 367
            },
            "start": 354,
            "end": 367
          },
          "init": null,
          "definite": false,
          "start": 354,
          "end": 367
        }
      ],
      "declare": false,
      "start": 350,
      "end": 368
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
            "name": "n1",
            "optional": false,
            "typeAnnotation": null,
            "start": 373,
            "end": 375
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f1",
              "optional": false,
              "typeAnnotation": null,
              "start": 378,
              "end": 380
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 42,
                "raw": "42",
                "start": 381,
                "end": 383
              }
            ],
            "optional": false,
            "start": 378,
            "end": 384
          },
          "definite": false,
          "start": 373,
          "end": 384
        }
      ],
      "declare": false,
      "start": 369,
      "end": 385
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
            "name": "s1",
            "optional": false,
            "typeAnnotation": null,
            "start": 412,
            "end": 414
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f1",
              "optional": false,
              "typeAnnotation": null,
              "start": 417,
              "end": 419
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "abc",
                "raw": "\"abc\"",
                "start": 420,
                "end": 425
              }
            ],
            "optional": false,
            "start": 417,
            "end": 426
          },
          "definite": false,
          "start": 412,
          "end": 426
        }
      ],
      "declare": false,
      "start": 408,
      "end": 427
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
            "name": "a1",
            "optional": false,
            "typeAnnotation": null,
            "start": 470,
            "end": 472
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f1",
              "optional": false,
              "typeAnnotation": null,
              "start": 475,
              "end": 477
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 479,
                    "end": 483
                  },
                  {
                    "type": "Literal",
                    "value": false,
                    "raw": "false",
                    "start": 485,
                    "end": 490
                  }
                ],
                "start": 478,
                "end": 491
              }
            ],
            "optional": false,
            "start": 475,
            "end": 492
          },
          "definite": false,
          "start": 470,
          "end": 492
        }
      ],
      "declare": false,
      "start": 466,
      "end": 493
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
            "name": "f2",
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
                      "name": "C",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 517,
                      "end": 518
                    },
                    "typeArguments": null,
                    "start": 517,
                    "end": 518
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 521,
                      "end": 522
                    },
                    "typeArguments": null,
                    "start": 521,
                    "end": 522
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 525,
                      "end": 526
                    },
                    "typeArguments": null,
                    "start": 525,
                    "end": 526
                  }
                ],
                "start": 517,
                "end": 526
              },
              "start": 515,
              "end": 526
            },
            "start": 513,
            "end": 526
          },
          "init": null,
          "definite": false,
          "start": 513,
          "end": 526
        }
      ],
      "declare": false,
      "start": 509,
      "end": 527
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
            "name": "n2",
            "optional": false,
            "typeAnnotation": null,
            "start": 532,
            "end": 534
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f2",
              "optional": false,
              "typeAnnotation": null,
              "start": 537,
              "end": 539
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 42,
                "raw": "42",
                "start": 540,
                "end": 542
              }
            ],
            "optional": false,
            "start": 537,
            "end": 543
          },
          "definite": false,
          "start": 532,
          "end": 543
        }
      ],
      "declare": false,
      "start": 528,
      "end": 544
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
            "name": "s2",
            "optional": false,
            "typeAnnotation": null,
            "start": 571,
            "end": 573
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f2",
              "optional": false,
              "typeAnnotation": null,
              "start": 576,
              "end": 578
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "abc",
                "raw": "\"abc\"",
                "start": 579,
                "end": 584
              }
            ],
            "optional": false,
            "start": 576,
            "end": 585
          },
          "definite": false,
          "start": 571,
          "end": 585
        }
      ],
      "declare": false,
      "start": 567,
      "end": 586
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
            "name": "a2",
            "optional": false,
            "typeAnnotation": null,
            "start": 629,
            "end": 631
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f2",
              "optional": false,
              "typeAnnotation": null,
              "start": 634,
              "end": 636
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 638,
                    "end": 642
                  },
                  {
                    "type": "Literal",
                    "value": false,
                    "raw": "false",
                    "start": 644,
                    "end": 649
                  }
                ],
                "start": 637,
                "end": 650
              }
            ],
            "optional": false,
            "start": 634,
            "end": 651
          },
          "definite": false,
          "start": 629,
          "end": 651
        }
      ],
      "declare": false,
      "start": 625,
      "end": 652
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
            "name": "f3",
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
                      "name": "B",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 676,
                      "end": 677
                    },
                    "typeArguments": null,
                    "start": 676,
                    "end": 677
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 680,
                      "end": 681
                    },
                    "typeArguments": null,
                    "start": 680,
                    "end": 681
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 684,
                      "end": 685
                    },
                    "typeArguments": null,
                    "start": 684,
                    "end": 685
                  }
                ],
                "start": 676,
                "end": 685
              },
              "start": 674,
              "end": 685
            },
            "start": 672,
            "end": 685
          },
          "init": null,
          "definite": false,
          "start": 672,
          "end": 685
        }
      ],
      "declare": false,
      "start": 668,
      "end": 686
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
            "name": "n3",
            "optional": false,
            "typeAnnotation": null,
            "start": 691,
            "end": 693
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f3",
              "optional": false,
              "typeAnnotation": null,
              "start": 696,
              "end": 698
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 42,
                "raw": "42",
                "start": 699,
                "end": 701
              }
            ],
            "optional": false,
            "start": 696,
            "end": 702
          },
          "definite": false,
          "start": 691,
          "end": 702
        }
      ],
      "declare": false,
      "start": 687,
      "end": 703
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
            "name": "s3",
            "optional": false,
            "typeAnnotation": null,
            "start": 730,
            "end": 732
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f3",
              "optional": false,
              "typeAnnotation": null,
              "start": 735,
              "end": 737
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "abc",
                "raw": "\"abc\"",
                "start": 738,
                "end": 743
              }
            ],
            "optional": false,
            "start": 735,
            "end": 744
          },
          "definite": false,
          "start": 730,
          "end": 744
        }
      ],
      "declare": false,
      "start": 726,
      "end": 745
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
            "name": "a3",
            "optional": false,
            "typeAnnotation": null,
            "start": 788,
            "end": 790
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f3",
              "optional": false,
              "typeAnnotation": null,
              "start": 793,
              "end": 795
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 797,
                    "end": 801
                  },
                  {
                    "type": "Literal",
                    "value": false,
                    "raw": "false",
                    "start": 803,
                    "end": 808
                  }
                ],
                "start": 796,
                "end": 809
              }
            ],
            "optional": false,
            "start": 793,
            "end": 810
          },
          "definite": false,
          "start": 788,
          "end": 810
        }
      ],
      "declare": false,
      "start": 784,
      "end": 811
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 826
}
```
