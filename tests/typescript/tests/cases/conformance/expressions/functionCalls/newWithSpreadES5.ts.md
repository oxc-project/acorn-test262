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
