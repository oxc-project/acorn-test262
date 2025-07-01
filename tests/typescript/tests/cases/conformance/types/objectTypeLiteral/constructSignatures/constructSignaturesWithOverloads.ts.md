__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 73,
        "end": 74
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 81,
              "end": 92
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
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
                      "type": "TSNumberKeyword",
                      "start": 96,
                      "end": 102
                    },
                    "start": 94,
                    "end": 102
                  },
                  "start": 93,
                  "end": 102
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
                      "start": 108,
                      "end": 114
                    },
                    "start": 106,
                    "end": 114
                  },
                  "start": 104,
                  "end": 114
                }
              ],
              "returnType": null,
              "body": null,
              "expression": false,
              "start": 92,
              "end": 116
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 81,
            "end": 116
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 121,
              "end": 132
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
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
                      "type": "TSNumberKeyword",
                      "start": 136,
                      "end": 142
                    },
                    "start": 134,
                    "end": 142
                  },
                  "start": 133,
                  "end": 142
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
                      "start": 147,
                      "end": 153
                    },
                    "start": 145,
                    "end": 153
                  },
                  "start": 144,
                  "end": 153
                }
              ],
              "returnType": null,
              "body": null,
              "expression": false,
              "start": 132,
              "end": 155
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 121,
            "end": 155
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 160,
              "end": 171
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
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
                      "type": "TSNumberKeyword",
                      "start": 175,
                      "end": 181
                    },
                    "start": 173,
                    "end": 181
                  },
                  "start": 172,
                  "end": 181
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 183,
                "end": 186
              },
              "expression": false,
              "start": 171,
              "end": 186
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 160,
            "end": 186
          }
        ],
        "start": 75,
        "end": 188
      },
      "abstract": false,
      "declare": false,
      "start": 67,
      "end": 188
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
            "name": "r1",
            "optional": false,
            "typeAnnotation": null,
            "start": 194,
            "end": 196
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 203,
              "end": 204
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 205,
                "end": 206
              },
              {
                "type": "Literal",
                "value": "",
                "raw": "''",
                "start": 208,
                "end": 210
              }
            ],
            "start": 199,
            "end": 211
          },
          "definite": false,
          "start": 194,
          "end": 211
        }
      ],
      "declare": false,
      "start": 190,
      "end": 212
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C2",
        "optional": false,
        "typeAnnotation": null,
        "start": 220,
        "end": 222
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
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 232,
              "end": 243
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
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
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 247,
                        "end": 248
                      },
                      "typeArguments": null,
                      "start": 247,
                      "end": 248
                    },
                    "start": 245,
                    "end": 248
                  },
                  "start": 244,
                  "end": 248
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
                      "start": 254,
                      "end": 260
                    },
                    "start": 252,
                    "end": 260
                  },
                  "start": 250,
                  "end": 260
                }
              ],
              "returnType": null,
              "body": null,
              "expression": false,
              "start": 243,
              "end": 262
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 232,
            "end": 262
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 267,
              "end": 278
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
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
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 282,
                        "end": 283
                      },
                      "typeArguments": null,
                      "start": 282,
                      "end": 283
                    },
                    "start": 280,
                    "end": 283
                  },
                  "start": 279,
                  "end": 283
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
                      "start": 288,
                      "end": 294
                    },
                    "start": 286,
                    "end": 294
                  },
                  "start": 285,
                  "end": 294
                }
              ],
              "returnType": null,
              "body": null,
              "expression": false,
              "start": 278,
              "end": 296
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 267,
            "end": 296
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 301,
              "end": 312
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
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
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 316,
                        "end": 317
                      },
                      "typeArguments": null,
                      "start": 316,
                      "end": 317
                    },
                    "start": 314,
                    "end": 317
                  },
                  "start": 313,
                  "end": 317
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 319,
                "end": 322
              },
              "expression": false,
              "start": 312,
              "end": 322
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 301,
            "end": 322
          }
        ],
        "start": 226,
        "end": 324
      },
      "abstract": false,
      "declare": false,
      "start": 214,
      "end": 324
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
            "name": "r2",
            "optional": false,
            "typeAnnotation": null,
            "start": 330,
            "end": 332
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "C2",
              "optional": false,
              "typeAnnotation": null,
              "start": 339,
              "end": 341
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 342,
                "end": 343
              },
              {
                "type": "Literal",
                "value": "",
                "raw": "''",
                "start": 345,
                "end": 347
              }
            ],
            "start": 335,
            "end": 348
          },
          "definite": false,
          "start": 330,
          "end": 348
        }
      ],
      "declare": false,
      "start": 326,
      "end": 349
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null,
        "start": 361,
        "end": 362
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
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
                    "start": 376,
                    "end": 382
                  },
                  "start": 374,
                  "end": 382
                },
                "start": 373,
                "end": 382
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
                    "start": 388,
                    "end": 394
                  },
                  "start": 386,
                  "end": 394
                },
                "start": 384,
                "end": 394
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 397,
                  "end": 398
                },
                "typeArguments": null,
                "start": 397,
                "end": 398
              },
              "start": 395,
              "end": 398
            },
            "start": 369,
            "end": 399
          },
          {
            "type": "TSConstructSignatureDeclaration",
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
                    "start": 411,
                    "end": 417
                  },
                  "start": 409,
                  "end": 417
                },
                "start": 408,
                "end": 417
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
                    "start": 422,
                    "end": 428
                  },
                  "start": 420,
                  "end": 428
                },
                "start": 419,
                "end": 428
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 431,
                  "end": 432
                },
                "typeArguments": null,
                "start": 431,
                "end": 432
              },
              "start": 429,
              "end": 432
            },
            "start": 404,
            "end": 433
          }
        ],
        "start": 363,
        "end": 435
      },
      "declare": false,
      "start": 351,
      "end": 435
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
            "name": "i",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "I",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 444,
                  "end": 445
                },
                "typeArguments": null,
                "start": 444,
                "end": 445
              },
              "start": 442,
              "end": 445
            },
            "start": 441,
            "end": 445
          },
          "init": null,
          "definite": false,
          "start": 441,
          "end": 445
        }
      ],
      "declare": false,
      "start": 437,
      "end": 446
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
            "name": "r3",
            "optional": false,
            "typeAnnotation": null,
            "start": 451,
            "end": 453
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 460,
              "end": 461
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 462,
                "end": 463
              },
              {
                "type": "Literal",
                "value": "",
                "raw": "''",
                "start": 465,
                "end": 467
              }
            ],
            "start": 456,
            "end": 468
          },
          "definite": false,
          "start": 451,
          "end": 468
        }
      ],
      "declare": false,
      "start": 447,
      "end": 469
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I2",
        "optional": false,
        "typeAnnotation": null,
        "start": 481,
        "end": 483
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
              "start": 484,
              "end": 485
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 484,
            "end": 485
          }
        ],
        "start": 483,
        "end": 486
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
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
                      "start": 501,
                      "end": 502
                    },
                    "typeArguments": null,
                    "start": 501,
                    "end": 502
                  },
                  "start": 499,
                  "end": 502
                },
                "start": 498,
                "end": 502
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
                    "start": 508,
                    "end": 514
                  },
                  "start": 506,
                  "end": 514
                },
                "start": 504,
                "end": 514
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 517,
                  "end": 519
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
                        "start": 520,
                        "end": 521
                      },
                      "typeArguments": null,
                      "start": 520,
                      "end": 521
                    }
                  ],
                  "start": 519,
                  "end": 522
                },
                "start": 517,
                "end": 522
              },
              "start": 515,
              "end": 522
            },
            "start": 493,
            "end": 523
          },
          {
            "type": "TSConstructSignatureDeclaration",
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
                      "start": 536,
                      "end": 537
                    },
                    "typeArguments": null,
                    "start": 536,
                    "end": 537
                  },
                  "start": 534,
                  "end": 537
                },
                "start": 533,
                "end": 537
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
                    "start": 542,
                    "end": 548
                  },
                  "start": 540,
                  "end": 548
                },
                "start": 539,
                "end": 548
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 551,
                  "end": 553
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
                        "start": 554,
                        "end": 555
                      },
                      "typeArguments": null,
                      "start": 554,
                      "end": 555
                    }
                  ],
                  "start": 553,
                  "end": 556
                },
                "start": 551,
                "end": 556
              },
              "start": 549,
              "end": 556
            },
            "start": 528,
            "end": 557
          },
          {
            "type": "TSConstructSignatureDeclaration",
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
                    "start": 567,
                    "end": 568
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 567,
                  "end": 568
                }
              ],
              "start": 566,
              "end": 569
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
                      "start": 573,
                      "end": 574
                    },
                    "typeArguments": null,
                    "start": 573,
                    "end": 574
                  },
                  "start": 571,
                  "end": 574
                },
                "start": 570,
                "end": 574
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
                    "start": 580,
                    "end": 586
                  },
                  "start": 578,
                  "end": 586
                },
                "start": 576,
                "end": 586
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 589,
                  "end": 591
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
                        "start": 592,
                        "end": 593
                      },
                      "typeArguments": null,
                      "start": 592,
                      "end": 593
                    }
                  ],
                  "start": 591,
                  "end": 594
                },
                "start": 589,
                "end": 594
              },
              "start": 587,
              "end": 594
            },
            "start": 562,
            "end": 595
          },
          {
            "type": "TSConstructSignatureDeclaration",
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
                    "start": 605,
                    "end": 606
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 605,
                  "end": 606
                }
              ],
              "start": 604,
              "end": 607
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
                      "start": 611,
                      "end": 612
                    },
                    "typeArguments": null,
                    "start": 611,
                    "end": 612
                  },
                  "start": 609,
                  "end": 612
                },
                "start": 608,
                "end": 612
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
                    "start": 617,
                    "end": 623
                  },
                  "start": 615,
                  "end": 623
                },
                "start": 614,
                "end": 623
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 626,
                  "end": 628
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
                        "start": 629,
                        "end": 630
                      },
                      "typeArguments": null,
                      "start": 629,
                      "end": 630
                    }
                  ],
                  "start": 628,
                  "end": 631
                },
                "start": 626,
                "end": 631
              },
              "start": 624,
              "end": 631
            },
            "start": 600,
            "end": 632
          }
        ],
        "start": 487,
        "end": 635
      },
      "declare": false,
      "start": 471,
      "end": 635
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
            "name": "i2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "I2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 645,
                  "end": 647
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 648,
                      "end": 654
                    }
                  ],
                  "start": 647,
                  "end": 655
                },
                "start": 645,
                "end": 655
              },
              "start": 643,
              "end": 655
            },
            "start": 641,
            "end": 655
          },
          "init": null,
          "definite": false,
          "start": 641,
          "end": 655
        }
      ],
      "declare": false,
      "start": 637,
      "end": 656
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
            "name": "r4",
            "optional": false,
            "typeAnnotation": null,
            "start": 661,
            "end": 663
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "i2",
              "optional": false,
              "typeAnnotation": null,
              "start": 670,
              "end": 672
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 673,
                "end": 674
              },
              {
                "type": "Literal",
                "value": "",
                "raw": "''",
                "start": 676,
                "end": 678
              }
            ],
            "start": 666,
            "end": 679
          },
          "definite": false,
          "start": 661,
          "end": 679
        }
      ],
      "declare": false,
      "start": 657,
      "end": 680
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
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSConstructSignatureDeclaration",
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
                            "start": 702,
                            "end": 708
                          },
                          "start": 700,
                          "end": 708
                        },
                        "start": 699,
                        "end": 708
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
                            "start": 714,
                            "end": 720
                          },
                          "start": 712,
                          "end": 720
                        },
                        "start": 710,
                        "end": 720
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "C",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 723,
                          "end": 724
                        },
                        "typeArguments": null,
                        "start": 723,
                        "end": 724
                      },
                      "start": 721,
                      "end": 724
                    },
                    "start": 695,
                    "end": 725
                  },
                  {
                    "type": "TSConstructSignatureDeclaration",
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
                            "start": 737,
                            "end": 743
                          },
                          "start": 735,
                          "end": 743
                        },
                        "start": 734,
                        "end": 743
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
                            "start": 748,
                            "end": 754
                          },
                          "start": 746,
                          "end": 754
                        },
                        "start": 745,
                        "end": 754
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "C",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 757,
                          "end": 758
                        },
                        "typeArguments": null,
                        "start": 757,
                        "end": 758
                      },
                      "start": 755,
                      "end": 758
                    },
                    "start": 730,
                    "end": 759
                  }
                ],
                "start": 689,
                "end": 761
              },
              "start": 687,
              "end": 761
            },
            "start": 686,
            "end": 761
          },
          "init": null,
          "definite": false,
          "start": 686,
          "end": 761
        }
      ],
      "declare": false,
      "start": 682,
      "end": 761
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
            "name": "r5",
            "optional": false,
            "typeAnnotation": null,
            "start": 767,
            "end": 769
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 776,
              "end": 777
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 778,
                "end": 779
              },
              {
                "type": "Literal",
                "value": "",
                "raw": "''",
                "start": 781,
                "end": 783
              }
            ],
            "start": 772,
            "end": 784
          },
          "definite": false,
          "start": 767,
          "end": 784
        }
      ],
      "declare": false,
      "start": 763,
      "end": 785
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
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSConstructSignatureDeclaration",
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
                            "start": 804,
                            "end": 805
                          },
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 804,
                          "end": 805
                        }
                      ],
                      "start": 803,
                      "end": 806
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
                              "start": 810,
                              "end": 811
                            },
                            "typeArguments": null,
                            "start": 810,
                            "end": 811
                          },
                          "start": 808,
                          "end": 811
                        },
                        "start": 807,
                        "end": 811
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
                            "start": 817,
                            "end": 823
                          },
                          "start": 815,
                          "end": 823
                        },
                        "start": 813,
                        "end": 823
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "C2",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 826,
                          "end": 828
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
                                "start": 829,
                                "end": 830
                              },
                              "typeArguments": null,
                              "start": 829,
                              "end": 830
                            }
                          ],
                          "start": 828,
                          "end": 831
                        },
                        "start": 826,
                        "end": 831
                      },
                      "start": 824,
                      "end": 831
                    },
                    "start": 800,
                    "end": 832
                  },
                  {
                    "type": "TSConstructSignatureDeclaration",
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
                            "start": 841,
                            "end": 842
                          },
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 841,
                          "end": 842
                        }
                      ],
                      "start": 840,
                      "end": 843
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
                              "start": 847,
                              "end": 848
                            },
                            "typeArguments": null,
                            "start": 847,
                            "end": 848
                          },
                          "start": 845,
                          "end": 848
                        },
                        "start": 844,
                        "end": 848
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
                            "start": 853,
                            "end": 859
                          },
                          "start": 851,
                          "end": 859
                        },
                        "start": 850,
                        "end": 859
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "C2",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 862,
                          "end": 864
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
                                "start": 865,
                                "end": 866
                              },
                              "typeArguments": null,
                              "start": 865,
                              "end": 866
                            }
                          ],
                          "start": 864,
                          "end": 867
                        },
                        "start": 862,
                        "end": 867
                      },
                      "start": 860,
                      "end": 867
                    },
                    "start": 837,
                    "end": 868
                  }
                ],
                "start": 794,
                "end": 870
              },
              "start": 792,
              "end": 870
            },
            "start": 791,
            "end": 870
          },
          "init": null,
          "definite": false,
          "start": 791,
          "end": 870
        }
      ],
      "declare": false,
      "start": 787,
      "end": 870
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
            "name": "r6",
            "optional": false,
            "typeAnnotation": null,
            "start": 876,
            "end": 878
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 885,
              "end": 886
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 887,
                "end": 888
              },
              {
                "type": "Literal",
                "value": "",
                "raw": "''",
                "start": 890,
                "end": 892
              }
            ],
            "start": 881,
            "end": 893
          },
          "definite": false,
          "start": 876,
          "end": 893
        }
      ],
      "declare": false,
      "start": 872,
      "end": 894
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 67,
  "end": 894
}
```
