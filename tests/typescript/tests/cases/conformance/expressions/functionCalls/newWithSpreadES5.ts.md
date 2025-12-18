__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 10
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
              "type": "TSNumberKeyword",
              "start": 14,
              "end": 20
            },
            "start": 12,
            "end": 20
          },
          "start": 11,
          "end": 20
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 25,
              "end": 31
            },
            "start": 23,
            "end": 31
          },
          "start": 22,
          "end": 31
        },
        {
          "type": "RestElement",
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": null,
            "start": 36,
            "end": 37
          },
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSStringKeyword",
                "start": 39,
                "end": 45
              },
              "start": 39,
              "end": 47
            },
            "start": 37,
            "end": 47
          },
          "value": null,
          "start": 33,
          "end": 47
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 49,
        "end": 52
      },
      "expression": false,
      "start": 0,
      "end": 52
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null,
        "start": 63,
        "end": 65
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "RestElement",
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 69,
            "end": 70
          },
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSStringKeyword",
                "start": 72,
                "end": 78
              },
              "start": 72,
              "end": 80
            },
            "start": 70,
            "end": 80
          },
          "value": null,
          "start": 66,
          "end": 80
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 82,
        "end": 84
      },
      "expression": false,
      "start": 54,
      "end": 84
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 96,
        "end": 97
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
              "name": "f",
              "optional": false,
              "typeAnnotation": null,
              "start": 104,
              "end": 105
            },
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
                            "start": 125,
                            "end": 131
                          },
                          "start": 123,
                          "end": 131
                        },
                        "start": 122,
                        "end": 131
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
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
                        "type": "RestElement",
                        "decorators": [],
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "z",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 147,
                          "end": 148
                        },
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSArrayType",
                            "elementType": {
                              "type": "TSStringKeyword",
                              "start": 150,
                              "end": 156
                            },
                            "start": 150,
                            "end": 158
                          },
                          "start": 148,
                          "end": 158
                        },
                        "value": null,
                        "start": 144,
                        "end": 158
                      }
                    ],
                    "returnType": null,
                    "start": 117,
                    "end": 160
                  }
                ],
                "start": 107,
                "end": 166
              },
              "start": 105,
              "end": 166
            },
            "accessibility": null,
            "static": false,
            "start": 104,
            "end": 166
          }
        ],
        "start": 98,
        "end": 168
      },
      "declare": false,
      "start": 86,
      "end": 168
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 176,
        "end": 177
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
              "start": 184,
              "end": 195
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
                      "start": 199,
                      "end": 205
                    },
                    "start": 197,
                    "end": 205
                  },
                  "start": 196,
                  "end": 205
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 210,
                      "end": 216
                    },
                    "start": 208,
                    "end": 216
                  },
                  "start": 207,
                  "end": 216
                },
                {
                  "type": "RestElement",
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "z",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 221,
                    "end": 222
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSStringKeyword",
                        "start": 224,
                        "end": 230
                      },
                      "start": 224,
                      "end": 232
                    },
                    "start": 222,
                    "end": 232
                  },
                  "value": null,
                  "start": 218,
                  "end": 232
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 234,
                "end": 236
              },
              "expression": false,
              "start": 195,
              "end": 236
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 184,
            "end": 236
          }
        ],
        "start": 178,
        "end": 238
      },
      "abstract": false,
      "declare": false,
      "start": 170,
      "end": 238
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 250,
        "end": 251
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
              "type": "Literal",
              "value": "a-b",
              "raw": "\"a-b\"",
              "start": 258,
              "end": 263
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "exprName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 272,
                  "end": 273
                },
                "typeArguments": null,
                "start": 265,
                "end": 273
              },
              "start": 263,
              "end": 273
            },
            "accessibility": null,
            "static": false,
            "start": 258,
            "end": 274
          }
        ],
        "start": 252,
        "end": 276
      },
      "declare": false,
      "start": 240,
      "end": 276
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null,
        "start": 288,
        "end": 289
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
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 296,
              "end": 297
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "exprName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 306,
                  "end": 307
                },
                "typeArguments": null,
                "start": 299,
                "end": 307
              },
              "start": 297,
              "end": 307
            },
            "accessibility": null,
            "static": false,
            "start": 296,
            "end": 308
          }
        ],
        "start": 290,
        "end": 310
      },
      "declare": false,
      "start": 278,
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
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSStringKeyword",
                  "start": 319,
                  "end": 325
                },
                "start": 319,
                "end": 327
              },
              "start": 317,
              "end": 327
            },
            "start": 316,
            "end": 327
          },
          "init": null,
          "definite": false,
          "start": 316,
          "end": 327
        }
      ],
      "declare": false,
      "start": 312,
      "end": 328
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
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 336,
                  "end": 337
                },
                "typeArguments": null,
                "start": 336,
                "end": 337
              },
              "start": 334,
              "end": 337
            },
            "start": 333,
            "end": 337
          },
          "init": null,
          "definite": false,
          "start": 333,
          "end": 337
        }
      ],
      "declare": false,
      "start": 329,
      "end": 338
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
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 346,
                  "end": 347
                },
                "typeArguments": null,
                "start": 346,
                "end": 347
              },
              "start": 344,
              "end": 347
            },
            "start": 343,
            "end": 347
          },
          "init": null,
          "definite": false,
          "start": 343,
          "end": 347
        }
      ],
      "declare": false,
      "start": 339,
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
            "name": "d",
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
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 356,
                    "end": 357
                  },
                  "typeArguments": null,
                  "start": 356,
                  "end": 357
                },
                "start": 356,
                "end": 359
              },
              "start": 354,
              "end": 359
            },
            "start": 353,
            "end": 359
          },
          "init": null,
          "definite": false,
          "start": 353,
          "end": 359
        }
      ],
      "declare": false,
      "start": 349,
      "end": 360
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
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "parameters": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "key",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 376,
                            "end": 382
                          },
                          "start": 374,
                          "end": 382
                        },
                        "start": 371,
                        "end": 382
                      }
                    ],
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
                          "start": 385,
                          "end": 386
                        },
                        "typeArguments": null,
                        "start": 385,
                        "end": 386
                      },
                      "start": 383,
                      "end": 386
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null,
                    "start": 370,
                    "end": 386
                  }
                ],
                "start": 368,
                "end": 388
              },
              "start": 366,
              "end": 388
            },
            "start": 365,
            "end": 388
          },
          "init": null,
          "definite": false,
          "start": 365,
          "end": 388
        }
      ],
      "declare": false,
      "start": 361,
      "end": 389
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
            "name": "g",
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
                "start": 397,
                "end": 400
              },
              "start": 395,
              "end": 400
            },
            "start": 394,
            "end": 400
          },
          "init": null,
          "definite": false,
          "start": 394,
          "end": 400
        }
      ],
      "declare": false,
      "start": 390,
      "end": 401
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
            "name": "h",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "parameters": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "key",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 417,
                            "end": 423
                          },
                          "start": 415,
                          "end": 423
                        },
                        "start": 412,
                        "end": 423
                      }
                    ],
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
                          "start": 426,
                          "end": 427
                        },
                        "typeArguments": null,
                        "start": 426,
                        "end": 427
                      },
                      "start": 424,
                      "end": 427
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null,
                    "start": 411,
                    "end": 427
                  }
                ],
                "start": 409,
                "end": 429
              },
              "start": 407,
              "end": 429
            },
            "start": 406,
            "end": 429
          },
          "init": null,
          "definite": false,
          "start": 406,
          "end": 429
        }
      ],
      "declare": false,
      "start": 402,
      "end": 430
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
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 438,
                      "end": 439
                    },
                    "typeArguments": null,
                    "start": 438,
                    "end": 439
                  },
                  "start": 438,
                  "end": 441
                },
                "start": 438,
                "end": 443
              },
              "start": 436,
              "end": 443
            },
            "start": 435,
            "end": 443
          },
          "init": null,
          "definite": false,
          "start": 435,
          "end": 443
        }
      ],
      "declare": false,
      "start": 431,
      "end": 444
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": null,
          "start": 470,
          "end": 471
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 472,
            "end": 473
          },
          {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 475,
            "end": 476
          },
          {
            "type": "Literal",
            "value": "string",
            "raw": "\"string\"",
            "start": 478,
            "end": 486
          }
        ],
        "start": 466,
        "end": 487
      },
      "directive": null,
      "start": 466,
      "end": 488
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": null,
          "start": 493,
          "end": 494
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 495,
            "end": 496
          },
          {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 498,
            "end": 499
          },
          {
            "type": "SpreadElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 504,
              "end": 505
            },
            "start": 501,
            "end": 505
          }
        ],
        "start": 489,
        "end": 506
      },
      "directive": null,
      "start": 489,
      "end": 507
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": null,
          "start": 512,
          "end": 513
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 514,
            "end": 515
          },
          {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 517,
            "end": 518
          },
          {
            "type": "SpreadElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 523,
              "end": 524
            },
            "start": 520,
            "end": 524
          },
          {
            "type": "Literal",
            "value": "string",
            "raw": "\"string\"",
            "start": 526,
            "end": 534
          }
        ],
        "start": 508,
        "end": 535
      },
      "directive": null,
      "start": 508,
      "end": 536
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f2",
          "optional": false,
          "typeAnnotation": null,
          "start": 572,
          "end": 574
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "SpreadElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 578,
              "end": 579
            },
            "start": 575,
            "end": 579
          },
          {
            "type": "SpreadElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 584,
              "end": 585
            },
            "start": 581,
            "end": 585
          }
        ],
        "start": 568,
        "end": 586
      },
      "directive": null,
      "start": 568,
      "end": 587
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": null,
          "start": 592,
          "end": 593
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 594,
            "end": 595
          },
          {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 597,
            "end": 598
          },
          {
            "type": "SpreadElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 603,
              "end": 604
            },
            "start": 600,
            "end": 604
          },
          {
            "type": "SpreadElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 609,
              "end": 610
            },
            "start": 606,
            "end": 610
          }
        ],
        "start": 588,
        "end": 611
      },
      "directive": null,
      "start": 588,
      "end": 612
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "NewExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null,
            "start": 637,
            "end": 638
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 639,
              "end": 640
            },
            {
              "type": "Literal",
              "value": 2,
              "raw": "2",
              "start": 642,
              "end": 643
            },
            {
              "type": "Literal",
              "value": "string",
              "raw": "\"string\"",
              "start": 645,
              "end": 653
            }
          ],
          "start": 633,
          "end": 654
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 633,
        "end": 656
      },
      "directive": null,
      "start": 633,
      "end": 657
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "NewExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null,
            "start": 662,
            "end": 663
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 664,
              "end": 665
            },
            {
              "type": "Literal",
              "value": 2,
              "raw": "2",
              "start": 667,
              "end": 668
            },
            {
              "type": "SpreadElement",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 673,
                "end": 674
              },
              "start": 670,
              "end": 674
            }
          ],
          "start": 658,
          "end": 675
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 658,
        "end": 677
      },
      "directive": null,
      "start": 658,
      "end": 678
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "NewExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null,
            "start": 683,
            "end": 684
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 685,
              "end": 686
            },
            {
              "type": "Literal",
              "value": 2,
              "raw": "2",
              "start": 688,
              "end": 689
            },
            {
              "type": "SpreadElement",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 694,
                "end": 695
              },
              "start": 691,
              "end": 695
            },
            {
              "type": "Literal",
              "value": "string",
              "raw": "\"string\"",
              "start": 697,
              "end": 705
            }
          ],
          "start": 679,
          "end": 706
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 679,
        "end": 708
      },
      "directive": null,
      "start": 679,
      "end": 709
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 745,
            "end": 746
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null,
            "start": 747,
            "end": 748
          },
          "optional": false,
          "computed": false,
          "start": 745,
          "end": 748
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 749,
            "end": 750
          },
          {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 752,
            "end": 753
          },
          {
            "type": "Literal",
            "value": "string",
            "raw": "\"string\"",
            "start": 755,
            "end": 763
          }
        ],
        "start": 741,
        "end": 764
      },
      "directive": null,
      "start": 741,
      "end": 765
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 770,
            "end": 771
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null,
            "start": 772,
            "end": 773
          },
          "optional": false,
          "computed": false,
          "start": 770,
          "end": 773
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 774,
            "end": 775
          },
          {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 777,
            "end": 778
          },
          {
            "type": "SpreadElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 783,
              "end": 784
            },
            "start": 780,
            "end": 784
          }
        ],
        "start": 766,
        "end": 785
      },
      "directive": null,
      "start": 766,
      "end": 786
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 791,
            "end": 792
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null,
            "start": 793,
            "end": 794
          },
          "optional": false,
          "computed": false,
          "start": 791,
          "end": 794
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 795,
            "end": 796
          },
          {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 798,
            "end": 799
          },
          {
            "type": "SpreadElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 804,
              "end": 805
            },
            "start": 801,
            "end": 805
          },
          {
            "type": "Literal",
            "value": "string",
            "raw": "\"string\"",
            "start": 807,
            "end": 815
          }
        ],
        "start": 787,
        "end": 816
      },
      "directive": null,
      "start": 787,
      "end": 817
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 853,
            "end": 854
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null,
            "start": 855,
            "end": 856
          },
          "optional": false,
          "computed": false,
          "start": 853,
          "end": 856
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 858,
            "end": 859
          },
          {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 861,
            "end": 862
          },
          {
            "type": "Literal",
            "value": "string",
            "raw": "\"string\"",
            "start": 864,
            "end": 872
          }
        ],
        "start": 848,
        "end": 873
      },
      "directive": null,
      "start": 848,
      "end": 874
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 880,
            "end": 881
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null,
            "start": 882,
            "end": 883
          },
          "optional": false,
          "computed": false,
          "start": 880,
          "end": 883
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 885,
            "end": 886
          },
          {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 888,
            "end": 889
          },
          {
            "type": "SpreadElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 894,
              "end": 895
            },
            "start": 891,
            "end": 895
          }
        ],
        "start": 875,
        "end": 896
      },
      "directive": null,
      "start": 875,
      "end": 897
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 903,
            "end": 904
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null,
            "start": 905,
            "end": 906
          },
          "optional": false,
          "computed": false,
          "start": 903,
          "end": 906
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 908,
            "end": 909
          },
          {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 911,
            "end": 912
          },
          {
            "type": "SpreadElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 917,
              "end": 918
            },
            "start": 914,
            "end": 918
          },
          {
            "type": "Literal",
            "value": "string",
            "raw": "\"string\"",
            "start": 920,
            "end": 928
          }
        ],
        "start": 898,
        "end": 929
      },
      "directive": null,
      "start": 898,
      "end": 930
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "d",
              "optional": false,
              "typeAnnotation": null,
              "start": 966,
              "end": 967
            },
            "property": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 968,
              "end": 969
            },
            "optional": false,
            "computed": true,
            "start": 966,
            "end": 970
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null,
            "start": 971,
            "end": 972
          },
          "optional": false,
          "computed": false,
          "start": 966,
          "end": 972
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 973,
            "end": 974
          },
          {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 976,
            "end": 977
          },
          {
            "type": "Literal",
            "value": "string",
            "raw": "\"string\"",
            "start": 979,
            "end": 987
          }
        ],
        "start": 962,
        "end": 988
      },
      "directive": null,
      "start": 962,
      "end": 989
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "d",
              "optional": false,
              "typeAnnotation": null,
              "start": 994,
              "end": 995
            },
            "property": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 996,
              "end": 997
            },
            "optional": false,
            "computed": true,
            "start": 994,
            "end": 998
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null,
            "start": 999,
            "end": 1000
          },
          "optional": false,
          "computed": false,
          "start": 994,
          "end": 1000
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 1001,
            "end": 1002
          },
          {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 1004,
            "end": 1005
          },
          {
            "type": "SpreadElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 1010,
              "end": 1011
            },
            "start": 1007,
            "end": 1011
          }
        ],
        "start": 990,
        "end": 1012
      },
      "directive": null,
      "start": 990,
      "end": 1013
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "d",
              "optional": false,
              "typeAnnotation": null,
              "start": 1018,
              "end": 1019
            },
            "property": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 1020,
              "end": 1021
            },
            "optional": false,
            "computed": true,
            "start": 1018,
            "end": 1022
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null,
            "start": 1023,
            "end": 1024
          },
          "optional": false,
          "computed": false,
          "start": 1018,
          "end": 1024
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 1025,
            "end": 1026
          },
          {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 1028,
            "end": 1029
          },
          {
            "type": "SpreadElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 1034,
              "end": 1035
            },
            "start": 1031,
            "end": 1035
          },
          {
            "type": "Literal",
            "value": "string",
            "raw": "\"string\"",
            "start": 1037,
            "end": 1045
          }
        ],
        "start": 1014,
        "end": 1046
      },
      "directive": null,
      "start": 1014,
      "end": 1047
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "e",
              "optional": false,
              "typeAnnotation": null,
              "start": 1104,
              "end": 1105
            },
            "property": {
              "type": "Literal",
              "value": "a-b",
              "raw": "\"a-b\"",
              "start": 1106,
              "end": 1111
            },
            "optional": false,
            "computed": true,
            "start": 1104,
            "end": 1112
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null,
            "start": 1113,
            "end": 1114
          },
          "optional": false,
          "computed": false,
          "start": 1104,
          "end": 1114
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 1115,
            "end": 1116
          },
          {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 1118,
            "end": 1119
          },
          {
            "type": "Literal",
            "value": "string",
            "raw": "\"string\"",
            "start": 1121,
            "end": 1129
          }
        ],
        "start": 1100,
        "end": 1130
      },
      "directive": null,
      "start": 1100,
      "end": 1131
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "e",
              "optional": false,
              "typeAnnotation": null,
              "start": 1136,
              "end": 1137
            },
            "property": {
              "type": "Literal",
              "value": "a-b",
              "raw": "\"a-b\"",
              "start": 1138,
              "end": 1143
            },
            "optional": false,
            "computed": true,
            "start": 1136,
            "end": 1144
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null,
            "start": 1145,
            "end": 1146
          },
          "optional": false,
          "computed": false,
          "start": 1136,
          "end": 1146
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 1147,
            "end": 1148
          },
          {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 1150,
            "end": 1151
          },
          {
            "type": "SpreadElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 1156,
              "end": 1157
            },
            "start": 1153,
            "end": 1157
          }
        ],
        "start": 1132,
        "end": 1158
      },
      "directive": null,
      "start": 1132,
      "end": 1159
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "e",
              "optional": false,
              "typeAnnotation": null,
              "start": 1164,
              "end": 1165
            },
            "property": {
              "type": "Literal",
              "value": "a-b",
              "raw": "\"a-b\"",
              "start": 1166,
              "end": 1171
            },
            "optional": false,
            "computed": true,
            "start": 1164,
            "end": 1172
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null,
            "start": 1173,
            "end": 1174
          },
          "optional": false,
          "computed": false,
          "start": 1164,
          "end": 1174
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 1175,
            "end": 1176
          },
          {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 1178,
            "end": 1179
          },
          {
            "type": "SpreadElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 1184,
              "end": 1185
            },
            "start": 1181,
            "end": 1185
          },
          {
            "type": "Literal",
            "value": "string",
            "raw": "\"string\"",
            "start": 1187,
            "end": 1195
          }
        ],
        "start": 1160,
        "end": 1196
      },
      "directive": null,
      "start": 1160,
      "end": 1197
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "B",
          "optional": false,
          "typeAnnotation": null,
          "start": 1223,
          "end": 1224
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 1225,
            "end": 1226
          },
          {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 1228,
            "end": 1229
          },
          {
            "type": "Literal",
            "value": "string",
            "raw": "\"string\"",
            "start": 1231,
            "end": 1239
          }
        ],
        "start": 1219,
        "end": 1240
      },
      "directive": null,
      "start": 1219,
      "end": 1241
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "B",
          "optional": false,
          "typeAnnotation": null,
          "start": 1246,
          "end": 1247
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 1248,
            "end": 1249
          },
          {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 1251,
            "end": 1252
          },
          {
            "type": "SpreadElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 1257,
              "end": 1258
            },
            "start": 1254,
            "end": 1258
          }
        ],
        "start": 1242,
        "end": 1259
      },
      "directive": null,
      "start": 1242,
      "end": 1260
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "B",
          "optional": false,
          "typeAnnotation": null,
          "start": 1265,
          "end": 1266
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 1267,
            "end": 1268
          },
          {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 1270,
            "end": 1271
          },
          {
            "type": "SpreadElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 1276,
              "end": 1277
            },
            "start": 1273,
            "end": 1277
          },
          {
            "type": "Literal",
            "value": "string",
            "raw": "\"string\"",
            "start": 1279,
            "end": 1287
          }
        ],
        "start": 1261,
        "end": 1288
      },
      "directive": null,
      "start": 1261,
      "end": 1289
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 1325,
            "end": 1326
          },
          "property": {
            "type": "Literal",
            "value": "a-b",
            "raw": "\"a-b\"",
            "start": 1327,
            "end": 1332
          },
          "optional": false,
          "computed": true,
          "start": 1325,
          "end": 1333
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 1334,
            "end": 1335
          },
          {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 1337,
            "end": 1338
          },
          {
            "type": "Literal",
            "value": "string",
            "raw": "\"string\"",
            "start": 1340,
            "end": 1348
          }
        ],
        "start": 1321,
        "end": 1349
      },
      "directive": null,
      "start": 1321,
      "end": 1350
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 1355,
            "end": 1356
          },
          "property": {
            "type": "Literal",
            "value": "a-b",
            "raw": "\"a-b\"",
            "start": 1357,
            "end": 1362
          },
          "optional": false,
          "computed": true,
          "start": 1355,
          "end": 1363
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 1364,
            "end": 1365
          },
          {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 1367,
            "end": 1368
          },
          {
            "type": "SpreadElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 1373,
              "end": 1374
            },
            "start": 1370,
            "end": 1374
          }
        ],
        "start": 1351,
        "end": 1375
      },
      "directive": null,
      "start": 1351,
      "end": 1376
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 1381,
            "end": 1382
          },
          "property": {
            "type": "Literal",
            "value": "a-b",
            "raw": "\"a-b\"",
            "start": 1383,
            "end": 1388
          },
          "optional": false,
          "computed": true,
          "start": 1381,
          "end": 1389
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 1390,
            "end": 1391
          },
          {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 1393,
            "end": 1394
          },
          {
            "type": "SpreadElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 1399,
              "end": 1400
            },
            "start": 1396,
            "end": 1400
          },
          {
            "type": "Literal",
            "value": "string",
            "raw": "\"string\"",
            "start": 1402,
            "end": 1410
          }
        ],
        "start": 1377,
        "end": 1411
      },
      "directive": null,
      "start": 1377,
      "end": 1412
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 1447,
            "end": 1448
          },
          "property": {
            "type": "Literal",
            "value": "a-b",
            "raw": "\"a-b\"",
            "start": 1449,
            "end": 1454
          },
          "optional": false,
          "computed": true,
          "start": 1447,
          "end": 1455
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 1457,
            "end": 1458
          },
          {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 1460,
            "end": 1461
          },
          {
            "type": "Literal",
            "value": "string",
            "raw": "\"string\"",
            "start": 1463,
            "end": 1471
          }
        ],
        "start": 1442,
        "end": 1472
      },
      "directive": null,
      "start": 1442,
      "end": 1473
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 1479,
            "end": 1480
          },
          "property": {
            "type": "Literal",
            "value": "a-b",
            "raw": "\"a-b\"",
            "start": 1481,
            "end": 1486
          },
          "optional": false,
          "computed": true,
          "start": 1479,
          "end": 1487
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 1489,
            "end": 1490
          },
          {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 1492,
            "end": 1493
          },
          {
            "type": "SpreadElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 1498,
              "end": 1499
            },
            "start": 1495,
            "end": 1499
          }
        ],
        "start": 1474,
        "end": 1500
      },
      "directive": null,
      "start": 1474,
      "end": 1501
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 1507,
            "end": 1508
          },
          "property": {
            "type": "Literal",
            "value": "a-b",
            "raw": "\"a-b\"",
            "start": 1509,
            "end": 1514
          },
          "optional": false,
          "computed": true,
          "start": 1507,
          "end": 1515
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 1517,
            "end": 1518
          },
          {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 1520,
            "end": 1521
          },
          {
            "type": "SpreadElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 1526,
              "end": 1527
            },
            "start": 1523,
            "end": 1527
          },
          {
            "type": "Literal",
            "value": "string",
            "raw": "\"string\"",
            "start": 1529,
            "end": 1537
          }
        ],
        "start": 1502,
        "end": 1538
      },
      "directive": null,
      "start": 1502,
      "end": 1539
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "g",
              "optional": false,
              "typeAnnotation": null,
              "start": 1574,
              "end": 1575
            },
            "property": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 1576,
              "end": 1577
            },
            "optional": false,
            "computed": true,
            "start": 1574,
            "end": 1578
          },
          "property": {
            "type": "Literal",
            "value": "a-b",
            "raw": "\"a-b\"",
            "start": 1579,
            "end": 1584
          },
          "optional": false,
          "computed": true,
          "start": 1574,
          "end": 1585
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 1586,
            "end": 1587
          },
          {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 1589,
            "end": 1590
          },
          {
            "type": "Literal",
            "value": "string",
            "raw": "\"string\"",
            "start": 1592,
            "end": 1600
          }
        ],
        "start": 1570,
        "end": 1601
      },
      "directive": null,
      "start": 1570,
      "end": 1602
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "g",
              "optional": false,
              "typeAnnotation": null,
              "start": 1607,
              "end": 1608
            },
            "property": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 1609,
              "end": 1610
            },
            "optional": false,
            "computed": true,
            "start": 1607,
            "end": 1611
          },
          "property": {
            "type": "Literal",
            "value": "a-b",
            "raw": "\"a-b\"",
            "start": 1612,
            "end": 1617
          },
          "optional": false,
          "computed": true,
          "start": 1607,
          "end": 1618
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 1619,
            "end": 1620
          },
          {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 1622,
            "end": 1623
          },
          {
            "type": "SpreadElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 1628,
              "end": 1629
            },
            "start": 1625,
            "end": 1629
          }
        ],
        "start": 1603,
        "end": 1630
      },
      "directive": null,
      "start": 1603,
      "end": 1631
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "g",
              "optional": false,
              "typeAnnotation": null,
              "start": 1636,
              "end": 1637
            },
            "property": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 1638,
              "end": 1639
            },
            "optional": false,
            "computed": true,
            "start": 1636,
            "end": 1640
          },
          "property": {
            "type": "Literal",
            "value": "a-b",
            "raw": "\"a-b\"",
            "start": 1641,
            "end": 1646
          },
          "optional": false,
          "computed": true,
          "start": 1636,
          "end": 1647
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 1648,
            "end": 1649
          },
          {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 1651,
            "end": 1652
          },
          {
            "type": "SpreadElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 1657,
              "end": 1658
            },
            "start": 1654,
            "end": 1658
          },
          {
            "type": "Literal",
            "value": "string",
            "raw": "\"string\"",
            "start": 1660,
            "end": 1668
          }
        ],
        "start": 1632,
        "end": 1669
      },
      "directive": null,
      "start": 1632,
      "end": 1670
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "h",
              "optional": false,
              "typeAnnotation": null,
              "start": 1727,
              "end": 1728
            },
            "property": {
              "type": "Literal",
              "value": "a-b",
              "raw": "\"a-b\"",
              "start": 1729,
              "end": 1734
            },
            "optional": false,
            "computed": true,
            "start": 1727,
            "end": 1735
          },
          "property": {
            "type": "Literal",
            "value": "a-b",
            "raw": "\"a-b\"",
            "start": 1736,
            "end": 1741
          },
          "optional": false,
          "computed": true,
          "start": 1727,
          "end": 1742
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 1743,
            "end": 1744
          },
          {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 1746,
            "end": 1747
          },
          {
            "type": "Literal",
            "value": "string",
            "raw": "\"string\"",
            "start": 1749,
            "end": 1757
          }
        ],
        "start": 1723,
        "end": 1758
      },
      "directive": null,
      "start": 1723,
      "end": 1759
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "h",
              "optional": false,
              "typeAnnotation": null,
              "start": 1764,
              "end": 1765
            },
            "property": {
              "type": "Literal",
              "value": "a-b",
              "raw": "\"a-b\"",
              "start": 1766,
              "end": 1771
            },
            "optional": false,
            "computed": true,
            "start": 1764,
            "end": 1772
          },
          "property": {
            "type": "Literal",
            "value": "a-b",
            "raw": "\"a-b\"",
            "start": 1773,
            "end": 1778
          },
          "optional": false,
          "computed": true,
          "start": 1764,
          "end": 1779
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 1780,
            "end": 1781
          },
          {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 1783,
            "end": 1784
          },
          {
            "type": "SpreadElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 1789,
              "end": 1790
            },
            "start": 1786,
            "end": 1790
          }
        ],
        "start": 1760,
        "end": 1791
      },
      "directive": null,
      "start": 1760,
      "end": 1792
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "h",
              "optional": false,
              "typeAnnotation": null,
              "start": 1797,
              "end": 1798
            },
            "property": {
              "type": "Literal",
              "value": "a-b",
              "raw": "\"a-b\"",
              "start": 1799,
              "end": 1804
            },
            "optional": false,
            "computed": true,
            "start": 1797,
            "end": 1805
          },
          "property": {
            "type": "Literal",
            "value": "a-b",
            "raw": "\"a-b\"",
            "start": 1806,
            "end": 1811
          },
          "optional": false,
          "computed": true,
          "start": 1797,
          "end": 1812
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 1813,
            "end": 1814
          },
          {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 1816,
            "end": 1817
          },
          {
            "type": "SpreadElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 1822,
              "end": 1823
            },
            "start": 1819,
            "end": 1823
          },
          {
            "type": "Literal",
            "value": "string",
            "raw": "\"string\"",
            "start": 1825,
            "end": 1833
          }
        ],
        "start": 1793,
        "end": 1834
      },
      "directive": null,
      "start": 1793,
      "end": 1835
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 1884,
              "end": 1885
            },
            "property": {
              "type": "Literal",
              "value": "a-b",
              "raw": "\"a-b\"",
              "start": 1886,
              "end": 1891
            },
            "optional": false,
            "computed": true,
            "start": 1884,
            "end": 1892
          },
          "property": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 1893,
            "end": 1894
          },
          "optional": false,
          "computed": true,
          "start": 1884,
          "end": 1895
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 1896,
            "end": 1897
          },
          {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 1899,
            "end": 1900
          },
          {
            "type": "Literal",
            "value": "string",
            "raw": "\"string\"",
            "start": 1902,
            "end": 1910
          }
        ],
        "start": 1880,
        "end": 1911
      },
      "directive": null,
      "start": 1880,
      "end": 1912
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 1917,
              "end": 1918
            },
            "property": {
              "type": "Literal",
              "value": "a-b",
              "raw": "\"a-b\"",
              "start": 1919,
              "end": 1924
            },
            "optional": false,
            "computed": true,
            "start": 1917,
            "end": 1925
          },
          "property": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 1926,
            "end": 1927
          },
          "optional": false,
          "computed": true,
          "start": 1917,
          "end": 1928
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 1929,
            "end": 1930
          },
          {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 1932,
            "end": 1933
          },
          {
            "type": "SpreadElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 1938,
              "end": 1939
            },
            "start": 1935,
            "end": 1939
          }
        ],
        "start": 1913,
        "end": 1940
      },
      "directive": null,
      "start": 1913,
      "end": 1941
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 1946,
              "end": 1947
            },
            "property": {
              "type": "Literal",
              "value": "a-b",
              "raw": "\"a-b\"",
              "start": 1948,
              "end": 1953
            },
            "optional": false,
            "computed": true,
            "start": 1946,
            "end": 1954
          },
          "property": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 1955,
            "end": 1956
          },
          "optional": false,
          "computed": true,
          "start": 1946,
          "end": 1957
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 1958,
            "end": 1959
          },
          {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 1961,
            "end": 1962
          },
          {
            "type": "SpreadElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 1967,
              "end": 1968
            },
            "start": 1964,
            "end": 1968
          },
          {
            "type": "Literal",
            "value": "string",
            "raw": "\"string\"",
            "start": 1970,
            "end": 1978
          }
        ],
        "start": 1942,
        "end": 1979
      },
      "directive": null,
      "start": 1942,
      "end": 1980
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1980
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "function",
    "start": 0,
    "end": 8,
    "range": [
      0,
      8
    ]
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 9,
    "end": 10,
    "range": [
      9,
      10
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 10,
    "end": 11,
    "range": [
      10,
      11
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 11,
    "end": 12,
    "range": [
      11,
      12
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 12,
    "end": 13,
    "range": [
      12,
      13
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 14,
    "end": 20,
    "range": [
      14,
      20
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 20,
    "end": 21,
    "range": [
      20,
      21
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 22,
    "end": 23,
    "range": [
      22,
      23
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 23,
    "end": 24,
    "range": [
      23,
      24
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 25,
    "end": 31,
    "range": [
      25,
      31
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 31,
    "end": 32,
    "range": [
      31,
      32
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 33,
    "end": 36,
    "range": [
      33,
      36
    ]
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 36,
    "end": 37,
    "range": [
      36,
      37
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 37,
    "end": 38,
    "range": [
      37,
      38
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 39,
    "end": 45,
    "range": [
      39,
      45
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 45,
    "end": 46,
    "range": [
      45,
      46
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 46,
    "end": 47,
    "range": [
      46,
      47
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 47,
    "end": 48,
    "range": [
      47,
      48
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 49,
    "end": 50,
    "range": [
      49,
      50
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 51,
    "end": 52,
    "range": [
      51,
      52
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 54,
    "end": 62,
    "range": [
      54,
      62
    ]
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 63,
    "end": 65,
    "range": [
      63,
      65
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 65,
    "end": 66,
    "range": [
      65,
      66
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 66,
    "end": 69,
    "range": [
      66,
      69
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 69,
    "end": 70,
    "range": [
      69,
      70
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 70,
    "end": 71,
    "range": [
      70,
      71
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 72,
    "end": 78,
    "range": [
      72,
      78
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 78,
    "end": 79,
    "range": [
      78,
      79
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 79,
    "end": 80,
    "range": [
      79,
      80
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 80,
    "end": 81,
    "range": [
      80,
      81
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 82,
    "end": 83,
    "range": [
      82,
      83
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 83,
    "end": 84,
    "range": [
      83,
      84
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 86,
    "end": 95,
    "range": [
      86,
      95
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 96,
    "end": 97,
    "range": [
      96,
      97
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 98,
    "end": 99,
    "range": [
      98,
      99
    ]
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 104,
    "end": 105,
    "range": [
      104,
      105
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 105,
    "end": 106,
    "range": [
      105,
      106
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 107,
    "end": 108,
    "range": [
      107,
      108
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 117,
    "end": 120,
    "range": [
      117,
      120
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 121,
    "end": 122,
    "range": [
      121,
      122
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 122,
    "end": 123,
    "range": [
      122,
      123
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 123,
    "end": 124,
    "range": [
      123,
      124
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 125,
    "end": 131,
    "range": [
      125,
      131
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 131,
    "end": 132,
    "range": [
      131,
      132
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 133,
    "end": 134,
    "range": [
      133,
      134
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 134,
    "end": 135,
    "range": [
      134,
      135
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 136,
    "end": 142,
    "range": [
      136,
      142
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 142,
    "end": 143,
    "range": [
      142,
      143
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 144,
    "end": 147,
    "range": [
      144,
      147
    ]
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 147,
    "end": 148,
    "range": [
      147,
      148
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 148,
    "end": 149,
    "range": [
      148,
      149
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 150,
    "end": 156,
    "range": [
      150,
      156
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 156,
    "end": 157,
    "range": [
      156,
      157
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 157,
    "end": 158,
    "range": [
      157,
      158
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 158,
    "end": 159,
    "range": [
      158,
      159
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 159,
    "end": 160,
    "range": [
      159,
      160
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 165,
    "end": 166,
    "range": [
      165,
      166
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 167,
    "end": 168,
    "range": [
      167,
      168
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 170,
    "end": 175,
    "range": [
      170,
      175
    ]
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 176,
    "end": 177,
    "range": [
      176,
      177
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 178,
    "end": 179,
    "range": [
      178,
      179
    ]
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 184,
    "end": 195,
    "range": [
      184,
      195
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 195,
    "end": 196,
    "range": [
      195,
      196
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 196,
    "end": 197,
    "range": [
      196,
      197
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 197,
    "end": 198,
    "range": [
      197,
      198
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 199,
    "end": 205,
    "range": [
      199,
      205
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 205,
    "end": 206,
    "range": [
      205,
      206
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 207,
    "end": 208,
    "range": [
      207,
      208
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 208,
    "end": 209,
    "range": [
      208,
      209
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 210,
    "end": 216,
    "range": [
      210,
      216
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 216,
    "end": 217,
    "range": [
      216,
      217
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 218,
    "end": 221,
    "range": [
      218,
      221
    ]
  },
  {
    "type": "Identifier",
    "value": "z",
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
    "value": "string",
    "start": 224,
    "end": 230,
    "range": [
      224,
      230
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 230,
    "end": 231,
    "range": [
      230,
      231
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 231,
    "end": 232,
    "range": [
      231,
      232
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 232,
    "end": 233,
    "range": [
      232,
      233
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 234,
    "end": 235,
    "range": [
      234,
      235
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 235,
    "end": 236,
    "range": [
      235,
      236
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 237,
    "end": 238,
    "range": [
      237,
      238
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 240,
    "end": 249,
    "range": [
      240,
      249
    ]
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 250,
    "end": 251,
    "range": [
      250,
      251
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 252,
    "end": 253,
    "range": [
      252,
      253
    ]
  },
  {
    "type": "String",
    "value": "\"a-b\"",
    "start": 258,
    "end": 263,
    "range": [
      258,
      263
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 263,
    "end": 264,
    "range": [
      263,
      264
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 265,
    "end": 271,
    "range": [
      265,
      271
    ]
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 272,
    "end": 273,
    "range": [
      272,
      273
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 273,
    "end": 274,
    "range": [
      273,
      274
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 275,
    "end": 276,
    "range": [
      275,
      276
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 278,
    "end": 287,
    "range": [
      278,
      287
    ]
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 288,
    "end": 289,
    "range": [
      288,
      289
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 290,
    "end": 291,
    "range": [
      290,
      291
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 296,
    "end": 297,
    "range": [
      296,
      297
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 297,
    "end": 298,
    "range": [
      297,
      298
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 299,
    "end": 305,
    "range": [
      299,
      305
    ]
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 306,
    "end": 307,
    "range": [
      306,
      307
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 307,
    "end": 308,
    "range": [
      307,
      308
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 309,
    "end": 310,
    "range": [
      309,
      310
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 312,
    "end": 315,
    "range": [
      312,
      315
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 316,
    "end": 317,
    "range": [
      316,
      317
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 317,
    "end": 318,
    "range": [
      317,
      318
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 319,
    "end": 325,
    "range": [
      319,
      325
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 325,
    "end": 326,
    "range": [
      325,
      326
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 326,
    "end": 327,
    "range": [
      326,
      327
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 327,
    "end": 328,
    "range": [
      327,
      328
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 329,
    "end": 332,
    "range": [
      329,
      332
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 333,
    "end": 334,
    "range": [
      333,
      334
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 334,
    "end": 335,
    "range": [
      334,
      335
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 336,
    "end": 337,
    "range": [
      336,
      337
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 337,
    "end": 338,
    "range": [
      337,
      338
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 339,
    "end": 342,
    "range": [
      339,
      342
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 343,
    "end": 344,
    "range": [
      343,
      344
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 344,
    "end": 345,
    "range": [
      344,
      345
    ]
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 346,
    "end": 347,
    "range": [
      346,
      347
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 347,
    "end": 348,
    "range": [
      347,
      348
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 349,
    "end": 352,
    "range": [
      349,
      352
    ]
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 353,
    "end": 354,
    "range": [
      353,
      354
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 354,
    "end": 355,
    "range": [
      354,
      355
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 356,
    "end": 357,
    "range": [
      356,
      357
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 357,
    "end": 358,
    "range": [
      357,
      358
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 358,
    "end": 359,
    "range": [
      358,
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
    "type": "Keyword",
    "value": "var",
    "start": 361,
    "end": 364,
    "range": [
      361,
      364
    ]
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 365,
    "end": 366,
    "range": [
      365,
      366
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 366,
    "end": 367,
    "range": [
      366,
      367
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 368,
    "end": 369,
    "range": [
      368,
      369
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 370,
    "end": 371,
    "range": [
      370,
      371
    ]
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 371,
    "end": 374,
    "range": [
      371,
      374
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 374,
    "end": 375,
    "range": [
      374,
      375
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 376,
    "end": 382,
    "range": [
      376,
      382
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 382,
    "end": 383,
    "range": [
      382,
      383
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 383,
    "end": 384,
    "range": [
      383,
      384
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 385,
    "end": 386,
    "range": [
      385,
      386
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 387,
    "end": 388,
    "range": [
      387,
      388
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 388,
    "end": 389,
    "range": [
      388,
      389
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 390,
    "end": 393,
    "range": [
      390,
      393
    ]
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 394,
    "end": 395,
    "range": [
      394,
      395
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 395,
    "end": 396,
    "range": [
      395,
      396
    ]
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 397,
    "end": 398,
    "range": [
      397,
      398
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 398,
    "end": 399,
    "range": [
      398,
      399
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 399,
    "end": 400,
    "range": [
      399,
      400
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 400,
    "end": 401,
    "range": [
      400,
      401
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 402,
    "end": 405,
    "range": [
      402,
      405
    ]
  },
  {
    "type": "Identifier",
    "value": "h",
    "start": 406,
    "end": 407,
    "range": [
      406,
      407
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 407,
    "end": 408,
    "range": [
      407,
      408
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 409,
    "end": 410,
    "range": [
      409,
      410
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 411,
    "end": 412,
    "range": [
      411,
      412
    ]
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 412,
    "end": 415,
    "range": [
      412,
      415
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 415,
    "end": 416,
    "range": [
      415,
      416
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 417,
    "end": 423,
    "range": [
      417,
      423
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 423,
    "end": 424,
    "range": [
      423,
      424
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 424,
    "end": 425,
    "range": [
      424,
      425
    ]
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 426,
    "end": 427,
    "range": [
      426,
      427
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 428,
    "end": 429,
    "range": [
      428,
      429
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 429,
    "end": 430,
    "range": [
      429,
      430
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 431,
    "end": 434,
    "range": [
      431,
      434
    ]
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 435,
    "end": 436,
    "range": [
      435,
      436
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 436,
    "end": 437,
    "range": [
      436,
      437
    ]
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 438,
    "end": 439,
    "range": [
      438,
      439
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 439,
    "end": 440,
    "range": [
      439,
      440
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 440,
    "end": 441,
    "range": [
      440,
      441
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 441,
    "end": 442,
    "range": [
      441,
      442
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 442,
    "end": 443,
    "range": [
      442,
      443
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 443,
    "end": 444,
    "range": [
      443,
      444
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 466,
    "end": 469,
    "range": [
      466,
      469
    ]
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 470,
    "end": 471,
    "range": [
      470,
      471
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 471,
    "end": 472,
    "range": [
      471,
      472
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 472,
    "end": 473,
    "range": [
      472,
      473
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 473,
    "end": 474,
    "range": [
      473,
      474
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 475,
    "end": 476,
    "range": [
      475,
      476
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 476,
    "end": 477,
    "range": [
      476,
      477
    ]
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 478,
    "end": 486,
    "range": [
      478,
      486
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 486,
    "end": 487,
    "range": [
      486,
      487
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 487,
    "end": 488,
    "range": [
      487,
      488
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 489,
    "end": 492,
    "range": [
      489,
      492
    ]
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 493,
    "end": 494,
    "range": [
      493,
      494
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 494,
    "end": 495,
    "range": [
      494,
      495
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 495,
    "end": 496,
    "range": [
      495,
      496
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 496,
    "end": 497,
    "range": [
      496,
      497
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 498,
    "end": 499,
    "range": [
      498,
      499
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 499,
    "end": 500,
    "range": [
      499,
      500
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 501,
    "end": 504,
    "range": [
      501,
      504
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 504,
    "end": 505,
    "range": [
      504,
      505
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 505,
    "end": 506,
    "range": [
      505,
      506
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 506,
    "end": 507,
    "range": [
      506,
      507
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 508,
    "end": 511,
    "range": [
      508,
      511
    ]
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 512,
    "end": 513,
    "range": [
      512,
      513
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 513,
    "end": 514,
    "range": [
      513,
      514
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 514,
    "end": 515,
    "range": [
      514,
      515
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 515,
    "end": 516,
    "range": [
      515,
      516
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 517,
    "end": 518,
    "range": [
      517,
      518
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 518,
    "end": 519,
    "range": [
      518,
      519
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 520,
    "end": 523,
    "range": [
      520,
      523
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
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
    "type": "String",
    "value": "\"string\"",
    "start": 526,
    "end": 534,
    "range": [
      526,
      534
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 534,
    "end": 535,
    "range": [
      534,
      535
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 535,
    "end": 536,
    "range": [
      535,
      536
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 568,
    "end": 571,
    "range": [
      568,
      571
    ]
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 572,
    "end": 574,
    "range": [
      572,
      574
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 574,
    "end": 575,
    "range": [
      574,
      575
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 575,
    "end": 578,
    "range": [
      575,
      578
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 578,
    "end": 579,
    "range": [
      578,
      579
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 579,
    "end": 580,
    "range": [
      579,
      580
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 581,
    "end": 584,
    "range": [
      581,
      584
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 584,
    "end": 585,
    "range": [
      584,
      585
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 585,
    "end": 586,
    "range": [
      585,
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
    "value": "new",
    "start": 588,
    "end": 591,
    "range": [
      588,
      591
    ]
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 592,
    "end": 593,
    "range": [
      592,
      593
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 593,
    "end": 594,
    "range": [
      593,
      594
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 594,
    "end": 595,
    "range": [
      594,
      595
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 596,
    "end": 597,
    "range": [
      596,
      597
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 597,
    "end": 598,
    "range": [
      597,
      598
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 598,
    "end": 599,
    "range": [
      598,
      599
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 600,
    "end": 603,
    "range": [
      600,
      603
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 603,
    "end": 604,
    "range": [
      603,
      604
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 604,
    "end": 605,
    "range": [
      604,
      605
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 606,
    "end": 609,
    "range": [
      606,
      609
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 609,
    "end": 610,
    "range": [
      609,
      610
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 610,
    "end": 611,
    "range": [
      610,
      611
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 611,
    "end": 612,
    "range": [
      611,
      612
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 633,
    "end": 636,
    "range": [
      633,
      636
    ]
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 637,
    "end": 638,
    "range": [
      637,
      638
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 638,
    "end": 639,
    "range": [
      638,
      639
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 639,
    "end": 640,
    "range": [
      639,
      640
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 640,
    "end": 641,
    "range": [
      640,
      641
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 642,
    "end": 643,
    "range": [
      642,
      643
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 643,
    "end": 644,
    "range": [
      643,
      644
    ]
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 645,
    "end": 653,
    "range": [
      645,
      653
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 653,
    "end": 654,
    "range": [
      653,
      654
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 654,
    "end": 655,
    "range": [
      654,
      655
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 655,
    "end": 656,
    "range": [
      655,
      656
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 656,
    "end": 657,
    "range": [
      656,
      657
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 658,
    "end": 661,
    "range": [
      658,
      661
    ]
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 662,
    "end": 663,
    "range": [
      662,
      663
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 663,
    "end": 664,
    "range": [
      663,
      664
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 664,
    "end": 665,
    "range": [
      664,
      665
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 665,
    "end": 666,
    "range": [
      665,
      666
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 667,
    "end": 668,
    "range": [
      667,
      668
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 668,
    "end": 669,
    "range": [
      668,
      669
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 670,
    "end": 673,
    "range": [
      670,
      673
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 673,
    "end": 674,
    "range": [
      673,
      674
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 674,
    "end": 675,
    "range": [
      674,
      675
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 675,
    "end": 676,
    "range": [
      675,
      676
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 676,
    "end": 677,
    "range": [
      676,
      677
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 677,
    "end": 678,
    "range": [
      677,
      678
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 679,
    "end": 682,
    "range": [
      679,
      682
    ]
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 683,
    "end": 684,
    "range": [
      683,
      684
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 684,
    "end": 685,
    "range": [
      684,
      685
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 685,
    "end": 686,
    "range": [
      685,
      686
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 686,
    "end": 687,
    "range": [
      686,
      687
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 688,
    "end": 689,
    "range": [
      688,
      689
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 689,
    "end": 690,
    "range": [
      689,
      690
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 691,
    "end": 694,
    "range": [
      691,
      694
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 694,
    "end": 695,
    "range": [
      694,
      695
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 695,
    "end": 696,
    "range": [
      695,
      696
    ]
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 697,
    "end": 705,
    "range": [
      697,
      705
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 705,
    "end": 706,
    "range": [
      705,
      706
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
    "type": "Punctuator",
    "value": ")",
    "start": 707,
    "end": 708,
    "range": [
      707,
      708
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 708,
    "end": 709,
    "range": [
      708,
      709
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 741,
    "end": 744,
    "range": [
      741,
      744
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 745,
    "end": 746,
    "range": [
      745,
      746
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 746,
    "end": 747,
    "range": [
      746,
      747
    ]
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 747,
    "end": 748,
    "range": [
      747,
      748
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 748,
    "end": 749,
    "range": [
      748,
      749
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 749,
    "end": 750,
    "range": [
      749,
      750
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 750,
    "end": 751,
    "range": [
      750,
      751
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 752,
    "end": 753,
    "range": [
      752,
      753
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 753,
    "end": 754,
    "range": [
      753,
      754
    ]
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 755,
    "end": 763,
    "range": [
      755,
      763
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 763,
    "end": 764,
    "range": [
      763,
      764
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 764,
    "end": 765,
    "range": [
      764,
      765
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 766,
    "end": 769,
    "range": [
      766,
      769
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 770,
    "end": 771,
    "range": [
      770,
      771
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 771,
    "end": 772,
    "range": [
      771,
      772
    ]
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 772,
    "end": 773,
    "range": [
      772,
      773
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 773,
    "end": 774,
    "range": [
      773,
      774
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 774,
    "end": 775,
    "range": [
      774,
      775
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 775,
    "end": 776,
    "range": [
      775,
      776
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 777,
    "end": 778,
    "range": [
      777,
      778
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 778,
    "end": 779,
    "range": [
      778,
      779
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 780,
    "end": 783,
    "range": [
      780,
      783
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
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
    "value": "new",
    "start": 787,
    "end": 790,
    "range": [
      787,
      790
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 791,
    "end": 792,
    "range": [
      791,
      792
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 792,
    "end": 793,
    "range": [
      792,
      793
    ]
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 793,
    "end": 794,
    "range": [
      793,
      794
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 794,
    "end": 795,
    "range": [
      794,
      795
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 795,
    "end": 796,
    "range": [
      795,
      796
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 796,
    "end": 797,
    "range": [
      796,
      797
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 798,
    "end": 799,
    "range": [
      798,
      799
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 799,
    "end": 800,
    "range": [
      799,
      800
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 801,
    "end": 804,
    "range": [
      801,
      804
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 804,
    "end": 805,
    "range": [
      804,
      805
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 805,
    "end": 806,
    "range": [
      805,
      806
    ]
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 807,
    "end": 815,
    "range": [
      807,
      815
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 815,
    "end": 816,
    "range": [
      815,
      816
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 816,
    "end": 817,
    "range": [
      816,
      817
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 848,
    "end": 851,
    "range": [
      848,
      851
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 852,
    "end": 853,
    "range": [
      852,
      853
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 853,
    "end": 854,
    "range": [
      853,
      854
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 854,
    "end": 855,
    "range": [
      854,
      855
    ]
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 855,
    "end": 856,
    "range": [
      855,
      856
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 856,
    "end": 857,
    "range": [
      856,
      857
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 857,
    "end": 858,
    "range": [
      857,
      858
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 858,
    "end": 859,
    "range": [
      858,
      859
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 859,
    "end": 860,
    "range": [
      859,
      860
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 861,
    "end": 862,
    "range": [
      861,
      862
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 862,
    "end": 863,
    "range": [
      862,
      863
    ]
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 864,
    "end": 872,
    "range": [
      864,
      872
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 872,
    "end": 873,
    "range": [
      872,
      873
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 873,
    "end": 874,
    "range": [
      873,
      874
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 875,
    "end": 878,
    "range": [
      875,
      878
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 879,
    "end": 880,
    "range": [
      879,
      880
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 880,
    "end": 881,
    "range": [
      880,
      881
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 881,
    "end": 882,
    "range": [
      881,
      882
    ]
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 882,
    "end": 883,
    "range": [
      882,
      883
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 883,
    "end": 884,
    "range": [
      883,
      884
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 884,
    "end": 885,
    "range": [
      884,
      885
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 885,
    "end": 886,
    "range": [
      885,
      886
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 886,
    "end": 887,
    "range": [
      886,
      887
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 888,
    "end": 889,
    "range": [
      888,
      889
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 889,
    "end": 890,
    "range": [
      889,
      890
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 891,
    "end": 894,
    "range": [
      891,
      894
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 894,
    "end": 895,
    "range": [
      894,
      895
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 895,
    "end": 896,
    "range": [
      895,
      896
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 896,
    "end": 897,
    "range": [
      896,
      897
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 898,
    "end": 901,
    "range": [
      898,
      901
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 902,
    "end": 903,
    "range": [
      902,
      903
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 903,
    "end": 904,
    "range": [
      903,
      904
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 904,
    "end": 905,
    "range": [
      904,
      905
    ]
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 905,
    "end": 906,
    "range": [
      905,
      906
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 906,
    "end": 907,
    "range": [
      906,
      907
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 907,
    "end": 908,
    "range": [
      907,
      908
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 908,
    "end": 909,
    "range": [
      908,
      909
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 909,
    "end": 910,
    "range": [
      909,
      910
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 911,
    "end": 912,
    "range": [
      911,
      912
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 912,
    "end": 913,
    "range": [
      912,
      913
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 914,
    "end": 917,
    "range": [
      914,
      917
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 917,
    "end": 918,
    "range": [
      917,
      918
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 918,
    "end": 919,
    "range": [
      918,
      919
    ]
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 920,
    "end": 928,
    "range": [
      920,
      928
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 928,
    "end": 929,
    "range": [
      928,
      929
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 929,
    "end": 930,
    "range": [
      929,
      930
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 962,
    "end": 965,
    "range": [
      962,
      965
    ]
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 966,
    "end": 967,
    "range": [
      966,
      967
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 967,
    "end": 968,
    "range": [
      967,
      968
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 968,
    "end": 969,
    "range": [
      968,
      969
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 969,
    "end": 970,
    "range": [
      969,
      970
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 970,
    "end": 971,
    "range": [
      970,
      971
    ]
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 971,
    "end": 972,
    "range": [
      971,
      972
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 972,
    "end": 973,
    "range": [
      972,
      973
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 973,
    "end": 974,
    "range": [
      973,
      974
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 974,
    "end": 975,
    "range": [
      974,
      975
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 976,
    "end": 977,
    "range": [
      976,
      977
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 977,
    "end": 978,
    "range": [
      977,
      978
    ]
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 979,
    "end": 987,
    "range": [
      979,
      987
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 987,
    "end": 988,
    "range": [
      987,
      988
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 988,
    "end": 989,
    "range": [
      988,
      989
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 990,
    "end": 993,
    "range": [
      990,
      993
    ]
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 994,
    "end": 995,
    "range": [
      994,
      995
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 995,
    "end": 996,
    "range": [
      995,
      996
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 996,
    "end": 997,
    "range": [
      996,
      997
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 997,
    "end": 998,
    "range": [
      997,
      998
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 998,
    "end": 999,
    "range": [
      998,
      999
    ]
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 999,
    "end": 1000,
    "range": [
      999,
      1000
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1000,
    "end": 1001,
    "range": [
      1000,
      1001
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1001,
    "end": 1002,
    "range": [
      1001,
      1002
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1002,
    "end": 1003,
    "range": [
      1002,
      1003
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1004,
    "end": 1005,
    "range": [
      1004,
      1005
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1005,
    "end": 1006,
    "range": [
      1005,
      1006
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1007,
    "end": 1010,
    "range": [
      1007,
      1010
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1010,
    "end": 1011,
    "range": [
      1010,
      1011
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1011,
    "end": 1012,
    "range": [
      1011,
      1012
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1012,
    "end": 1013,
    "range": [
      1012,
      1013
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1014,
    "end": 1017,
    "range": [
      1014,
      1017
    ]
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 1018,
    "end": 1019,
    "range": [
      1018,
      1019
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1019,
    "end": 1020,
    "range": [
      1019,
      1020
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1020,
    "end": 1021,
    "range": [
      1020,
      1021
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1021,
    "end": 1022,
    "range": [
      1021,
      1022
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1022,
    "end": 1023,
    "range": [
      1022,
      1023
    ]
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 1023,
    "end": 1024,
    "range": [
      1023,
      1024
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1024,
    "end": 1025,
    "range": [
      1024,
      1025
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1025,
    "end": 1026,
    "range": [
      1025,
      1026
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1026,
    "end": 1027,
    "range": [
      1026,
      1027
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1028,
    "end": 1029,
    "range": [
      1028,
      1029
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1029,
    "end": 1030,
    "range": [
      1029,
      1030
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1031,
    "end": 1034,
    "range": [
      1031,
      1034
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1034,
    "end": 1035,
    "range": [
      1034,
      1035
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1035,
    "end": 1036,
    "range": [
      1035,
      1036
    ]
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 1037,
    "end": 1045,
    "range": [
      1037,
      1045
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1045,
    "end": 1046,
    "range": [
      1045,
      1046
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1046,
    "end": 1047,
    "range": [
      1046,
      1047
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1100,
    "end": 1103,
    "range": [
      1100,
      1103
    ]
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 1104,
    "end": 1105,
    "range": [
      1104,
      1105
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1105,
    "end": 1106,
    "range": [
      1105,
      1106
    ]
  },
  {
    "type": "String",
    "value": "\"a-b\"",
    "start": 1106,
    "end": 1111,
    "range": [
      1106,
      1111
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1111,
    "end": 1112,
    "range": [
      1111,
      1112
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1112,
    "end": 1113,
    "range": [
      1112,
      1113
    ]
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 1113,
    "end": 1114,
    "range": [
      1113,
      1114
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1114,
    "end": 1115,
    "range": [
      1114,
      1115
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1115,
    "end": 1116,
    "range": [
      1115,
      1116
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1116,
    "end": 1117,
    "range": [
      1116,
      1117
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1118,
    "end": 1119,
    "range": [
      1118,
      1119
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1119,
    "end": 1120,
    "range": [
      1119,
      1120
    ]
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 1121,
    "end": 1129,
    "range": [
      1121,
      1129
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1129,
    "end": 1130,
    "range": [
      1129,
      1130
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1130,
    "end": 1131,
    "range": [
      1130,
      1131
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1132,
    "end": 1135,
    "range": [
      1132,
      1135
    ]
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 1136,
    "end": 1137,
    "range": [
      1136,
      1137
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1137,
    "end": 1138,
    "range": [
      1137,
      1138
    ]
  },
  {
    "type": "String",
    "value": "\"a-b\"",
    "start": 1138,
    "end": 1143,
    "range": [
      1138,
      1143
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1143,
    "end": 1144,
    "range": [
      1143,
      1144
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1144,
    "end": 1145,
    "range": [
      1144,
      1145
    ]
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 1145,
    "end": 1146,
    "range": [
      1145,
      1146
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1146,
    "end": 1147,
    "range": [
      1146,
      1147
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1147,
    "end": 1148,
    "range": [
      1147,
      1148
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1148,
    "end": 1149,
    "range": [
      1148,
      1149
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1150,
    "end": 1151,
    "range": [
      1150,
      1151
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1151,
    "end": 1152,
    "range": [
      1151,
      1152
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1153,
    "end": 1156,
    "range": [
      1153,
      1156
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1156,
    "end": 1157,
    "range": [
      1156,
      1157
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1157,
    "end": 1158,
    "range": [
      1157,
      1158
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1158,
    "end": 1159,
    "range": [
      1158,
      1159
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1160,
    "end": 1163,
    "range": [
      1160,
      1163
    ]
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 1164,
    "end": 1165,
    "range": [
      1164,
      1165
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1165,
    "end": 1166,
    "range": [
      1165,
      1166
    ]
  },
  {
    "type": "String",
    "value": "\"a-b\"",
    "start": 1166,
    "end": 1171,
    "range": [
      1166,
      1171
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1171,
    "end": 1172,
    "range": [
      1171,
      1172
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1172,
    "end": 1173,
    "range": [
      1172,
      1173
    ]
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 1173,
    "end": 1174,
    "range": [
      1173,
      1174
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1174,
    "end": 1175,
    "range": [
      1174,
      1175
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1175,
    "end": 1176,
    "range": [
      1175,
      1176
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1176,
    "end": 1177,
    "range": [
      1176,
      1177
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1178,
    "end": 1179,
    "range": [
      1178,
      1179
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1179,
    "end": 1180,
    "range": [
      1179,
      1180
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1181,
    "end": 1184,
    "range": [
      1181,
      1184
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1184,
    "end": 1185,
    "range": [
      1184,
      1185
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1185,
    "end": 1186,
    "range": [
      1185,
      1186
    ]
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 1187,
    "end": 1195,
    "range": [
      1187,
      1195
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1195,
    "end": 1196,
    "range": [
      1195,
      1196
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1196,
    "end": 1197,
    "range": [
      1196,
      1197
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1219,
    "end": 1222,
    "range": [
      1219,
      1222
    ]
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1223,
    "end": 1224,
    "range": [
      1223,
      1224
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1224,
    "end": 1225,
    "range": [
      1224,
      1225
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1225,
    "end": 1226,
    "range": [
      1225,
      1226
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1226,
    "end": 1227,
    "range": [
      1226,
      1227
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1228,
    "end": 1229,
    "range": [
      1228,
      1229
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1229,
    "end": 1230,
    "range": [
      1229,
      1230
    ]
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 1231,
    "end": 1239,
    "range": [
      1231,
      1239
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1239,
    "end": 1240,
    "range": [
      1239,
      1240
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1240,
    "end": 1241,
    "range": [
      1240,
      1241
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1242,
    "end": 1245,
    "range": [
      1242,
      1245
    ]
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1246,
    "end": 1247,
    "range": [
      1246,
      1247
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1247,
    "end": 1248,
    "range": [
      1247,
      1248
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1248,
    "end": 1249,
    "range": [
      1248,
      1249
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1249,
    "end": 1250,
    "range": [
      1249,
      1250
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1251,
    "end": 1252,
    "range": [
      1251,
      1252
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1252,
    "end": 1253,
    "range": [
      1252,
      1253
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1254,
    "end": 1257,
    "range": [
      1254,
      1257
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1257,
    "end": 1258,
    "range": [
      1257,
      1258
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1258,
    "end": 1259,
    "range": [
      1258,
      1259
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1259,
    "end": 1260,
    "range": [
      1259,
      1260
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1261,
    "end": 1264,
    "range": [
      1261,
      1264
    ]
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1265,
    "end": 1266,
    "range": [
      1265,
      1266
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1266,
    "end": 1267,
    "range": [
      1266,
      1267
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1267,
    "end": 1268,
    "range": [
      1267,
      1268
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1268,
    "end": 1269,
    "range": [
      1268,
      1269
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1270,
    "end": 1271,
    "range": [
      1270,
      1271
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1271,
    "end": 1272,
    "range": [
      1271,
      1272
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1273,
    "end": 1276,
    "range": [
      1273,
      1276
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1276,
    "end": 1277,
    "range": [
      1276,
      1277
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1277,
    "end": 1278,
    "range": [
      1277,
      1278
    ]
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 1279,
    "end": 1287,
    "range": [
      1279,
      1287
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1287,
    "end": 1288,
    "range": [
      1287,
      1288
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1288,
    "end": 1289,
    "range": [
      1288,
      1289
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1321,
    "end": 1324,
    "range": [
      1321,
      1324
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1325,
    "end": 1326,
    "range": [
      1325,
      1326
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1326,
    "end": 1327,
    "range": [
      1326,
      1327
    ]
  },
  {
    "type": "String",
    "value": "\"a-b\"",
    "start": 1327,
    "end": 1332,
    "range": [
      1327,
      1332
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1332,
    "end": 1333,
    "range": [
      1332,
      1333
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1333,
    "end": 1334,
    "range": [
      1333,
      1334
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1334,
    "end": 1335,
    "range": [
      1334,
      1335
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1335,
    "end": 1336,
    "range": [
      1335,
      1336
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1337,
    "end": 1338,
    "range": [
      1337,
      1338
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1338,
    "end": 1339,
    "range": [
      1338,
      1339
    ]
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 1340,
    "end": 1348,
    "range": [
      1340,
      1348
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1348,
    "end": 1349,
    "range": [
      1348,
      1349
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1349,
    "end": 1350,
    "range": [
      1349,
      1350
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1351,
    "end": 1354,
    "range": [
      1351,
      1354
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1355,
    "end": 1356,
    "range": [
      1355,
      1356
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1356,
    "end": 1357,
    "range": [
      1356,
      1357
    ]
  },
  {
    "type": "String",
    "value": "\"a-b\"",
    "start": 1357,
    "end": 1362,
    "range": [
      1357,
      1362
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1362,
    "end": 1363,
    "range": [
      1362,
      1363
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1363,
    "end": 1364,
    "range": [
      1363,
      1364
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1364,
    "end": 1365,
    "range": [
      1364,
      1365
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1365,
    "end": 1366,
    "range": [
      1365,
      1366
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1367,
    "end": 1368,
    "range": [
      1367,
      1368
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1368,
    "end": 1369,
    "range": [
      1368,
      1369
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1370,
    "end": 1373,
    "range": [
      1370,
      1373
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1373,
    "end": 1374,
    "range": [
      1373,
      1374
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1374,
    "end": 1375,
    "range": [
      1374,
      1375
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1375,
    "end": 1376,
    "range": [
      1375,
      1376
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1377,
    "end": 1380,
    "range": [
      1377,
      1380
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1381,
    "end": 1382,
    "range": [
      1381,
      1382
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1382,
    "end": 1383,
    "range": [
      1382,
      1383
    ]
  },
  {
    "type": "String",
    "value": "\"a-b\"",
    "start": 1383,
    "end": 1388,
    "range": [
      1383,
      1388
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1388,
    "end": 1389,
    "range": [
      1388,
      1389
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1389,
    "end": 1390,
    "range": [
      1389,
      1390
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1390,
    "end": 1391,
    "range": [
      1390,
      1391
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1391,
    "end": 1392,
    "range": [
      1391,
      1392
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1393,
    "end": 1394,
    "range": [
      1393,
      1394
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1394,
    "end": 1395,
    "range": [
      1394,
      1395
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1396,
    "end": 1399,
    "range": [
      1396,
      1399
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1399,
    "end": 1400,
    "range": [
      1399,
      1400
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1400,
    "end": 1401,
    "range": [
      1400,
      1401
    ]
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 1402,
    "end": 1410,
    "range": [
      1402,
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
    "value": "new",
    "start": 1442,
    "end": 1445,
    "range": [
      1442,
      1445
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1446,
    "end": 1447,
    "range": [
      1446,
      1447
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1447,
    "end": 1448,
    "range": [
      1447,
      1448
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1448,
    "end": 1449,
    "range": [
      1448,
      1449
    ]
  },
  {
    "type": "String",
    "value": "\"a-b\"",
    "start": 1449,
    "end": 1454,
    "range": [
      1449,
      1454
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1454,
    "end": 1455,
    "range": [
      1454,
      1455
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1455,
    "end": 1456,
    "range": [
      1455,
      1456
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1456,
    "end": 1457,
    "range": [
      1456,
      1457
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1457,
    "end": 1458,
    "range": [
      1457,
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
    "type": "Numeric",
    "value": "2",
    "start": 1460,
    "end": 1461,
    "range": [
      1460,
      1461
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1461,
    "end": 1462,
    "range": [
      1461,
      1462
    ]
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 1463,
    "end": 1471,
    "range": [
      1463,
      1471
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1471,
    "end": 1472,
    "range": [
      1471,
      1472
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1472,
    "end": 1473,
    "range": [
      1472,
      1473
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1474,
    "end": 1477,
    "range": [
      1474,
      1477
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1478,
    "end": 1479,
    "range": [
      1478,
      1479
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1479,
    "end": 1480,
    "range": [
      1479,
      1480
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1480,
    "end": 1481,
    "range": [
      1480,
      1481
    ]
  },
  {
    "type": "String",
    "value": "\"a-b\"",
    "start": 1481,
    "end": 1486,
    "range": [
      1481,
      1486
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1486,
    "end": 1487,
    "range": [
      1486,
      1487
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1487,
    "end": 1488,
    "range": [
      1487,
      1488
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1488,
    "end": 1489,
    "range": [
      1488,
      1489
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1489,
    "end": 1490,
    "range": [
      1489,
      1490
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1490,
    "end": 1491,
    "range": [
      1490,
      1491
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1492,
    "end": 1493,
    "range": [
      1492,
      1493
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1493,
    "end": 1494,
    "range": [
      1493,
      1494
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1495,
    "end": 1498,
    "range": [
      1495,
      1498
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1498,
    "end": 1499,
    "range": [
      1498,
      1499
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1499,
    "end": 1500,
    "range": [
      1499,
      1500
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1500,
    "end": 1501,
    "range": [
      1500,
      1501
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1502,
    "end": 1505,
    "range": [
      1502,
      1505
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1506,
    "end": 1507,
    "range": [
      1506,
      1507
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1507,
    "end": 1508,
    "range": [
      1507,
      1508
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1508,
    "end": 1509,
    "range": [
      1508,
      1509
    ]
  },
  {
    "type": "String",
    "value": "\"a-b\"",
    "start": 1509,
    "end": 1514,
    "range": [
      1509,
      1514
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1514,
    "end": 1515,
    "range": [
      1514,
      1515
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1515,
    "end": 1516,
    "range": [
      1515,
      1516
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1516,
    "end": 1517,
    "range": [
      1516,
      1517
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1517,
    "end": 1518,
    "range": [
      1517,
      1518
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1518,
    "end": 1519,
    "range": [
      1518,
      1519
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1520,
    "end": 1521,
    "range": [
      1520,
      1521
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1521,
    "end": 1522,
    "range": [
      1521,
      1522
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1523,
    "end": 1526,
    "range": [
      1523,
      1526
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1526,
    "end": 1527,
    "range": [
      1526,
      1527
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1527,
    "end": 1528,
    "range": [
      1527,
      1528
    ]
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 1529,
    "end": 1537,
    "range": [
      1529,
      1537
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1537,
    "end": 1538,
    "range": [
      1537,
      1538
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1538,
    "end": 1539,
    "range": [
      1538,
      1539
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1570,
    "end": 1573,
    "range": [
      1570,
      1573
    ]
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 1574,
    "end": 1575,
    "range": [
      1574,
      1575
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1575,
    "end": 1576,
    "range": [
      1575,
      1576
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1576,
    "end": 1577,
    "range": [
      1576,
      1577
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1577,
    "end": 1578,
    "range": [
      1577,
      1578
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1578,
    "end": 1579,
    "range": [
      1578,
      1579
    ]
  },
  {
    "type": "String",
    "value": "\"a-b\"",
    "start": 1579,
    "end": 1584,
    "range": [
      1579,
      1584
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1584,
    "end": 1585,
    "range": [
      1584,
      1585
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1585,
    "end": 1586,
    "range": [
      1585,
      1586
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1586,
    "end": 1587,
    "range": [
      1586,
      1587
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1587,
    "end": 1588,
    "range": [
      1587,
      1588
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1589,
    "end": 1590,
    "range": [
      1589,
      1590
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1590,
    "end": 1591,
    "range": [
      1590,
      1591
    ]
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 1592,
    "end": 1600,
    "range": [
      1592,
      1600
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1600,
    "end": 1601,
    "range": [
      1600,
      1601
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1601,
    "end": 1602,
    "range": [
      1601,
      1602
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1603,
    "end": 1606,
    "range": [
      1603,
      1606
    ]
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 1607,
    "end": 1608,
    "range": [
      1607,
      1608
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1608,
    "end": 1609,
    "range": [
      1608,
      1609
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1609,
    "end": 1610,
    "range": [
      1609,
      1610
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1610,
    "end": 1611,
    "range": [
      1610,
      1611
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1611,
    "end": 1612,
    "range": [
      1611,
      1612
    ]
  },
  {
    "type": "String",
    "value": "\"a-b\"",
    "start": 1612,
    "end": 1617,
    "range": [
      1612,
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
    "value": "(",
    "start": 1618,
    "end": 1619,
    "range": [
      1618,
      1619
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1619,
    "end": 1620,
    "range": [
      1619,
      1620
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1620,
    "end": 1621,
    "range": [
      1620,
      1621
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1622,
    "end": 1623,
    "range": [
      1622,
      1623
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1623,
    "end": 1624,
    "range": [
      1623,
      1624
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1625,
    "end": 1628,
    "range": [
      1625,
      1628
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1628,
    "end": 1629,
    "range": [
      1628,
      1629
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1629,
    "end": 1630,
    "range": [
      1629,
      1630
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1630,
    "end": 1631,
    "range": [
      1630,
      1631
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1632,
    "end": 1635,
    "range": [
      1632,
      1635
    ]
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 1636,
    "end": 1637,
    "range": [
      1636,
      1637
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1637,
    "end": 1638,
    "range": [
      1637,
      1638
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1638,
    "end": 1639,
    "range": [
      1638,
      1639
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1639,
    "end": 1640,
    "range": [
      1639,
      1640
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1640,
    "end": 1641,
    "range": [
      1640,
      1641
    ]
  },
  {
    "type": "String",
    "value": "\"a-b\"",
    "start": 1641,
    "end": 1646,
    "range": [
      1641,
      1646
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1646,
    "end": 1647,
    "range": [
      1646,
      1647
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1647,
    "end": 1648,
    "range": [
      1647,
      1648
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1648,
    "end": 1649,
    "range": [
      1648,
      1649
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1649,
    "end": 1650,
    "range": [
      1649,
      1650
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1651,
    "end": 1652,
    "range": [
      1651,
      1652
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1652,
    "end": 1653,
    "range": [
      1652,
      1653
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1654,
    "end": 1657,
    "range": [
      1654,
      1657
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1657,
    "end": 1658,
    "range": [
      1657,
      1658
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1658,
    "end": 1659,
    "range": [
      1658,
      1659
    ]
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 1660,
    "end": 1668,
    "range": [
      1660,
      1668
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1668,
    "end": 1669,
    "range": [
      1668,
      1669
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1669,
    "end": 1670,
    "range": [
      1669,
      1670
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1723,
    "end": 1726,
    "range": [
      1723,
      1726
    ]
  },
  {
    "type": "Identifier",
    "value": "h",
    "start": 1727,
    "end": 1728,
    "range": [
      1727,
      1728
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1728,
    "end": 1729,
    "range": [
      1728,
      1729
    ]
  },
  {
    "type": "String",
    "value": "\"a-b\"",
    "start": 1729,
    "end": 1734,
    "range": [
      1729,
      1734
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1734,
    "end": 1735,
    "range": [
      1734,
      1735
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1735,
    "end": 1736,
    "range": [
      1735,
      1736
    ]
  },
  {
    "type": "String",
    "value": "\"a-b\"",
    "start": 1736,
    "end": 1741,
    "range": [
      1736,
      1741
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1741,
    "end": 1742,
    "range": [
      1741,
      1742
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1742,
    "end": 1743,
    "range": [
      1742,
      1743
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1743,
    "end": 1744,
    "range": [
      1743,
      1744
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1744,
    "end": 1745,
    "range": [
      1744,
      1745
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1746,
    "end": 1747,
    "range": [
      1746,
      1747
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1747,
    "end": 1748,
    "range": [
      1747,
      1748
    ]
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 1749,
    "end": 1757,
    "range": [
      1749,
      1757
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1757,
    "end": 1758,
    "range": [
      1757,
      1758
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1758,
    "end": 1759,
    "range": [
      1758,
      1759
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1760,
    "end": 1763,
    "range": [
      1760,
      1763
    ]
  },
  {
    "type": "Identifier",
    "value": "h",
    "start": 1764,
    "end": 1765,
    "range": [
      1764,
      1765
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1765,
    "end": 1766,
    "range": [
      1765,
      1766
    ]
  },
  {
    "type": "String",
    "value": "\"a-b\"",
    "start": 1766,
    "end": 1771,
    "range": [
      1766,
      1771
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1771,
    "end": 1772,
    "range": [
      1771,
      1772
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1772,
    "end": 1773,
    "range": [
      1772,
      1773
    ]
  },
  {
    "type": "String",
    "value": "\"a-b\"",
    "start": 1773,
    "end": 1778,
    "range": [
      1773,
      1778
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1778,
    "end": 1779,
    "range": [
      1778,
      1779
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1779,
    "end": 1780,
    "range": [
      1779,
      1780
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1780,
    "end": 1781,
    "range": [
      1780,
      1781
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1781,
    "end": 1782,
    "range": [
      1781,
      1782
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1783,
    "end": 1784,
    "range": [
      1783,
      1784
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1784,
    "end": 1785,
    "range": [
      1784,
      1785
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1786,
    "end": 1789,
    "range": [
      1786,
      1789
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1789,
    "end": 1790,
    "range": [
      1789,
      1790
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1790,
    "end": 1791,
    "range": [
      1790,
      1791
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1791,
    "end": 1792,
    "range": [
      1791,
      1792
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1793,
    "end": 1796,
    "range": [
      1793,
      1796
    ]
  },
  {
    "type": "Identifier",
    "value": "h",
    "start": 1797,
    "end": 1798,
    "range": [
      1797,
      1798
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1798,
    "end": 1799,
    "range": [
      1798,
      1799
    ]
  },
  {
    "type": "String",
    "value": "\"a-b\"",
    "start": 1799,
    "end": 1804,
    "range": [
      1799,
      1804
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1804,
    "end": 1805,
    "range": [
      1804,
      1805
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1805,
    "end": 1806,
    "range": [
      1805,
      1806
    ]
  },
  {
    "type": "String",
    "value": "\"a-b\"",
    "start": 1806,
    "end": 1811,
    "range": [
      1806,
      1811
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1811,
    "end": 1812,
    "range": [
      1811,
      1812
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1812,
    "end": 1813,
    "range": [
      1812,
      1813
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1813,
    "end": 1814,
    "range": [
      1813,
      1814
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1814,
    "end": 1815,
    "range": [
      1814,
      1815
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1816,
    "end": 1817,
    "range": [
      1816,
      1817
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1817,
    "end": 1818,
    "range": [
      1817,
      1818
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1819,
    "end": 1822,
    "range": [
      1819,
      1822
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1822,
    "end": 1823,
    "range": [
      1822,
      1823
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1823,
    "end": 1824,
    "range": [
      1823,
      1824
    ]
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 1825,
    "end": 1833,
    "range": [
      1825,
      1833
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1833,
    "end": 1834,
    "range": [
      1833,
      1834
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1834,
    "end": 1835,
    "range": [
      1834,
      1835
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1880,
    "end": 1883,
    "range": [
      1880,
      1883
    ]
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1884,
    "end": 1885,
    "range": [
      1884,
      1885
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1885,
    "end": 1886,
    "range": [
      1885,
      1886
    ]
  },
  {
    "type": "String",
    "value": "\"a-b\"",
    "start": 1886,
    "end": 1891,
    "range": [
      1886,
      1891
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1891,
    "end": 1892,
    "range": [
      1891,
      1892
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1892,
    "end": 1893,
    "range": [
      1892,
      1893
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1893,
    "end": 1894,
    "range": [
      1893,
      1894
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1894,
    "end": 1895,
    "range": [
      1894,
      1895
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1895,
    "end": 1896,
    "range": [
      1895,
      1896
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1896,
    "end": 1897,
    "range": [
      1896,
      1897
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1897,
    "end": 1898,
    "range": [
      1897,
      1898
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1899,
    "end": 1900,
    "range": [
      1899,
      1900
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1900,
    "end": 1901,
    "range": [
      1900,
      1901
    ]
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 1902,
    "end": 1910,
    "range": [
      1902,
      1910
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1910,
    "end": 1911,
    "range": [
      1910,
      1911
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1911,
    "end": 1912,
    "range": [
      1911,
      1912
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1913,
    "end": 1916,
    "range": [
      1913,
      1916
    ]
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1917,
    "end": 1918,
    "range": [
      1917,
      1918
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1918,
    "end": 1919,
    "range": [
      1918,
      1919
    ]
  },
  {
    "type": "String",
    "value": "\"a-b\"",
    "start": 1919,
    "end": 1924,
    "range": [
      1919,
      1924
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1924,
    "end": 1925,
    "range": [
      1924,
      1925
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1925,
    "end": 1926,
    "range": [
      1925,
      1926
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1926,
    "end": 1927,
    "range": [
      1926,
      1927
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1927,
    "end": 1928,
    "range": [
      1927,
      1928
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1928,
    "end": 1929,
    "range": [
      1928,
      1929
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1929,
    "end": 1930,
    "range": [
      1929,
      1930
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1930,
    "end": 1931,
    "range": [
      1930,
      1931
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1932,
    "end": 1933,
    "range": [
      1932,
      1933
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1933,
    "end": 1934,
    "range": [
      1933,
      1934
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1935,
    "end": 1938,
    "range": [
      1935,
      1938
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1938,
    "end": 1939,
    "range": [
      1938,
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
    "type": "Keyword",
    "value": "new",
    "start": 1942,
    "end": 1945,
    "range": [
      1942,
      1945
    ]
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1946,
    "end": 1947,
    "range": [
      1946,
      1947
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1947,
    "end": 1948,
    "range": [
      1947,
      1948
    ]
  },
  {
    "type": "String",
    "value": "\"a-b\"",
    "start": 1948,
    "end": 1953,
    "range": [
      1948,
      1953
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1953,
    "end": 1954,
    "range": [
      1953,
      1954
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1954,
    "end": 1955,
    "range": [
      1954,
      1955
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1955,
    "end": 1956,
    "range": [
      1955,
      1956
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1956,
    "end": 1957,
    "range": [
      1956,
      1957
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1957,
    "end": 1958,
    "range": [
      1957,
      1958
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1958,
    "end": 1959,
    "range": [
      1958,
      1959
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1959,
    "end": 1960,
    "range": [
      1959,
      1960
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1961,
    "end": 1962,
    "range": [
      1961,
      1962
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1962,
    "end": 1963,
    "range": [
      1962,
      1963
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1964,
    "end": 1967,
    "range": [
      1964,
      1967
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1967,
    "end": 1968,
    "range": [
      1967,
      1968
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1968,
    "end": 1969,
    "range": [
      1968,
      1969
    ]
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 1970,
    "end": 1978,
    "range": [
      1970,
      1978
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1978,
    "end": 1979,
    "range": [
      1978,
      1979
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1979,
    "end": 1980,
    "range": [
      1979,
      1980
    ]
  }
]
```
