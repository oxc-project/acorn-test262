__ESTREE_TEST__:AST:
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
        "name": "Base",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 10
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 24,
              "end": 25
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 27,
                "end": 33
              },
              "start": 25,
              "end": 33
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public",
            "start": 17,
            "end": 34
          }
        ],
        "start": 11,
        "end": 36
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 36
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Derived",
        "optional": false,
        "typeAnnotation": null,
        "start": 44,
        "end": 51
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null,
        "start": 60,
        "end": 64
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 78,
              "end": 79
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 81,
                "end": 87
              },
              "start": 79,
              "end": 87
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public",
            "start": 71,
            "end": 88
          }
        ],
        "start": 65,
        "end": 90
      },
      "abstract": false,
      "declare": false,
      "start": 38,
      "end": 90
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 98,
        "end": 99
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 113,
              "end": 114
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 116,
                "end": 122
              },
              "start": 114,
              "end": 122
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public",
            "start": 106,
            "end": 123
          }
        ],
        "start": 100,
        "end": 125
      },
      "abstract": false,
      "declare": false,
      "start": 92,
      "end": 125
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
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 141,
                            "end": 147
                          },
                          "start": 139,
                          "end": 147
                        },
                        "start": 138,
                        "end": 147
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 150,
                        "end": 156
                      },
                      "start": 148,
                      "end": 156
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null,
                    "start": 137,
                    "end": 156
                  }
                ],
                "start": 135,
                "end": 158
              },
              "start": 133,
              "end": 158
            },
            "start": 131,
            "end": 158
          },
          "init": null,
          "definite": false,
          "start": 131,
          "end": 158
        }
      ],
      "declare": false,
      "start": 127,
      "end": 159
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
            "name": "b1",
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
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 174,
                            "end": 180
                          },
                          "start": 172,
                          "end": 180
                        },
                        "start": 171,
                        "end": 180
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 183,
                        "end": 189
                      },
                      "start": 181,
                      "end": 189
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null,
                    "start": 170,
                    "end": 189
                  }
                ],
                "start": 168,
                "end": 191
              },
              "start": 166,
              "end": 191
            },
            "start": 164,
            "end": 191
          },
          "init": null,
          "definite": false,
          "start": 164,
          "end": 191
        }
      ],
      "declare": false,
      "start": 160,
      "end": 192
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
                        "name": "index",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 212,
                            "end": 218
                          },
                          "start": 210,
                          "end": 218
                        },
                        "start": 205,
                        "end": 218
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Base",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 221,
                          "end": 225
                        },
                        "typeArguments": null,
                        "start": 221,
                        "end": 225
                      },
                      "start": 219,
                      "end": 225
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null,
                    "start": 204,
                    "end": 225
                  }
                ],
                "start": 202,
                "end": 227
              },
              "start": 200,
              "end": 227
            },
            "start": 198,
            "end": 227
          },
          "init": null,
          "definite": false,
          "start": 198,
          "end": 227
        }
      ],
      "declare": false,
      "start": 194,
      "end": 228
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
            "name": "b2",
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
                        "name": "index",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 247,
                            "end": 253
                          },
                          "start": 245,
                          "end": 253
                        },
                        "start": 240,
                        "end": 253
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
                          "start": 256,
                          "end": 257
                        },
                        "typeArguments": null,
                        "start": 256,
                        "end": 257
                      },
                      "start": 254,
                      "end": 257
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null,
                    "start": 239,
                    "end": 257
                  }
                ],
                "start": 237,
                "end": 259
              },
              "start": 235,
              "end": 259
            },
            "start": 233,
            "end": 259
          },
          "init": null,
          "definite": false,
          "start": 233,
          "end": 259
        }
      ],
      "declare": false,
      "start": 229,
      "end": 260
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
                        "name": "index",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 280,
                            "end": 286
                          },
                          "start": 278,
                          "end": 286
                        },
                        "start": 273,
                        "end": 286
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Base",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 289,
                          "end": 293
                        },
                        "typeArguments": null,
                        "start": 289,
                        "end": 293
                      },
                      "start": 287,
                      "end": 293
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null,
                    "start": 272,
                    "end": 293
                  }
                ],
                "start": 270,
                "end": 295
              },
              "start": 268,
              "end": 295
            },
            "start": 266,
            "end": 295
          },
          "init": null,
          "definite": false,
          "start": 266,
          "end": 295
        }
      ],
      "declare": false,
      "start": 262,
      "end": 296
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
            "name": "b3",
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
                        "name": "index",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 315,
                            "end": 321
                          },
                          "start": 313,
                          "end": 321
                        },
                        "start": 308,
                        "end": 321
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
                          "start": 324,
                          "end": 325
                        },
                        "typeArguments": null,
                        "start": 324,
                        "end": 325
                      },
                      "start": 322,
                      "end": 325
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null,
                    "start": 307,
                    "end": 325
                  }
                ],
                "start": 305,
                "end": 327
              },
              "start": 303,
              "end": 327
            },
            "start": 301,
            "end": 327
          },
          "init": null,
          "definite": false,
          "start": 301,
          "end": 327
        }
      ],
      "declare": false,
      "start": 297,
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
            "name": "a4",
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
                        "name": "index",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 348,
                            "end": 354
                          },
                          "start": 346,
                          "end": 354
                        },
                        "start": 341,
                        "end": 354
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Derived",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 357,
                          "end": 364
                        },
                        "typeArguments": null,
                        "start": 357,
                        "end": 364
                      },
                      "start": 355,
                      "end": 364
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null,
                    "start": 340,
                    "end": 364
                  }
                ],
                "start": 338,
                "end": 366
              },
              "start": 336,
              "end": 366
            },
            "start": 334,
            "end": 366
          },
          "init": null,
          "definite": false,
          "start": 334,
          "end": 366
        }
      ],
      "declare": false,
      "start": 330,
      "end": 367
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
            "name": "b4",
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
                        "name": "index",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 386,
                            "end": 392
                          },
                          "start": 384,
                          "end": 392
                        },
                        "start": 379,
                        "end": 392
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Base",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 395,
                          "end": 399
                        },
                        "typeArguments": null,
                        "start": 395,
                        "end": 399
                      },
                      "start": 393,
                      "end": 399
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null,
                    "start": 378,
                    "end": 399
                  }
                ],
                "start": 376,
                "end": 401
              },
              "start": 374,
              "end": 401
            },
            "start": 372,
            "end": 401
          },
          "init": null,
          "definite": false,
          "start": 372,
          "end": 401
        }
      ],
      "declare": false,
      "start": 368,
      "end": 402
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
            "name": "r1a1",
            "optional": false,
            "typeAnnotation": null,
            "start": 422,
            "end": 426
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a1",
              "optional": false,
              "typeAnnotation": null,
              "start": 429,
              "end": 431
            },
            "operator": "<",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b1",
              "optional": false,
              "typeAnnotation": null,
              "start": 434,
              "end": 436
            },
            "start": 429,
            "end": 436
          },
          "definite": false,
          "start": 422,
          "end": 436
        }
      ],
      "declare": false,
      "start": 418,
      "end": 437
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
            "name": "r1a2",
            "optional": false,
            "typeAnnotation": null,
            "start": 442,
            "end": 446
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a2",
              "optional": false,
              "typeAnnotation": null,
              "start": 449,
              "end": 451
            },
            "operator": "<",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b2",
              "optional": false,
              "typeAnnotation": null,
              "start": 454,
              "end": 456
            },
            "start": 449,
            "end": 456
          },
          "definite": false,
          "start": 442,
          "end": 456
        }
      ],
      "declare": false,
      "start": 438,
      "end": 457
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
            "name": "r1a3",
            "optional": false,
            "typeAnnotation": null,
            "start": 462,
            "end": 466
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a3",
              "optional": false,
              "typeAnnotation": null,
              "start": 469,
              "end": 471
            },
            "operator": "<",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b3",
              "optional": false,
              "typeAnnotation": null,
              "start": 474,
              "end": 476
            },
            "start": 469,
            "end": 476
          },
          "definite": false,
          "start": 462,
          "end": 476
        }
      ],
      "declare": false,
      "start": 458,
      "end": 477
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
            "name": "r1a4",
            "optional": false,
            "typeAnnotation": null,
            "start": 482,
            "end": 486
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a4",
              "optional": false,
              "typeAnnotation": null,
              "start": 489,
              "end": 491
            },
            "operator": "<",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b4",
              "optional": false,
              "typeAnnotation": null,
              "start": 494,
              "end": 496
            },
            "start": 489,
            "end": 496
          },
          "definite": false,
          "start": 482,
          "end": 496
        }
      ],
      "declare": false,
      "start": 478,
      "end": 497
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
            "name": "r1b1",
            "optional": false,
            "typeAnnotation": null,
            "start": 503,
            "end": 507
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b1",
              "optional": false,
              "typeAnnotation": null,
              "start": 510,
              "end": 512
            },
            "operator": "<",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "a1",
              "optional": false,
              "typeAnnotation": null,
              "start": 515,
              "end": 517
            },
            "start": 510,
            "end": 517
          },
          "definite": false,
          "start": 503,
          "end": 517
        }
      ],
      "declare": false,
      "start": 499,
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
            "name": "r1b2",
            "optional": false,
            "typeAnnotation": null,
            "start": 523,
            "end": 527
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b2",
              "optional": false,
              "typeAnnotation": null,
              "start": 530,
              "end": 532
            },
            "operator": "<",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "a2",
              "optional": false,
              "typeAnnotation": null,
              "start": 535,
              "end": 537
            },
            "start": 530,
            "end": 537
          },
          "definite": false,
          "start": 523,
          "end": 537
        }
      ],
      "declare": false,
      "start": 519,
      "end": 538
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
            "name": "r1b3",
            "optional": false,
            "typeAnnotation": null,
            "start": 543,
            "end": 547
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b3",
              "optional": false,
              "typeAnnotation": null,
              "start": 550,
              "end": 552
            },
            "operator": "<",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "a3",
              "optional": false,
              "typeAnnotation": null,
              "start": 555,
              "end": 557
            },
            "start": 550,
            "end": 557
          },
          "definite": false,
          "start": 543,
          "end": 557
        }
      ],
      "declare": false,
      "start": 539,
      "end": 558
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
            "name": "r1b4",
            "optional": false,
            "typeAnnotation": null,
            "start": 563,
            "end": 567
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b4",
              "optional": false,
              "typeAnnotation": null,
              "start": 570,
              "end": 572
            },
            "operator": "<",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "a4",
              "optional": false,
              "typeAnnotation": null,
              "start": 575,
              "end": 577
            },
            "start": 570,
            "end": 577
          },
          "definite": false,
          "start": 563,
          "end": 577
        }
      ],
      "declare": false,
      "start": 559,
      "end": 578
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
            "name": "r2a1",
            "optional": false,
            "typeAnnotation": null,
            "start": 598,
            "end": 602
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a1",
              "optional": false,
              "typeAnnotation": null,
              "start": 605,
              "end": 607
            },
            "operator": ">",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b1",
              "optional": false,
              "typeAnnotation": null,
              "start": 610,
              "end": 612
            },
            "start": 605,
            "end": 612
          },
          "definite": false,
          "start": 598,
          "end": 612
        }
      ],
      "declare": false,
      "start": 594,
      "end": 613
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
            "name": "r2a2",
            "optional": false,
            "typeAnnotation": null,
            "start": 618,
            "end": 622
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a2",
              "optional": false,
              "typeAnnotation": null,
              "start": 625,
              "end": 627
            },
            "operator": ">",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b2",
              "optional": false,
              "typeAnnotation": null,
              "start": 630,
              "end": 632
            },
            "start": 625,
            "end": 632
          },
          "definite": false,
          "start": 618,
          "end": 632
        }
      ],
      "declare": false,
      "start": 614,
      "end": 633
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
            "name": "r2a3",
            "optional": false,
            "typeAnnotation": null,
            "start": 638,
            "end": 642
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a3",
              "optional": false,
              "typeAnnotation": null,
              "start": 645,
              "end": 647
            },
            "operator": ">",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b3",
              "optional": false,
              "typeAnnotation": null,
              "start": 650,
              "end": 652
            },
            "start": 645,
            "end": 652
          },
          "definite": false,
          "start": 638,
          "end": 652
        }
      ],
      "declare": false,
      "start": 634,
      "end": 653
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
            "name": "r2a4",
            "optional": false,
            "typeAnnotation": null,
            "start": 658,
            "end": 662
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a4",
              "optional": false,
              "typeAnnotation": null,
              "start": 665,
              "end": 667
            },
            "operator": ">",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b4",
              "optional": false,
              "typeAnnotation": null,
              "start": 670,
              "end": 672
            },
            "start": 665,
            "end": 672
          },
          "definite": false,
          "start": 658,
          "end": 672
        }
      ],
      "declare": false,
      "start": 654,
      "end": 673
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
            "name": "r2b1",
            "optional": false,
            "typeAnnotation": null,
            "start": 679,
            "end": 683
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b1",
              "optional": false,
              "typeAnnotation": null,
              "start": 686,
              "end": 688
            },
            "operator": ">",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "a1",
              "optional": false,
              "typeAnnotation": null,
              "start": 691,
              "end": 693
            },
            "start": 686,
            "end": 693
          },
          "definite": false,
          "start": 679,
          "end": 693
        }
      ],
      "declare": false,
      "start": 675,
      "end": 694
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
            "name": "r2b2",
            "optional": false,
            "typeAnnotation": null,
            "start": 699,
            "end": 703
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b2",
              "optional": false,
              "typeAnnotation": null,
              "start": 706,
              "end": 708
            },
            "operator": ">",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "a2",
              "optional": false,
              "typeAnnotation": null,
              "start": 711,
              "end": 713
            },
            "start": 706,
            "end": 713
          },
          "definite": false,
          "start": 699,
          "end": 713
        }
      ],
      "declare": false,
      "start": 695,
      "end": 714
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
            "name": "r2b3",
            "optional": false,
            "typeAnnotation": null,
            "start": 719,
            "end": 723
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b3",
              "optional": false,
              "typeAnnotation": null,
              "start": 726,
              "end": 728
            },
            "operator": ">",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "a3",
              "optional": false,
              "typeAnnotation": null,
              "start": 731,
              "end": 733
            },
            "start": 726,
            "end": 733
          },
          "definite": false,
          "start": 719,
          "end": 733
        }
      ],
      "declare": false,
      "start": 715,
      "end": 734
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
            "name": "r2b4",
            "optional": false,
            "typeAnnotation": null,
            "start": 739,
            "end": 743
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b4",
              "optional": false,
              "typeAnnotation": null,
              "start": 746,
              "end": 748
            },
            "operator": ">",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "a4",
              "optional": false,
              "typeAnnotation": null,
              "start": 751,
              "end": 753
            },
            "start": 746,
            "end": 753
          },
          "definite": false,
          "start": 739,
          "end": 753
        }
      ],
      "declare": false,
      "start": 735,
      "end": 754
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
            "name": "r3a1",
            "optional": false,
            "typeAnnotation": null,
            "start": 775,
            "end": 779
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a1",
              "optional": false,
              "typeAnnotation": null,
              "start": 782,
              "end": 784
            },
            "operator": "<=",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b1",
              "optional": false,
              "typeAnnotation": null,
              "start": 788,
              "end": 790
            },
            "start": 782,
            "end": 790
          },
          "definite": false,
          "start": 775,
          "end": 790
        }
      ],
      "declare": false,
      "start": 771,
      "end": 791
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
            "name": "r3a2",
            "optional": false,
            "typeAnnotation": null,
            "start": 796,
            "end": 800
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a2",
              "optional": false,
              "typeAnnotation": null,
              "start": 803,
              "end": 805
            },
            "operator": "<=",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b2",
              "optional": false,
              "typeAnnotation": null,
              "start": 809,
              "end": 811
            },
            "start": 803,
            "end": 811
          },
          "definite": false,
          "start": 796,
          "end": 811
        }
      ],
      "declare": false,
      "start": 792,
      "end": 812
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
            "name": "r3a3",
            "optional": false,
            "typeAnnotation": null,
            "start": 817,
            "end": 821
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a3",
              "optional": false,
              "typeAnnotation": null,
              "start": 824,
              "end": 826
            },
            "operator": "<=",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b3",
              "optional": false,
              "typeAnnotation": null,
              "start": 830,
              "end": 832
            },
            "start": 824,
            "end": 832
          },
          "definite": false,
          "start": 817,
          "end": 832
        }
      ],
      "declare": false,
      "start": 813,
      "end": 833
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
            "name": "r3a4",
            "optional": false,
            "typeAnnotation": null,
            "start": 838,
            "end": 842
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a4",
              "optional": false,
              "typeAnnotation": null,
              "start": 845,
              "end": 847
            },
            "operator": "<=",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b4",
              "optional": false,
              "typeAnnotation": null,
              "start": 851,
              "end": 853
            },
            "start": 845,
            "end": 853
          },
          "definite": false,
          "start": 838,
          "end": 853
        }
      ],
      "declare": false,
      "start": 834,
      "end": 854
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
            "name": "r3b1",
            "optional": false,
            "typeAnnotation": null,
            "start": 860,
            "end": 864
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b1",
              "optional": false,
              "typeAnnotation": null,
              "start": 867,
              "end": 869
            },
            "operator": "<=",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "a1",
              "optional": false,
              "typeAnnotation": null,
              "start": 873,
              "end": 875
            },
            "start": 867,
            "end": 875
          },
          "definite": false,
          "start": 860,
          "end": 875
        }
      ],
      "declare": false,
      "start": 856,
      "end": 876
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
            "name": "r3b2",
            "optional": false,
            "typeAnnotation": null,
            "start": 881,
            "end": 885
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b2",
              "optional": false,
              "typeAnnotation": null,
              "start": 888,
              "end": 890
            },
            "operator": "<=",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "a2",
              "optional": false,
              "typeAnnotation": null,
              "start": 894,
              "end": 896
            },
            "start": 888,
            "end": 896
          },
          "definite": false,
          "start": 881,
          "end": 896
        }
      ],
      "declare": false,
      "start": 877,
      "end": 897
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
            "name": "r3b3",
            "optional": false,
            "typeAnnotation": null,
            "start": 902,
            "end": 906
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b3",
              "optional": false,
              "typeAnnotation": null,
              "start": 909,
              "end": 911
            },
            "operator": "<=",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "a3",
              "optional": false,
              "typeAnnotation": null,
              "start": 915,
              "end": 917
            },
            "start": 909,
            "end": 917
          },
          "definite": false,
          "start": 902,
          "end": 917
        }
      ],
      "declare": false,
      "start": 898,
      "end": 918
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
            "name": "r3b4",
            "optional": false,
            "typeAnnotation": null,
            "start": 923,
            "end": 927
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b4",
              "optional": false,
              "typeAnnotation": null,
              "start": 930,
              "end": 932
            },
            "operator": "<=",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "a4",
              "optional": false,
              "typeAnnotation": null,
              "start": 936,
              "end": 938
            },
            "start": 930,
            "end": 938
          },
          "definite": false,
          "start": 923,
          "end": 938
        }
      ],
      "declare": false,
      "start": 919,
      "end": 939
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
            "name": "r4a1",
            "optional": false,
            "typeAnnotation": null,
            "start": 960,
            "end": 964
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a1",
              "optional": false,
              "typeAnnotation": null,
              "start": 967,
              "end": 969
            },
            "operator": ">=",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b1",
              "optional": false,
              "typeAnnotation": null,
              "start": 973,
              "end": 975
            },
            "start": 967,
            "end": 975
          },
          "definite": false,
          "start": 960,
          "end": 975
        }
      ],
      "declare": false,
      "start": 956,
      "end": 976
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
            "name": "r4a2",
            "optional": false,
            "typeAnnotation": null,
            "start": 981,
            "end": 985
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a2",
              "optional": false,
              "typeAnnotation": null,
              "start": 988,
              "end": 990
            },
            "operator": ">=",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b2",
              "optional": false,
              "typeAnnotation": null,
              "start": 994,
              "end": 996
            },
            "start": 988,
            "end": 996
          },
          "definite": false,
          "start": 981,
          "end": 996
        }
      ],
      "declare": false,
      "start": 977,
      "end": 997
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
            "name": "r4a3",
            "optional": false,
            "typeAnnotation": null,
            "start": 1002,
            "end": 1006
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a3",
              "optional": false,
              "typeAnnotation": null,
              "start": 1009,
              "end": 1011
            },
            "operator": ">=",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b3",
              "optional": false,
              "typeAnnotation": null,
              "start": 1015,
              "end": 1017
            },
            "start": 1009,
            "end": 1017
          },
          "definite": false,
          "start": 1002,
          "end": 1017
        }
      ],
      "declare": false,
      "start": 998,
      "end": 1018
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
            "name": "r4a4",
            "optional": false,
            "typeAnnotation": null,
            "start": 1023,
            "end": 1027
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a4",
              "optional": false,
              "typeAnnotation": null,
              "start": 1030,
              "end": 1032
            },
            "operator": ">=",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b4",
              "optional": false,
              "typeAnnotation": null,
              "start": 1036,
              "end": 1038
            },
            "start": 1030,
            "end": 1038
          },
          "definite": false,
          "start": 1023,
          "end": 1038
        }
      ],
      "declare": false,
      "start": 1019,
      "end": 1039
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
            "name": "r4b1",
            "optional": false,
            "typeAnnotation": null,
            "start": 1045,
            "end": 1049
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1052,
              "end": 1054
            },
            "operator": ">=",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "a1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1058,
              "end": 1060
            },
            "start": 1052,
            "end": 1060
          },
          "definite": false,
          "start": 1045,
          "end": 1060
        }
      ],
      "declare": false,
      "start": 1041,
      "end": 1061
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
            "name": "r4b2",
            "optional": false,
            "typeAnnotation": null,
            "start": 1066,
            "end": 1070
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1073,
              "end": 1075
            },
            "operator": ">=",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "a2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1079,
              "end": 1081
            },
            "start": 1073,
            "end": 1081
          },
          "definite": false,
          "start": 1066,
          "end": 1081
        }
      ],
      "declare": false,
      "start": 1062,
      "end": 1082
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
            "name": "r4b3",
            "optional": false,
            "typeAnnotation": null,
            "start": 1087,
            "end": 1091
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b3",
              "optional": false,
              "typeAnnotation": null,
              "start": 1094,
              "end": 1096
            },
            "operator": ">=",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "a3",
              "optional": false,
              "typeAnnotation": null,
              "start": 1100,
              "end": 1102
            },
            "start": 1094,
            "end": 1102
          },
          "definite": false,
          "start": 1087,
          "end": 1102
        }
      ],
      "declare": false,
      "start": 1083,
      "end": 1103
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
            "name": "r4b4",
            "optional": false,
            "typeAnnotation": null,
            "start": 1108,
            "end": 1112
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b4",
              "optional": false,
              "typeAnnotation": null,
              "start": 1115,
              "end": 1117
            },
            "operator": ">=",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "a4",
              "optional": false,
              "typeAnnotation": null,
              "start": 1121,
              "end": 1123
            },
            "start": 1115,
            "end": 1123
          },
          "definite": false,
          "start": 1108,
          "end": 1123
        }
      ],
      "declare": false,
      "start": 1104,
      "end": 1124
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
            "name": "r5a1",
            "optional": false,
            "typeAnnotation": null,
            "start": 1145,
            "end": 1149
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1152,
              "end": 1154
            },
            "operator": "==",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1158,
              "end": 1160
            },
            "start": 1152,
            "end": 1160
          },
          "definite": false,
          "start": 1145,
          "end": 1160
        }
      ],
      "declare": false,
      "start": 1141,
      "end": 1161
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
            "name": "r5a2",
            "optional": false,
            "typeAnnotation": null,
            "start": 1166,
            "end": 1170
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1173,
              "end": 1175
            },
            "operator": "==",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1179,
              "end": 1181
            },
            "start": 1173,
            "end": 1181
          },
          "definite": false,
          "start": 1166,
          "end": 1181
        }
      ],
      "declare": false,
      "start": 1162,
      "end": 1182
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
            "name": "r5a3",
            "optional": false,
            "typeAnnotation": null,
            "start": 1187,
            "end": 1191
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a3",
              "optional": false,
              "typeAnnotation": null,
              "start": 1194,
              "end": 1196
            },
            "operator": "==",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b3",
              "optional": false,
              "typeAnnotation": null,
              "start": 1200,
              "end": 1202
            },
            "start": 1194,
            "end": 1202
          },
          "definite": false,
          "start": 1187,
          "end": 1202
        }
      ],
      "declare": false,
      "start": 1183,
      "end": 1203
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
            "name": "r5a4",
            "optional": false,
            "typeAnnotation": null,
            "start": 1208,
            "end": 1212
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a4",
              "optional": false,
              "typeAnnotation": null,
              "start": 1215,
              "end": 1217
            },
            "operator": "==",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b4",
              "optional": false,
              "typeAnnotation": null,
              "start": 1221,
              "end": 1223
            },
            "start": 1215,
            "end": 1223
          },
          "definite": false,
          "start": 1208,
          "end": 1223
        }
      ],
      "declare": false,
      "start": 1204,
      "end": 1224
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
            "name": "r5b1",
            "optional": false,
            "typeAnnotation": null,
            "start": 1230,
            "end": 1234
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1237,
              "end": 1239
            },
            "operator": "==",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "a1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1243,
              "end": 1245
            },
            "start": 1237,
            "end": 1245
          },
          "definite": false,
          "start": 1230,
          "end": 1245
        }
      ],
      "declare": false,
      "start": 1226,
      "end": 1246
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
            "name": "r5b2",
            "optional": false,
            "typeAnnotation": null,
            "start": 1251,
            "end": 1255
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1258,
              "end": 1260
            },
            "operator": "==",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "a2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1264,
              "end": 1266
            },
            "start": 1258,
            "end": 1266
          },
          "definite": false,
          "start": 1251,
          "end": 1266
        }
      ],
      "declare": false,
      "start": 1247,
      "end": 1267
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
            "name": "r5b3",
            "optional": false,
            "typeAnnotation": null,
            "start": 1272,
            "end": 1276
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b3",
              "optional": false,
              "typeAnnotation": null,
              "start": 1279,
              "end": 1281
            },
            "operator": "==",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "a3",
              "optional": false,
              "typeAnnotation": null,
              "start": 1285,
              "end": 1287
            },
            "start": 1279,
            "end": 1287
          },
          "definite": false,
          "start": 1272,
          "end": 1287
        }
      ],
      "declare": false,
      "start": 1268,
      "end": 1288
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
            "name": "r5b4",
            "optional": false,
            "typeAnnotation": null,
            "start": 1293,
            "end": 1297
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b4",
              "optional": false,
              "typeAnnotation": null,
              "start": 1300,
              "end": 1302
            },
            "operator": "==",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "a4",
              "optional": false,
              "typeAnnotation": null,
              "start": 1306,
              "end": 1308
            },
            "start": 1300,
            "end": 1308
          },
          "definite": false,
          "start": 1293,
          "end": 1308
        }
      ],
      "declare": false,
      "start": 1289,
      "end": 1309
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
            "name": "r6a1",
            "optional": false,
            "typeAnnotation": null,
            "start": 1330,
            "end": 1334
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1337,
              "end": 1339
            },
            "operator": "!=",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1343,
              "end": 1345
            },
            "start": 1337,
            "end": 1345
          },
          "definite": false,
          "start": 1330,
          "end": 1345
        }
      ],
      "declare": false,
      "start": 1326,
      "end": 1346
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
            "name": "r6a2",
            "optional": false,
            "typeAnnotation": null,
            "start": 1351,
            "end": 1355
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1358,
              "end": 1360
            },
            "operator": "!=",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1364,
              "end": 1366
            },
            "start": 1358,
            "end": 1366
          },
          "definite": false,
          "start": 1351,
          "end": 1366
        }
      ],
      "declare": false,
      "start": 1347,
      "end": 1367
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
            "name": "r6a3",
            "optional": false,
            "typeAnnotation": null,
            "start": 1372,
            "end": 1376
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a3",
              "optional": false,
              "typeAnnotation": null,
              "start": 1379,
              "end": 1381
            },
            "operator": "!=",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b3",
              "optional": false,
              "typeAnnotation": null,
              "start": 1385,
              "end": 1387
            },
            "start": 1379,
            "end": 1387
          },
          "definite": false,
          "start": 1372,
          "end": 1387
        }
      ],
      "declare": false,
      "start": 1368,
      "end": 1388
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
            "name": "r6a4",
            "optional": false,
            "typeAnnotation": null,
            "start": 1393,
            "end": 1397
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a4",
              "optional": false,
              "typeAnnotation": null,
              "start": 1400,
              "end": 1402
            },
            "operator": "!=",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b4",
              "optional": false,
              "typeAnnotation": null,
              "start": 1406,
              "end": 1408
            },
            "start": 1400,
            "end": 1408
          },
          "definite": false,
          "start": 1393,
          "end": 1408
        }
      ],
      "declare": false,
      "start": 1389,
      "end": 1409
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
            "name": "r6b1",
            "optional": false,
            "typeAnnotation": null,
            "start": 1415,
            "end": 1419
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1422,
              "end": 1424
            },
            "operator": "!=",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "a1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1428,
              "end": 1430
            },
            "start": 1422,
            "end": 1430
          },
          "definite": false,
          "start": 1415,
          "end": 1430
        }
      ],
      "declare": false,
      "start": 1411,
      "end": 1431
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
            "name": "r6b2",
            "optional": false,
            "typeAnnotation": null,
            "start": 1436,
            "end": 1440
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1443,
              "end": 1445
            },
            "operator": "!=",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "a2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1449,
              "end": 1451
            },
            "start": 1443,
            "end": 1451
          },
          "definite": false,
          "start": 1436,
          "end": 1451
        }
      ],
      "declare": false,
      "start": 1432,
      "end": 1452
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
            "name": "r6b3",
            "optional": false,
            "typeAnnotation": null,
            "start": 1457,
            "end": 1461
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b3",
              "optional": false,
              "typeAnnotation": null,
              "start": 1464,
              "end": 1466
            },
            "operator": "!=",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "a3",
              "optional": false,
              "typeAnnotation": null,
              "start": 1470,
              "end": 1472
            },
            "start": 1464,
            "end": 1472
          },
          "definite": false,
          "start": 1457,
          "end": 1472
        }
      ],
      "declare": false,
      "start": 1453,
      "end": 1473
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
            "name": "r6b4",
            "optional": false,
            "typeAnnotation": null,
            "start": 1478,
            "end": 1482
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b4",
              "optional": false,
              "typeAnnotation": null,
              "start": 1485,
              "end": 1487
            },
            "operator": "!=",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "a4",
              "optional": false,
              "typeAnnotation": null,
              "start": 1491,
              "end": 1493
            },
            "start": 1485,
            "end": 1493
          },
          "definite": false,
          "start": 1478,
          "end": 1493
        }
      ],
      "declare": false,
      "start": 1474,
      "end": 1494
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
            "name": "r7a1",
            "optional": false,
            "typeAnnotation": null,
            "start": 1516,
            "end": 1520
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1523,
              "end": 1525
            },
            "operator": "===",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1530,
              "end": 1532
            },
            "start": 1523,
            "end": 1532
          },
          "definite": false,
          "start": 1516,
          "end": 1532
        }
      ],
      "declare": false,
      "start": 1512,
      "end": 1533
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
            "name": "r7a2",
            "optional": false,
            "typeAnnotation": null,
            "start": 1538,
            "end": 1542
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1545,
              "end": 1547
            },
            "operator": "===",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1552,
              "end": 1554
            },
            "start": 1545,
            "end": 1554
          },
          "definite": false,
          "start": 1538,
          "end": 1554
        }
      ],
      "declare": false,
      "start": 1534,
      "end": 1555
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
            "name": "r7a3",
            "optional": false,
            "typeAnnotation": null,
            "start": 1560,
            "end": 1564
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a3",
              "optional": false,
              "typeAnnotation": null,
              "start": 1567,
              "end": 1569
            },
            "operator": "===",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b3",
              "optional": false,
              "typeAnnotation": null,
              "start": 1574,
              "end": 1576
            },
            "start": 1567,
            "end": 1576
          },
          "definite": false,
          "start": 1560,
          "end": 1576
        }
      ],
      "declare": false,
      "start": 1556,
      "end": 1577
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
            "name": "r7a4",
            "optional": false,
            "typeAnnotation": null,
            "start": 1582,
            "end": 1586
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a4",
              "optional": false,
              "typeAnnotation": null,
              "start": 1589,
              "end": 1591
            },
            "operator": "===",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b4",
              "optional": false,
              "typeAnnotation": null,
              "start": 1596,
              "end": 1598
            },
            "start": 1589,
            "end": 1598
          },
          "definite": false,
          "start": 1582,
          "end": 1598
        }
      ],
      "declare": false,
      "start": 1578,
      "end": 1599
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
            "name": "r7b1",
            "optional": false,
            "typeAnnotation": null,
            "start": 1605,
            "end": 1609
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1612,
              "end": 1614
            },
            "operator": "===",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "a1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1619,
              "end": 1621
            },
            "start": 1612,
            "end": 1621
          },
          "definite": false,
          "start": 1605,
          "end": 1621
        }
      ],
      "declare": false,
      "start": 1601,
      "end": 1622
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
            "name": "r7b2",
            "optional": false,
            "typeAnnotation": null,
            "start": 1627,
            "end": 1631
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1634,
              "end": 1636
            },
            "operator": "===",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "a2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1641,
              "end": 1643
            },
            "start": 1634,
            "end": 1643
          },
          "definite": false,
          "start": 1627,
          "end": 1643
        }
      ],
      "declare": false,
      "start": 1623,
      "end": 1644
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
            "name": "r7b3",
            "optional": false,
            "typeAnnotation": null,
            "start": 1649,
            "end": 1653
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b3",
              "optional": false,
              "typeAnnotation": null,
              "start": 1656,
              "end": 1658
            },
            "operator": "===",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "a3",
              "optional": false,
              "typeAnnotation": null,
              "start": 1663,
              "end": 1665
            },
            "start": 1656,
            "end": 1665
          },
          "definite": false,
          "start": 1649,
          "end": 1665
        }
      ],
      "declare": false,
      "start": 1645,
      "end": 1666
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
            "name": "r7b4",
            "optional": false,
            "typeAnnotation": null,
            "start": 1671,
            "end": 1675
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b4",
              "optional": false,
              "typeAnnotation": null,
              "start": 1678,
              "end": 1680
            },
            "operator": "===",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "a4",
              "optional": false,
              "typeAnnotation": null,
              "start": 1685,
              "end": 1687
            },
            "start": 1678,
            "end": 1687
          },
          "definite": false,
          "start": 1671,
          "end": 1687
        }
      ],
      "declare": false,
      "start": 1667,
      "end": 1688
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
            "name": "r8a1",
            "optional": false,
            "typeAnnotation": null,
            "start": 1710,
            "end": 1714
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1717,
              "end": 1719
            },
            "operator": "!==",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1724,
              "end": 1726
            },
            "start": 1717,
            "end": 1726
          },
          "definite": false,
          "start": 1710,
          "end": 1726
        }
      ],
      "declare": false,
      "start": 1706,
      "end": 1727
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
            "name": "r8a2",
            "optional": false,
            "typeAnnotation": null,
            "start": 1732,
            "end": 1736
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1739,
              "end": 1741
            },
            "operator": "!==",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1746,
              "end": 1748
            },
            "start": 1739,
            "end": 1748
          },
          "definite": false,
          "start": 1732,
          "end": 1748
        }
      ],
      "declare": false,
      "start": 1728,
      "end": 1749
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
            "name": "r8a3",
            "optional": false,
            "typeAnnotation": null,
            "start": 1754,
            "end": 1758
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a3",
              "optional": false,
              "typeAnnotation": null,
              "start": 1761,
              "end": 1763
            },
            "operator": "!==",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b3",
              "optional": false,
              "typeAnnotation": null,
              "start": 1768,
              "end": 1770
            },
            "start": 1761,
            "end": 1770
          },
          "definite": false,
          "start": 1754,
          "end": 1770
        }
      ],
      "declare": false,
      "start": 1750,
      "end": 1771
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
            "name": "r8a4",
            "optional": false,
            "typeAnnotation": null,
            "start": 1776,
            "end": 1780
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a4",
              "optional": false,
              "typeAnnotation": null,
              "start": 1783,
              "end": 1785
            },
            "operator": "!==",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b4",
              "optional": false,
              "typeAnnotation": null,
              "start": 1790,
              "end": 1792
            },
            "start": 1783,
            "end": 1792
          },
          "definite": false,
          "start": 1776,
          "end": 1792
        }
      ],
      "declare": false,
      "start": 1772,
      "end": 1793
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
            "name": "r8b1",
            "optional": false,
            "typeAnnotation": null,
            "start": 1799,
            "end": 1803
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1806,
              "end": 1808
            },
            "operator": "!==",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "a1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1813,
              "end": 1815
            },
            "start": 1806,
            "end": 1815
          },
          "definite": false,
          "start": 1799,
          "end": 1815
        }
      ],
      "declare": false,
      "start": 1795,
      "end": 1816
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
            "name": "r8b2",
            "optional": false,
            "typeAnnotation": null,
            "start": 1821,
            "end": 1825
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1828,
              "end": 1830
            },
            "operator": "!==",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "a2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1835,
              "end": 1837
            },
            "start": 1828,
            "end": 1837
          },
          "definite": false,
          "start": 1821,
          "end": 1837
        }
      ],
      "declare": false,
      "start": 1817,
      "end": 1838
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
            "name": "r8b3",
            "optional": false,
            "typeAnnotation": null,
            "start": 1843,
            "end": 1847
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b3",
              "optional": false,
              "typeAnnotation": null,
              "start": 1850,
              "end": 1852
            },
            "operator": "!==",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "a3",
              "optional": false,
              "typeAnnotation": null,
              "start": 1857,
              "end": 1859
            },
            "start": 1850,
            "end": 1859
          },
          "definite": false,
          "start": 1843,
          "end": 1859
        }
      ],
      "declare": false,
      "start": 1839,
      "end": 1860
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
            "name": "r8b4",
            "optional": false,
            "typeAnnotation": null,
            "start": 1865,
            "end": 1869
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b4",
              "optional": false,
              "typeAnnotation": null,
              "start": 1872,
              "end": 1874
            },
            "operator": "!==",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "a4",
              "optional": false,
              "typeAnnotation": null,
              "start": 1879,
              "end": 1881
            },
            "start": 1872,
            "end": 1881
          },
          "definite": false,
          "start": 1865,
          "end": 1881
        }
      ],
      "declare": false,
      "start": 1861,
      "end": 1882
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1882
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "class",
    "start": 0,
    "end": 5,
    "range": [
      0,
      5
    ]
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 6,
    "end": 10,
    "range": [
      6,
      10
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 11,
    "end": 12,
    "range": [
      11,
      12
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 17,
    "end": 23,
    "range": [
      17,
      23
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 24,
    "end": 25,
    "range": [
      24,
      25
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 25,
    "end": 26,
    "range": [
      25,
      26
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 27,
    "end": 33,
    "range": [
      27,
      33
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 33,
    "end": 34,
    "range": [
      33,
      34
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 35,
    "end": 36,
    "range": [
      35,
      36
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 38,
    "end": 43,
    "range": [
      38,
      43
    ]
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 44,
    "end": 51,
    "range": [
      44,
      51
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 52,
    "end": 59,
    "range": [
      52,
      59
    ]
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 60,
    "end": 64,
    "range": [
      60,
      64
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 65,
    "end": 66,
    "range": [
      65,
      66
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 71,
    "end": 77,
    "range": [
      71,
      77
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 78,
    "end": 79,
    "range": [
      78,
      79
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 79,
    "end": 80,
    "range": [
      79,
      80
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 81,
    "end": 87,
    "range": [
      81,
      87
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 87,
    "end": 88,
    "range": [
      87,
      88
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 89,
    "end": 90,
    "range": [
      89,
      90
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 92,
    "end": 97,
    "range": [
      92,
      97
    ]
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 98,
    "end": 99,
    "range": [
      98,
      99
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 100,
    "end": 101,
    "range": [
      100,
      101
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 106,
    "end": 112,
    "range": [
      106,
      112
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 113,
    "end": 114,
    "range": [
      113,
      114
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 114,
    "end": 115,
    "range": [
      114,
      115
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 116,
    "end": 122,
    "range": [
      116,
      122
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 122,
    "end": 123,
    "range": [
      122,
      123
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 124,
    "end": 125,
    "range": [
      124,
      125
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 127,
    "end": 130,
    "range": [
      127,
      130
    ]
  },
  {
    "type": "Identifier",
    "value": "a1",
    "start": 131,
    "end": 133,
    "range": [
      131,
      133
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 133,
    "end": 134,
    "range": [
      133,
      134
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 135,
    "end": 136,
    "range": [
      135,
      136
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 137,
    "end": 138,
    "range": [
      137,
      138
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 138,
    "end": 139,
    "range": [
      138,
      139
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 139,
    "end": 140,
    "range": [
      139,
      140
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 141,
    "end": 147,
    "range": [
      141,
      147
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "value": "}",
    "start": 157,
    "end": 158,
    "range": [
      157,
      158
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 158,
    "end": 159,
    "range": [
      158,
      159
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 160,
    "end": 163,
    "range": [
      160,
      163
    ]
  },
  {
    "type": "Identifier",
    "value": "b1",
    "start": 164,
    "end": 166,
    "range": [
      164,
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
    "type": "Punctuator",
    "value": "{",
    "start": 168,
    "end": 169,
    "range": [
      168,
      169
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 170,
    "end": 171,
    "range": [
      170,
      171
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 171,
    "end": 172,
    "range": [
      171,
      172
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 172,
    "end": 173,
    "range": [
      172,
      173
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 174,
    "end": 180,
    "range": [
      174,
      180
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 180,
    "end": 181,
    "range": [
      180,
      181
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 181,
    "end": 182,
    "range": [
      181,
      182
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 183,
    "end": 189,
    "range": [
      183,
      189
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 190,
    "end": 191,
    "range": [
      190,
      191
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 191,
    "end": 192,
    "range": [
      191,
      192
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 194,
    "end": 197,
    "range": [
      194,
      197
    ]
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 198,
    "end": 200,
    "range": [
      198,
      200
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 200,
    "end": 201,
    "range": [
      200,
      201
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 202,
    "end": 203,
    "range": [
      202,
      203
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 204,
    "end": 205,
    "range": [
      204,
      205
    ]
  },
  {
    "type": "Identifier",
    "value": "index",
    "start": 205,
    "end": 210,
    "range": [
      205,
      210
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 210,
    "end": 211,
    "range": [
      210,
      211
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 212,
    "end": 218,
    "range": [
      212,
      218
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 218,
    "end": 219,
    "range": [
      218,
      219
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 219,
    "end": 220,
    "range": [
      219,
      220
    ]
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 221,
    "end": 225,
    "range": [
      221,
      225
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 226,
    "end": 227,
    "range": [
      226,
      227
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 227,
    "end": 228,
    "range": [
      227,
      228
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 229,
    "end": 232,
    "range": [
      229,
      232
    ]
  },
  {
    "type": "Identifier",
    "value": "b2",
    "start": 233,
    "end": 235,
    "range": [
      233,
      235
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 235,
    "end": 236,
    "range": [
      235,
      236
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 237,
    "end": 238,
    "range": [
      237,
      238
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 239,
    "end": 240,
    "range": [
      239,
      240
    ]
  },
  {
    "type": "Identifier",
    "value": "index",
    "start": 240,
    "end": 245,
    "range": [
      240,
      245
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 245,
    "end": 246,
    "range": [
      245,
      246
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 247,
    "end": 253,
    "range": [
      247,
      253
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 253,
    "end": 254,
    "range": [
      253,
      254
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 254,
    "end": 255,
    "range": [
      254,
      255
    ]
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 256,
    "end": 257,
    "range": [
      256,
      257
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 258,
    "end": 259,
    "range": [
      258,
      259
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 259,
    "end": 260,
    "range": [
      259,
      260
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 262,
    "end": 265,
    "range": [
      262,
      265
    ]
  },
  {
    "type": "Identifier",
    "value": "a3",
    "start": 266,
    "end": 268,
    "range": [
      266,
      268
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 268,
    "end": 269,
    "range": [
      268,
      269
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 270,
    "end": 271,
    "range": [
      270,
      271
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 272,
    "end": 273,
    "range": [
      272,
      273
    ]
  },
  {
    "type": "Identifier",
    "value": "index",
    "start": 273,
    "end": 278,
    "range": [
      273,
      278
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 278,
    "end": 279,
    "range": [
      278,
      279
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 280,
    "end": 286,
    "range": [
      280,
      286
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 286,
    "end": 287,
    "range": [
      286,
      287
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 287,
    "end": 288,
    "range": [
      287,
      288
    ]
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 289,
    "end": 293,
    "range": [
      289,
      293
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 294,
    "end": 295,
    "range": [
      294,
      295
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 295,
    "end": 296,
    "range": [
      295,
      296
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 297,
    "end": 300,
    "range": [
      297,
      300
    ]
  },
  {
    "type": "Identifier",
    "value": "b3",
    "start": 301,
    "end": 303,
    "range": [
      301,
      303
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 303,
    "end": 304,
    "range": [
      303,
      304
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 305,
    "end": 306,
    "range": [
      305,
      306
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 307,
    "end": 308,
    "range": [
      307,
      308
    ]
  },
  {
    "type": "Identifier",
    "value": "index",
    "start": 308,
    "end": 313,
    "range": [
      308,
      313
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 313,
    "end": 314,
    "range": [
      313,
      314
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 315,
    "end": 321,
    "range": [
      315,
      321
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 321,
    "end": 322,
    "range": [
      321,
      322
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 322,
    "end": 323,
    "range": [
      322,
      323
    ]
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 324,
    "end": 325,
    "range": [
      324,
      325
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "start": 330,
    "end": 333,
    "range": [
      330,
      333
    ]
  },
  {
    "type": "Identifier",
    "value": "a4",
    "start": 334,
    "end": 336,
    "range": [
      334,
      336
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 336,
    "end": 337,
    "range": [
      336,
      337
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 338,
    "end": 339,
    "range": [
      338,
      339
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 340,
    "end": 341,
    "range": [
      340,
      341
    ]
  },
  {
    "type": "Identifier",
    "value": "index",
    "start": 341,
    "end": 346,
    "range": [
      341,
      346
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 346,
    "end": 347,
    "range": [
      346,
      347
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 348,
    "end": 354,
    "range": [
      348,
      354
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 354,
    "end": 355,
    "range": [
      354,
      355
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 355,
    "end": 356,
    "range": [
      355,
      356
    ]
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 357,
    "end": 364,
    "range": [
      357,
      364
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 365,
    "end": 366,
    "range": [
      365,
      366
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 366,
    "end": 367,
    "range": [
      366,
      367
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 368,
    "end": 371,
    "range": [
      368,
      371
    ]
  },
  {
    "type": "Identifier",
    "value": "b4",
    "start": 372,
    "end": 374,
    "range": [
      372,
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
    "type": "Punctuator",
    "value": "{",
    "start": 376,
    "end": 377,
    "range": [
      376,
      377
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 378,
    "end": 379,
    "range": [
      378,
      379
    ]
  },
  {
    "type": "Identifier",
    "value": "index",
    "start": 379,
    "end": 384,
    "range": [
      379,
      384
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 384,
    "end": 385,
    "range": [
      384,
      385
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 386,
    "end": 392,
    "range": [
      386,
      392
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 392,
    "end": 393,
    "range": [
      392,
      393
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 393,
    "end": 394,
    "range": [
      393,
      394
    ]
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 395,
    "end": 399,
    "range": [
      395,
      399
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 400,
    "end": 401,
    "range": [
      400,
      401
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 401,
    "end": 402,
    "range": [
      401,
      402
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 418,
    "end": 421,
    "range": [
      418,
      421
    ]
  },
  {
    "type": "Identifier",
    "value": "r1a1",
    "start": 422,
    "end": 426,
    "range": [
      422,
      426
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 427,
    "end": 428,
    "range": [
      427,
      428
    ]
  },
  {
    "type": "Identifier",
    "value": "a1",
    "start": 429,
    "end": 431,
    "range": [
      429,
      431
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 432,
    "end": 433,
    "range": [
      432,
      433
    ]
  },
  {
    "type": "Identifier",
    "value": "b1",
    "start": 434,
    "end": 436,
    "range": [
      434,
      436
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 436,
    "end": 437,
    "range": [
      436,
      437
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 438,
    "end": 441,
    "range": [
      438,
      441
    ]
  },
  {
    "type": "Identifier",
    "value": "r1a2",
    "start": 442,
    "end": 446,
    "range": [
      442,
      446
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 447,
    "end": 448,
    "range": [
      447,
      448
    ]
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 449,
    "end": 451,
    "range": [
      449,
      451
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 452,
    "end": 453,
    "range": [
      452,
      453
    ]
  },
  {
    "type": "Identifier",
    "value": "b2",
    "start": 454,
    "end": 456,
    "range": [
      454,
      456
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 456,
    "end": 457,
    "range": [
      456,
      457
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 458,
    "end": 461,
    "range": [
      458,
      461
    ]
  },
  {
    "type": "Identifier",
    "value": "r1a3",
    "start": 462,
    "end": 466,
    "range": [
      462,
      466
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 467,
    "end": 468,
    "range": [
      467,
      468
    ]
  },
  {
    "type": "Identifier",
    "value": "a3",
    "start": 469,
    "end": 471,
    "range": [
      469,
      471
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 472,
    "end": 473,
    "range": [
      472,
      473
    ]
  },
  {
    "type": "Identifier",
    "value": "b3",
    "start": 474,
    "end": 476,
    "range": [
      474,
      476
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 476,
    "end": 477,
    "range": [
      476,
      477
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 478,
    "end": 481,
    "range": [
      478,
      481
    ]
  },
  {
    "type": "Identifier",
    "value": "r1a4",
    "start": 482,
    "end": 486,
    "range": [
      482,
      486
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 487,
    "end": 488,
    "range": [
      487,
      488
    ]
  },
  {
    "type": "Identifier",
    "value": "a4",
    "start": 489,
    "end": 491,
    "range": [
      489,
      491
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 492,
    "end": 493,
    "range": [
      492,
      493
    ]
  },
  {
    "type": "Identifier",
    "value": "b4",
    "start": 494,
    "end": 496,
    "range": [
      494,
      496
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 496,
    "end": 497,
    "range": [
      496,
      497
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 499,
    "end": 502,
    "range": [
      499,
      502
    ]
  },
  {
    "type": "Identifier",
    "value": "r1b1",
    "start": 503,
    "end": 507,
    "range": [
      503,
      507
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 508,
    "end": 509,
    "range": [
      508,
      509
    ]
  },
  {
    "type": "Identifier",
    "value": "b1",
    "start": 510,
    "end": 512,
    "range": [
      510,
      512
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 513,
    "end": 514,
    "range": [
      513,
      514
    ]
  },
  {
    "type": "Identifier",
    "value": "a1",
    "start": 515,
    "end": 517,
    "range": [
      515,
      517
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 517,
    "end": 518,
    "range": [
      517,
      518
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 519,
    "end": 522,
    "range": [
      519,
      522
    ]
  },
  {
    "type": "Identifier",
    "value": "r1b2",
    "start": 523,
    "end": 527,
    "range": [
      523,
      527
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 528,
    "end": 529,
    "range": [
      528,
      529
    ]
  },
  {
    "type": "Identifier",
    "value": "b2",
    "start": 530,
    "end": 532,
    "range": [
      530,
      532
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 533,
    "end": 534,
    "range": [
      533,
      534
    ]
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 535,
    "end": 537,
    "range": [
      535,
      537
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 537,
    "end": 538,
    "range": [
      537,
      538
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 539,
    "end": 542,
    "range": [
      539,
      542
    ]
  },
  {
    "type": "Identifier",
    "value": "r1b3",
    "start": 543,
    "end": 547,
    "range": [
      543,
      547
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 548,
    "end": 549,
    "range": [
      548,
      549
    ]
  },
  {
    "type": "Identifier",
    "value": "b3",
    "start": 550,
    "end": 552,
    "range": [
      550,
      552
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 553,
    "end": 554,
    "range": [
      553,
      554
    ]
  },
  {
    "type": "Identifier",
    "value": "a3",
    "start": 555,
    "end": 557,
    "range": [
      555,
      557
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 557,
    "end": 558,
    "range": [
      557,
      558
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 559,
    "end": 562,
    "range": [
      559,
      562
    ]
  },
  {
    "type": "Identifier",
    "value": "r1b4",
    "start": 563,
    "end": 567,
    "range": [
      563,
      567
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 568,
    "end": 569,
    "range": [
      568,
      569
    ]
  },
  {
    "type": "Identifier",
    "value": "b4",
    "start": 570,
    "end": 572,
    "range": [
      570,
      572
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 573,
    "end": 574,
    "range": [
      573,
      574
    ]
  },
  {
    "type": "Identifier",
    "value": "a4",
    "start": 575,
    "end": 577,
    "range": [
      575,
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
    "type": "Keyword",
    "value": "var",
    "start": 594,
    "end": 597,
    "range": [
      594,
      597
    ]
  },
  {
    "type": "Identifier",
    "value": "r2a1",
    "start": 598,
    "end": 602,
    "range": [
      598,
      602
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 603,
    "end": 604,
    "range": [
      603,
      604
    ]
  },
  {
    "type": "Identifier",
    "value": "a1",
    "start": 605,
    "end": 607,
    "range": [
      605,
      607
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 608,
    "end": 609,
    "range": [
      608,
      609
    ]
  },
  {
    "type": "Identifier",
    "value": "b1",
    "start": 610,
    "end": 612,
    "range": [
      610,
      612
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 612,
    "end": 613,
    "range": [
      612,
      613
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 614,
    "end": 617,
    "range": [
      614,
      617
    ]
  },
  {
    "type": "Identifier",
    "value": "r2a2",
    "start": 618,
    "end": 622,
    "range": [
      618,
      622
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 623,
    "end": 624,
    "range": [
      623,
      624
    ]
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 625,
    "end": 627,
    "range": [
      625,
      627
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 628,
    "end": 629,
    "range": [
      628,
      629
    ]
  },
  {
    "type": "Identifier",
    "value": "b2",
    "start": 630,
    "end": 632,
    "range": [
      630,
      632
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 632,
    "end": 633,
    "range": [
      632,
      633
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 634,
    "end": 637,
    "range": [
      634,
      637
    ]
  },
  {
    "type": "Identifier",
    "value": "r2a3",
    "start": 638,
    "end": 642,
    "range": [
      638,
      642
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 643,
    "end": 644,
    "range": [
      643,
      644
    ]
  },
  {
    "type": "Identifier",
    "value": "a3",
    "start": 645,
    "end": 647,
    "range": [
      645,
      647
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 648,
    "end": 649,
    "range": [
      648,
      649
    ]
  },
  {
    "type": "Identifier",
    "value": "b3",
    "start": 650,
    "end": 652,
    "range": [
      650,
      652
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 652,
    "end": 653,
    "range": [
      652,
      653
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 654,
    "end": 657,
    "range": [
      654,
      657
    ]
  },
  {
    "type": "Identifier",
    "value": "r2a4",
    "start": 658,
    "end": 662,
    "range": [
      658,
      662
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 663,
    "end": 664,
    "range": [
      663,
      664
    ]
  },
  {
    "type": "Identifier",
    "value": "a4",
    "start": 665,
    "end": 667,
    "range": [
      665,
      667
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 668,
    "end": 669,
    "range": [
      668,
      669
    ]
  },
  {
    "type": "Identifier",
    "value": "b4",
    "start": 670,
    "end": 672,
    "range": [
      670,
      672
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 672,
    "end": 673,
    "range": [
      672,
      673
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 675,
    "end": 678,
    "range": [
      675,
      678
    ]
  },
  {
    "type": "Identifier",
    "value": "r2b1",
    "start": 679,
    "end": 683,
    "range": [
      679,
      683
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 684,
    "end": 685,
    "range": [
      684,
      685
    ]
  },
  {
    "type": "Identifier",
    "value": "b1",
    "start": 686,
    "end": 688,
    "range": [
      686,
      688
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 689,
    "end": 690,
    "range": [
      689,
      690
    ]
  },
  {
    "type": "Identifier",
    "value": "a1",
    "start": 691,
    "end": 693,
    "range": [
      691,
      693
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 693,
    "end": 694,
    "range": [
      693,
      694
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 695,
    "end": 698,
    "range": [
      695,
      698
    ]
  },
  {
    "type": "Identifier",
    "value": "r2b2",
    "start": 699,
    "end": 703,
    "range": [
      699,
      703
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 704,
    "end": 705,
    "range": [
      704,
      705
    ]
  },
  {
    "type": "Identifier",
    "value": "b2",
    "start": 706,
    "end": 708,
    "range": [
      706,
      708
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 709,
    "end": 710,
    "range": [
      709,
      710
    ]
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 711,
    "end": 713,
    "range": [
      711,
      713
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 713,
    "end": 714,
    "range": [
      713,
      714
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 715,
    "end": 718,
    "range": [
      715,
      718
    ]
  },
  {
    "type": "Identifier",
    "value": "r2b3",
    "start": 719,
    "end": 723,
    "range": [
      719,
      723
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 724,
    "end": 725,
    "range": [
      724,
      725
    ]
  },
  {
    "type": "Identifier",
    "value": "b3",
    "start": 726,
    "end": 728,
    "range": [
      726,
      728
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 729,
    "end": 730,
    "range": [
      729,
      730
    ]
  },
  {
    "type": "Identifier",
    "value": "a3",
    "start": 731,
    "end": 733,
    "range": [
      731,
      733
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 733,
    "end": 734,
    "range": [
      733,
      734
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 735,
    "end": 738,
    "range": [
      735,
      738
    ]
  },
  {
    "type": "Identifier",
    "value": "r2b4",
    "start": 739,
    "end": 743,
    "range": [
      739,
      743
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 744,
    "end": 745,
    "range": [
      744,
      745
    ]
  },
  {
    "type": "Identifier",
    "value": "b4",
    "start": 746,
    "end": 748,
    "range": [
      746,
      748
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 749,
    "end": 750,
    "range": [
      749,
      750
    ]
  },
  {
    "type": "Identifier",
    "value": "a4",
    "start": 751,
    "end": 753,
    "range": [
      751,
      753
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 753,
    "end": 754,
    "range": [
      753,
      754
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 771,
    "end": 774,
    "range": [
      771,
      774
    ]
  },
  {
    "type": "Identifier",
    "value": "r3a1",
    "start": 775,
    "end": 779,
    "range": [
      775,
      779
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 780,
    "end": 781,
    "range": [
      780,
      781
    ]
  },
  {
    "type": "Identifier",
    "value": "a1",
    "start": 782,
    "end": 784,
    "range": [
      782,
      784
    ]
  },
  {
    "type": "Punctuator",
    "value": "<=",
    "start": 785,
    "end": 787,
    "range": [
      785,
      787
    ]
  },
  {
    "type": "Identifier",
    "value": "b1",
    "start": 788,
    "end": 790,
    "range": [
      788,
      790
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 790,
    "end": 791,
    "range": [
      790,
      791
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 792,
    "end": 795,
    "range": [
      792,
      795
    ]
  },
  {
    "type": "Identifier",
    "value": "r3a2",
    "start": 796,
    "end": 800,
    "range": [
      796,
      800
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 801,
    "end": 802,
    "range": [
      801,
      802
    ]
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 803,
    "end": 805,
    "range": [
      803,
      805
    ]
  },
  {
    "type": "Punctuator",
    "value": "<=",
    "start": 806,
    "end": 808,
    "range": [
      806,
      808
    ]
  },
  {
    "type": "Identifier",
    "value": "b2",
    "start": 809,
    "end": 811,
    "range": [
      809,
      811
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 811,
    "end": 812,
    "range": [
      811,
      812
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 813,
    "end": 816,
    "range": [
      813,
      816
    ]
  },
  {
    "type": "Identifier",
    "value": "r3a3",
    "start": 817,
    "end": 821,
    "range": [
      817,
      821
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 822,
    "end": 823,
    "range": [
      822,
      823
    ]
  },
  {
    "type": "Identifier",
    "value": "a3",
    "start": 824,
    "end": 826,
    "range": [
      824,
      826
    ]
  },
  {
    "type": "Punctuator",
    "value": "<=",
    "start": 827,
    "end": 829,
    "range": [
      827,
      829
    ]
  },
  {
    "type": "Identifier",
    "value": "b3",
    "start": 830,
    "end": 832,
    "range": [
      830,
      832
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 832,
    "end": 833,
    "range": [
      832,
      833
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 834,
    "end": 837,
    "range": [
      834,
      837
    ]
  },
  {
    "type": "Identifier",
    "value": "r3a4",
    "start": 838,
    "end": 842,
    "range": [
      838,
      842
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 843,
    "end": 844,
    "range": [
      843,
      844
    ]
  },
  {
    "type": "Identifier",
    "value": "a4",
    "start": 845,
    "end": 847,
    "range": [
      845,
      847
    ]
  },
  {
    "type": "Punctuator",
    "value": "<=",
    "start": 848,
    "end": 850,
    "range": [
      848,
      850
    ]
  },
  {
    "type": "Identifier",
    "value": "b4",
    "start": 851,
    "end": 853,
    "range": [
      851,
      853
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 853,
    "end": 854,
    "range": [
      853,
      854
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 856,
    "end": 859,
    "range": [
      856,
      859
    ]
  },
  {
    "type": "Identifier",
    "value": "r3b1",
    "start": 860,
    "end": 864,
    "range": [
      860,
      864
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 865,
    "end": 866,
    "range": [
      865,
      866
    ]
  },
  {
    "type": "Identifier",
    "value": "b1",
    "start": 867,
    "end": 869,
    "range": [
      867,
      869
    ]
  },
  {
    "type": "Punctuator",
    "value": "<=",
    "start": 870,
    "end": 872,
    "range": [
      870,
      872
    ]
  },
  {
    "type": "Identifier",
    "value": "a1",
    "start": 873,
    "end": 875,
    "range": [
      873,
      875
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 875,
    "end": 876,
    "range": [
      875,
      876
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 877,
    "end": 880,
    "range": [
      877,
      880
    ]
  },
  {
    "type": "Identifier",
    "value": "r3b2",
    "start": 881,
    "end": 885,
    "range": [
      881,
      885
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 886,
    "end": 887,
    "range": [
      886,
      887
    ]
  },
  {
    "type": "Identifier",
    "value": "b2",
    "start": 888,
    "end": 890,
    "range": [
      888,
      890
    ]
  },
  {
    "type": "Punctuator",
    "value": "<=",
    "start": 891,
    "end": 893,
    "range": [
      891,
      893
    ]
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 894,
    "end": 896,
    "range": [
      894,
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
    "value": "var",
    "start": 898,
    "end": 901,
    "range": [
      898,
      901
    ]
  },
  {
    "type": "Identifier",
    "value": "r3b3",
    "start": 902,
    "end": 906,
    "range": [
      902,
      906
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 907,
    "end": 908,
    "range": [
      907,
      908
    ]
  },
  {
    "type": "Identifier",
    "value": "b3",
    "start": 909,
    "end": 911,
    "range": [
      909,
      911
    ]
  },
  {
    "type": "Punctuator",
    "value": "<=",
    "start": 912,
    "end": 914,
    "range": [
      912,
      914
    ]
  },
  {
    "type": "Identifier",
    "value": "a3",
    "start": 915,
    "end": 917,
    "range": [
      915,
      917
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 917,
    "end": 918,
    "range": [
      917,
      918
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 919,
    "end": 922,
    "range": [
      919,
      922
    ]
  },
  {
    "type": "Identifier",
    "value": "r3b4",
    "start": 923,
    "end": 927,
    "range": [
      923,
      927
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 928,
    "end": 929,
    "range": [
      928,
      929
    ]
  },
  {
    "type": "Identifier",
    "value": "b4",
    "start": 930,
    "end": 932,
    "range": [
      930,
      932
    ]
  },
  {
    "type": "Punctuator",
    "value": "<=",
    "start": 933,
    "end": 935,
    "range": [
      933,
      935
    ]
  },
  {
    "type": "Identifier",
    "value": "a4",
    "start": 936,
    "end": 938,
    "range": [
      936,
      938
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 938,
    "end": 939,
    "range": [
      938,
      939
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 956,
    "end": 959,
    "range": [
      956,
      959
    ]
  },
  {
    "type": "Identifier",
    "value": "r4a1",
    "start": 960,
    "end": 964,
    "range": [
      960,
      964
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 965,
    "end": 966,
    "range": [
      965,
      966
    ]
  },
  {
    "type": "Identifier",
    "value": "a1",
    "start": 967,
    "end": 969,
    "range": [
      967,
      969
    ]
  },
  {
    "type": "Punctuator",
    "value": ">=",
    "start": 970,
    "end": 972,
    "range": [
      970,
      972
    ]
  },
  {
    "type": "Identifier",
    "value": "b1",
    "start": 973,
    "end": 975,
    "range": [
      973,
      975
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 975,
    "end": 976,
    "range": [
      975,
      976
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 977,
    "end": 980,
    "range": [
      977,
      980
    ]
  },
  {
    "type": "Identifier",
    "value": "r4a2",
    "start": 981,
    "end": 985,
    "range": [
      981,
      985
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 986,
    "end": 987,
    "range": [
      986,
      987
    ]
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 988,
    "end": 990,
    "range": [
      988,
      990
    ]
  },
  {
    "type": "Punctuator",
    "value": ">=",
    "start": 991,
    "end": 993,
    "range": [
      991,
      993
    ]
  },
  {
    "type": "Identifier",
    "value": "b2",
    "start": 994,
    "end": 996,
    "range": [
      994,
      996
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 996,
    "end": 997,
    "range": [
      996,
      997
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 998,
    "end": 1001,
    "range": [
      998,
      1001
    ]
  },
  {
    "type": "Identifier",
    "value": "r4a3",
    "start": 1002,
    "end": 1006,
    "range": [
      1002,
      1006
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1007,
    "end": 1008,
    "range": [
      1007,
      1008
    ]
  },
  {
    "type": "Identifier",
    "value": "a3",
    "start": 1009,
    "end": 1011,
    "range": [
      1009,
      1011
    ]
  },
  {
    "type": "Punctuator",
    "value": ">=",
    "start": 1012,
    "end": 1014,
    "range": [
      1012,
      1014
    ]
  },
  {
    "type": "Identifier",
    "value": "b3",
    "start": 1015,
    "end": 1017,
    "range": [
      1015,
      1017
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1017,
    "end": 1018,
    "range": [
      1017,
      1018
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1019,
    "end": 1022,
    "range": [
      1019,
      1022
    ]
  },
  {
    "type": "Identifier",
    "value": "r4a4",
    "start": 1023,
    "end": 1027,
    "range": [
      1023,
      1027
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1028,
    "end": 1029,
    "range": [
      1028,
      1029
    ]
  },
  {
    "type": "Identifier",
    "value": "a4",
    "start": 1030,
    "end": 1032,
    "range": [
      1030,
      1032
    ]
  },
  {
    "type": "Punctuator",
    "value": ">=",
    "start": 1033,
    "end": 1035,
    "range": [
      1033,
      1035
    ]
  },
  {
    "type": "Identifier",
    "value": "b4",
    "start": 1036,
    "end": 1038,
    "range": [
      1036,
      1038
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1038,
    "end": 1039,
    "range": [
      1038,
      1039
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1041,
    "end": 1044,
    "range": [
      1041,
      1044
    ]
  },
  {
    "type": "Identifier",
    "value": "r4b1",
    "start": 1045,
    "end": 1049,
    "range": [
      1045,
      1049
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1050,
    "end": 1051,
    "range": [
      1050,
      1051
    ]
  },
  {
    "type": "Identifier",
    "value": "b1",
    "start": 1052,
    "end": 1054,
    "range": [
      1052,
      1054
    ]
  },
  {
    "type": "Punctuator",
    "value": ">=",
    "start": 1055,
    "end": 1057,
    "range": [
      1055,
      1057
    ]
  },
  {
    "type": "Identifier",
    "value": "a1",
    "start": 1058,
    "end": 1060,
    "range": [
      1058,
      1060
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1060,
    "end": 1061,
    "range": [
      1060,
      1061
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1062,
    "end": 1065,
    "range": [
      1062,
      1065
    ]
  },
  {
    "type": "Identifier",
    "value": "r4b2",
    "start": 1066,
    "end": 1070,
    "range": [
      1066,
      1070
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1071,
    "end": 1072,
    "range": [
      1071,
      1072
    ]
  },
  {
    "type": "Identifier",
    "value": "b2",
    "start": 1073,
    "end": 1075,
    "range": [
      1073,
      1075
    ]
  },
  {
    "type": "Punctuator",
    "value": ">=",
    "start": 1076,
    "end": 1078,
    "range": [
      1076,
      1078
    ]
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 1079,
    "end": 1081,
    "range": [
      1079,
      1081
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1081,
    "end": 1082,
    "range": [
      1081,
      1082
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1083,
    "end": 1086,
    "range": [
      1083,
      1086
    ]
  },
  {
    "type": "Identifier",
    "value": "r4b3",
    "start": 1087,
    "end": 1091,
    "range": [
      1087,
      1091
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1092,
    "end": 1093,
    "range": [
      1092,
      1093
    ]
  },
  {
    "type": "Identifier",
    "value": "b3",
    "start": 1094,
    "end": 1096,
    "range": [
      1094,
      1096
    ]
  },
  {
    "type": "Punctuator",
    "value": ">=",
    "start": 1097,
    "end": 1099,
    "range": [
      1097,
      1099
    ]
  },
  {
    "type": "Identifier",
    "value": "a3",
    "start": 1100,
    "end": 1102,
    "range": [
      1100,
      1102
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1102,
    "end": 1103,
    "range": [
      1102,
      1103
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1104,
    "end": 1107,
    "range": [
      1104,
      1107
    ]
  },
  {
    "type": "Identifier",
    "value": "r4b4",
    "start": 1108,
    "end": 1112,
    "range": [
      1108,
      1112
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1113,
    "end": 1114,
    "range": [
      1113,
      1114
    ]
  },
  {
    "type": "Identifier",
    "value": "b4",
    "start": 1115,
    "end": 1117,
    "range": [
      1115,
      1117
    ]
  },
  {
    "type": "Punctuator",
    "value": ">=",
    "start": 1118,
    "end": 1120,
    "range": [
      1118,
      1120
    ]
  },
  {
    "type": "Identifier",
    "value": "a4",
    "start": 1121,
    "end": 1123,
    "range": [
      1121,
      1123
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1123,
    "end": 1124,
    "range": [
      1123,
      1124
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1141,
    "end": 1144,
    "range": [
      1141,
      1144
    ]
  },
  {
    "type": "Identifier",
    "value": "r5a1",
    "start": 1145,
    "end": 1149,
    "range": [
      1145,
      1149
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1150,
    "end": 1151,
    "range": [
      1150,
      1151
    ]
  },
  {
    "type": "Identifier",
    "value": "a1",
    "start": 1152,
    "end": 1154,
    "range": [
      1152,
      1154
    ]
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 1155,
    "end": 1157,
    "range": [
      1155,
      1157
    ]
  },
  {
    "type": "Identifier",
    "value": "b1",
    "start": 1158,
    "end": 1160,
    "range": [
      1158,
      1160
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1160,
    "end": 1161,
    "range": [
      1160,
      1161
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1162,
    "end": 1165,
    "range": [
      1162,
      1165
    ]
  },
  {
    "type": "Identifier",
    "value": "r5a2",
    "start": 1166,
    "end": 1170,
    "range": [
      1166,
      1170
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1171,
    "end": 1172,
    "range": [
      1171,
      1172
    ]
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 1173,
    "end": 1175,
    "range": [
      1173,
      1175
    ]
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 1176,
    "end": 1178,
    "range": [
      1176,
      1178
    ]
  },
  {
    "type": "Identifier",
    "value": "b2",
    "start": 1179,
    "end": 1181,
    "range": [
      1179,
      1181
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1181,
    "end": 1182,
    "range": [
      1181,
      1182
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1183,
    "end": 1186,
    "range": [
      1183,
      1186
    ]
  },
  {
    "type": "Identifier",
    "value": "r5a3",
    "start": 1187,
    "end": 1191,
    "range": [
      1187,
      1191
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1192,
    "end": 1193,
    "range": [
      1192,
      1193
    ]
  },
  {
    "type": "Identifier",
    "value": "a3",
    "start": 1194,
    "end": 1196,
    "range": [
      1194,
      1196
    ]
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 1197,
    "end": 1199,
    "range": [
      1197,
      1199
    ]
  },
  {
    "type": "Identifier",
    "value": "b3",
    "start": 1200,
    "end": 1202,
    "range": [
      1200,
      1202
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1202,
    "end": 1203,
    "range": [
      1202,
      1203
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1204,
    "end": 1207,
    "range": [
      1204,
      1207
    ]
  },
  {
    "type": "Identifier",
    "value": "r5a4",
    "start": 1208,
    "end": 1212,
    "range": [
      1208,
      1212
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1213,
    "end": 1214,
    "range": [
      1213,
      1214
    ]
  },
  {
    "type": "Identifier",
    "value": "a4",
    "start": 1215,
    "end": 1217,
    "range": [
      1215,
      1217
    ]
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 1218,
    "end": 1220,
    "range": [
      1218,
      1220
    ]
  },
  {
    "type": "Identifier",
    "value": "b4",
    "start": 1221,
    "end": 1223,
    "range": [
      1221,
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
    "value": "var",
    "start": 1226,
    "end": 1229,
    "range": [
      1226,
      1229
    ]
  },
  {
    "type": "Identifier",
    "value": "r5b1",
    "start": 1230,
    "end": 1234,
    "range": [
      1230,
      1234
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1235,
    "end": 1236,
    "range": [
      1235,
      1236
    ]
  },
  {
    "type": "Identifier",
    "value": "b1",
    "start": 1237,
    "end": 1239,
    "range": [
      1237,
      1239
    ]
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 1240,
    "end": 1242,
    "range": [
      1240,
      1242
    ]
  },
  {
    "type": "Identifier",
    "value": "a1",
    "start": 1243,
    "end": 1245,
    "range": [
      1243,
      1245
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1245,
    "end": 1246,
    "range": [
      1245,
      1246
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1247,
    "end": 1250,
    "range": [
      1247,
      1250
    ]
  },
  {
    "type": "Identifier",
    "value": "r5b2",
    "start": 1251,
    "end": 1255,
    "range": [
      1251,
      1255
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1256,
    "end": 1257,
    "range": [
      1256,
      1257
    ]
  },
  {
    "type": "Identifier",
    "value": "b2",
    "start": 1258,
    "end": 1260,
    "range": [
      1258,
      1260
    ]
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 1261,
    "end": 1263,
    "range": [
      1261,
      1263
    ]
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 1264,
    "end": 1266,
    "range": [
      1264,
      1266
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1266,
    "end": 1267,
    "range": [
      1266,
      1267
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1268,
    "end": 1271,
    "range": [
      1268,
      1271
    ]
  },
  {
    "type": "Identifier",
    "value": "r5b3",
    "start": 1272,
    "end": 1276,
    "range": [
      1272,
      1276
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1277,
    "end": 1278,
    "range": [
      1277,
      1278
    ]
  },
  {
    "type": "Identifier",
    "value": "b3",
    "start": 1279,
    "end": 1281,
    "range": [
      1279,
      1281
    ]
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 1282,
    "end": 1284,
    "range": [
      1282,
      1284
    ]
  },
  {
    "type": "Identifier",
    "value": "a3",
    "start": 1285,
    "end": 1287,
    "range": [
      1285,
      1287
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1287,
    "end": 1288,
    "range": [
      1287,
      1288
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1289,
    "end": 1292,
    "range": [
      1289,
      1292
    ]
  },
  {
    "type": "Identifier",
    "value": "r5b4",
    "start": 1293,
    "end": 1297,
    "range": [
      1293,
      1297
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1298,
    "end": 1299,
    "range": [
      1298,
      1299
    ]
  },
  {
    "type": "Identifier",
    "value": "b4",
    "start": 1300,
    "end": 1302,
    "range": [
      1300,
      1302
    ]
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 1303,
    "end": 1305,
    "range": [
      1303,
      1305
    ]
  },
  {
    "type": "Identifier",
    "value": "a4",
    "start": 1306,
    "end": 1308,
    "range": [
      1306,
      1308
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1308,
    "end": 1309,
    "range": [
      1308,
      1309
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1326,
    "end": 1329,
    "range": [
      1326,
      1329
    ]
  },
  {
    "type": "Identifier",
    "value": "r6a1",
    "start": 1330,
    "end": 1334,
    "range": [
      1330,
      1334
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1335,
    "end": 1336,
    "range": [
      1335,
      1336
    ]
  },
  {
    "type": "Identifier",
    "value": "a1",
    "start": 1337,
    "end": 1339,
    "range": [
      1337,
      1339
    ]
  },
  {
    "type": "Punctuator",
    "value": "!=",
    "start": 1340,
    "end": 1342,
    "range": [
      1340,
      1342
    ]
  },
  {
    "type": "Identifier",
    "value": "b1",
    "start": 1343,
    "end": 1345,
    "range": [
      1343,
      1345
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1345,
    "end": 1346,
    "range": [
      1345,
      1346
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1347,
    "end": 1350,
    "range": [
      1347,
      1350
    ]
  },
  {
    "type": "Identifier",
    "value": "r6a2",
    "start": 1351,
    "end": 1355,
    "range": [
      1351,
      1355
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1356,
    "end": 1357,
    "range": [
      1356,
      1357
    ]
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 1358,
    "end": 1360,
    "range": [
      1358,
      1360
    ]
  },
  {
    "type": "Punctuator",
    "value": "!=",
    "start": 1361,
    "end": 1363,
    "range": [
      1361,
      1363
    ]
  },
  {
    "type": "Identifier",
    "value": "b2",
    "start": 1364,
    "end": 1366,
    "range": [
      1364,
      1366
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1366,
    "end": 1367,
    "range": [
      1366,
      1367
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1368,
    "end": 1371,
    "range": [
      1368,
      1371
    ]
  },
  {
    "type": "Identifier",
    "value": "r6a3",
    "start": 1372,
    "end": 1376,
    "range": [
      1372,
      1376
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1377,
    "end": 1378,
    "range": [
      1377,
      1378
    ]
  },
  {
    "type": "Identifier",
    "value": "a3",
    "start": 1379,
    "end": 1381,
    "range": [
      1379,
      1381
    ]
  },
  {
    "type": "Punctuator",
    "value": "!=",
    "start": 1382,
    "end": 1384,
    "range": [
      1382,
      1384
    ]
  },
  {
    "type": "Identifier",
    "value": "b3",
    "start": 1385,
    "end": 1387,
    "range": [
      1385,
      1387
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1387,
    "end": 1388,
    "range": [
      1387,
      1388
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1389,
    "end": 1392,
    "range": [
      1389,
      1392
    ]
  },
  {
    "type": "Identifier",
    "value": "r6a4",
    "start": 1393,
    "end": 1397,
    "range": [
      1393,
      1397
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1398,
    "end": 1399,
    "range": [
      1398,
      1399
    ]
  },
  {
    "type": "Identifier",
    "value": "a4",
    "start": 1400,
    "end": 1402,
    "range": [
      1400,
      1402
    ]
  },
  {
    "type": "Punctuator",
    "value": "!=",
    "start": 1403,
    "end": 1405,
    "range": [
      1403,
      1405
    ]
  },
  {
    "type": "Identifier",
    "value": "b4",
    "start": 1406,
    "end": 1408,
    "range": [
      1406,
      1408
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1408,
    "end": 1409,
    "range": [
      1408,
      1409
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1411,
    "end": 1414,
    "range": [
      1411,
      1414
    ]
  },
  {
    "type": "Identifier",
    "value": "r6b1",
    "start": 1415,
    "end": 1419,
    "range": [
      1415,
      1419
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1420,
    "end": 1421,
    "range": [
      1420,
      1421
    ]
  },
  {
    "type": "Identifier",
    "value": "b1",
    "start": 1422,
    "end": 1424,
    "range": [
      1422,
      1424
    ]
  },
  {
    "type": "Punctuator",
    "value": "!=",
    "start": 1425,
    "end": 1427,
    "range": [
      1425,
      1427
    ]
  },
  {
    "type": "Identifier",
    "value": "a1",
    "start": 1428,
    "end": 1430,
    "range": [
      1428,
      1430
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1430,
    "end": 1431,
    "range": [
      1430,
      1431
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1432,
    "end": 1435,
    "range": [
      1432,
      1435
    ]
  },
  {
    "type": "Identifier",
    "value": "r6b2",
    "start": 1436,
    "end": 1440,
    "range": [
      1436,
      1440
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1441,
    "end": 1442,
    "range": [
      1441,
      1442
    ]
  },
  {
    "type": "Identifier",
    "value": "b2",
    "start": 1443,
    "end": 1445,
    "range": [
      1443,
      1445
    ]
  },
  {
    "type": "Punctuator",
    "value": "!=",
    "start": 1446,
    "end": 1448,
    "range": [
      1446,
      1448
    ]
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 1449,
    "end": 1451,
    "range": [
      1449,
      1451
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1451,
    "end": 1452,
    "range": [
      1451,
      1452
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1453,
    "end": 1456,
    "range": [
      1453,
      1456
    ]
  },
  {
    "type": "Identifier",
    "value": "r6b3",
    "start": 1457,
    "end": 1461,
    "range": [
      1457,
      1461
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1462,
    "end": 1463,
    "range": [
      1462,
      1463
    ]
  },
  {
    "type": "Identifier",
    "value": "b3",
    "start": 1464,
    "end": 1466,
    "range": [
      1464,
      1466
    ]
  },
  {
    "type": "Punctuator",
    "value": "!=",
    "start": 1467,
    "end": 1469,
    "range": [
      1467,
      1469
    ]
  },
  {
    "type": "Identifier",
    "value": "a3",
    "start": 1470,
    "end": 1472,
    "range": [
      1470,
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
    "value": "var",
    "start": 1474,
    "end": 1477,
    "range": [
      1474,
      1477
    ]
  },
  {
    "type": "Identifier",
    "value": "r6b4",
    "start": 1478,
    "end": 1482,
    "range": [
      1478,
      1482
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1483,
    "end": 1484,
    "range": [
      1483,
      1484
    ]
  },
  {
    "type": "Identifier",
    "value": "b4",
    "start": 1485,
    "end": 1487,
    "range": [
      1485,
      1487
    ]
  },
  {
    "type": "Punctuator",
    "value": "!=",
    "start": 1488,
    "end": 1490,
    "range": [
      1488,
      1490
    ]
  },
  {
    "type": "Identifier",
    "value": "a4",
    "start": 1491,
    "end": 1493,
    "range": [
      1491,
      1493
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1493,
    "end": 1494,
    "range": [
      1493,
      1494
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1512,
    "end": 1515,
    "range": [
      1512,
      1515
    ]
  },
  {
    "type": "Identifier",
    "value": "r7a1",
    "start": 1516,
    "end": 1520,
    "range": [
      1516,
      1520
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1521,
    "end": 1522,
    "range": [
      1521,
      1522
    ]
  },
  {
    "type": "Identifier",
    "value": "a1",
    "start": 1523,
    "end": 1525,
    "range": [
      1523,
      1525
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1526,
    "end": 1529,
    "range": [
      1526,
      1529
    ]
  },
  {
    "type": "Identifier",
    "value": "b1",
    "start": 1530,
    "end": 1532,
    "range": [
      1530,
      1532
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1532,
    "end": 1533,
    "range": [
      1532,
      1533
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1534,
    "end": 1537,
    "range": [
      1534,
      1537
    ]
  },
  {
    "type": "Identifier",
    "value": "r7a2",
    "start": 1538,
    "end": 1542,
    "range": [
      1538,
      1542
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1543,
    "end": 1544,
    "range": [
      1543,
      1544
    ]
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 1545,
    "end": 1547,
    "range": [
      1545,
      1547
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1548,
    "end": 1551,
    "range": [
      1548,
      1551
    ]
  },
  {
    "type": "Identifier",
    "value": "b2",
    "start": 1552,
    "end": 1554,
    "range": [
      1552,
      1554
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1554,
    "end": 1555,
    "range": [
      1554,
      1555
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1556,
    "end": 1559,
    "range": [
      1556,
      1559
    ]
  },
  {
    "type": "Identifier",
    "value": "r7a3",
    "start": 1560,
    "end": 1564,
    "range": [
      1560,
      1564
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1565,
    "end": 1566,
    "range": [
      1565,
      1566
    ]
  },
  {
    "type": "Identifier",
    "value": "a3",
    "start": 1567,
    "end": 1569,
    "range": [
      1567,
      1569
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1570,
    "end": 1573,
    "range": [
      1570,
      1573
    ]
  },
  {
    "type": "Identifier",
    "value": "b3",
    "start": 1574,
    "end": 1576,
    "range": [
      1574,
      1576
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1576,
    "end": 1577,
    "range": [
      1576,
      1577
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1578,
    "end": 1581,
    "range": [
      1578,
      1581
    ]
  },
  {
    "type": "Identifier",
    "value": "r7a4",
    "start": 1582,
    "end": 1586,
    "range": [
      1582,
      1586
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1587,
    "end": 1588,
    "range": [
      1587,
      1588
    ]
  },
  {
    "type": "Identifier",
    "value": "a4",
    "start": 1589,
    "end": 1591,
    "range": [
      1589,
      1591
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1592,
    "end": 1595,
    "range": [
      1592,
      1595
    ]
  },
  {
    "type": "Identifier",
    "value": "b4",
    "start": 1596,
    "end": 1598,
    "range": [
      1596,
      1598
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1598,
    "end": 1599,
    "range": [
      1598,
      1599
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1601,
    "end": 1604,
    "range": [
      1601,
      1604
    ]
  },
  {
    "type": "Identifier",
    "value": "r7b1",
    "start": 1605,
    "end": 1609,
    "range": [
      1605,
      1609
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1610,
    "end": 1611,
    "range": [
      1610,
      1611
    ]
  },
  {
    "type": "Identifier",
    "value": "b1",
    "start": 1612,
    "end": 1614,
    "range": [
      1612,
      1614
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1615,
    "end": 1618,
    "range": [
      1615,
      1618
    ]
  },
  {
    "type": "Identifier",
    "value": "a1",
    "start": 1619,
    "end": 1621,
    "range": [
      1619,
      1621
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1621,
    "end": 1622,
    "range": [
      1621,
      1622
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1623,
    "end": 1626,
    "range": [
      1623,
      1626
    ]
  },
  {
    "type": "Identifier",
    "value": "r7b2",
    "start": 1627,
    "end": 1631,
    "range": [
      1627,
      1631
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1632,
    "end": 1633,
    "range": [
      1632,
      1633
    ]
  },
  {
    "type": "Identifier",
    "value": "b2",
    "start": 1634,
    "end": 1636,
    "range": [
      1634,
      1636
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1637,
    "end": 1640,
    "range": [
      1637,
      1640
    ]
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 1641,
    "end": 1643,
    "range": [
      1641,
      1643
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1643,
    "end": 1644,
    "range": [
      1643,
      1644
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1645,
    "end": 1648,
    "range": [
      1645,
      1648
    ]
  },
  {
    "type": "Identifier",
    "value": "r7b3",
    "start": 1649,
    "end": 1653,
    "range": [
      1649,
      1653
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1654,
    "end": 1655,
    "range": [
      1654,
      1655
    ]
  },
  {
    "type": "Identifier",
    "value": "b3",
    "start": 1656,
    "end": 1658,
    "range": [
      1656,
      1658
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1659,
    "end": 1662,
    "range": [
      1659,
      1662
    ]
  },
  {
    "type": "Identifier",
    "value": "a3",
    "start": 1663,
    "end": 1665,
    "range": [
      1663,
      1665
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1665,
    "end": 1666,
    "range": [
      1665,
      1666
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1667,
    "end": 1670,
    "range": [
      1667,
      1670
    ]
  },
  {
    "type": "Identifier",
    "value": "r7b4",
    "start": 1671,
    "end": 1675,
    "range": [
      1671,
      1675
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1676,
    "end": 1677,
    "range": [
      1676,
      1677
    ]
  },
  {
    "type": "Identifier",
    "value": "b4",
    "start": 1678,
    "end": 1680,
    "range": [
      1678,
      1680
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1681,
    "end": 1684,
    "range": [
      1681,
      1684
    ]
  },
  {
    "type": "Identifier",
    "value": "a4",
    "start": 1685,
    "end": 1687,
    "range": [
      1685,
      1687
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1687,
    "end": 1688,
    "range": [
      1687,
      1688
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1706,
    "end": 1709,
    "range": [
      1706,
      1709
    ]
  },
  {
    "type": "Identifier",
    "value": "r8a1",
    "start": 1710,
    "end": 1714,
    "range": [
      1710,
      1714
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1715,
    "end": 1716,
    "range": [
      1715,
      1716
    ]
  },
  {
    "type": "Identifier",
    "value": "a1",
    "start": 1717,
    "end": 1719,
    "range": [
      1717,
      1719
    ]
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 1720,
    "end": 1723,
    "range": [
      1720,
      1723
    ]
  },
  {
    "type": "Identifier",
    "value": "b1",
    "start": 1724,
    "end": 1726,
    "range": [
      1724,
      1726
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1726,
    "end": 1727,
    "range": [
      1726,
      1727
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1728,
    "end": 1731,
    "range": [
      1728,
      1731
    ]
  },
  {
    "type": "Identifier",
    "value": "r8a2",
    "start": 1732,
    "end": 1736,
    "range": [
      1732,
      1736
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1737,
    "end": 1738,
    "range": [
      1737,
      1738
    ]
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 1739,
    "end": 1741,
    "range": [
      1739,
      1741
    ]
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 1742,
    "end": 1745,
    "range": [
      1742,
      1745
    ]
  },
  {
    "type": "Identifier",
    "value": "b2",
    "start": 1746,
    "end": 1748,
    "range": [
      1746,
      1748
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1748,
    "end": 1749,
    "range": [
      1748,
      1749
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1750,
    "end": 1753,
    "range": [
      1750,
      1753
    ]
  },
  {
    "type": "Identifier",
    "value": "r8a3",
    "start": 1754,
    "end": 1758,
    "range": [
      1754,
      1758
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1759,
    "end": 1760,
    "range": [
      1759,
      1760
    ]
  },
  {
    "type": "Identifier",
    "value": "a3",
    "start": 1761,
    "end": 1763,
    "range": [
      1761,
      1763
    ]
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 1764,
    "end": 1767,
    "range": [
      1764,
      1767
    ]
  },
  {
    "type": "Identifier",
    "value": "b3",
    "start": 1768,
    "end": 1770,
    "range": [
      1768,
      1770
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1770,
    "end": 1771,
    "range": [
      1770,
      1771
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1772,
    "end": 1775,
    "range": [
      1772,
      1775
    ]
  },
  {
    "type": "Identifier",
    "value": "r8a4",
    "start": 1776,
    "end": 1780,
    "range": [
      1776,
      1780
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1781,
    "end": 1782,
    "range": [
      1781,
      1782
    ]
  },
  {
    "type": "Identifier",
    "value": "a4",
    "start": 1783,
    "end": 1785,
    "range": [
      1783,
      1785
    ]
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 1786,
    "end": 1789,
    "range": [
      1786,
      1789
    ]
  },
  {
    "type": "Identifier",
    "value": "b4",
    "start": 1790,
    "end": 1792,
    "range": [
      1790,
      1792
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1792,
    "end": 1793,
    "range": [
      1792,
      1793
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1795,
    "end": 1798,
    "range": [
      1795,
      1798
    ]
  },
  {
    "type": "Identifier",
    "value": "r8b1",
    "start": 1799,
    "end": 1803,
    "range": [
      1799,
      1803
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1804,
    "end": 1805,
    "range": [
      1804,
      1805
    ]
  },
  {
    "type": "Identifier",
    "value": "b1",
    "start": 1806,
    "end": 1808,
    "range": [
      1806,
      1808
    ]
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 1809,
    "end": 1812,
    "range": [
      1809,
      1812
    ]
  },
  {
    "type": "Identifier",
    "value": "a1",
    "start": 1813,
    "end": 1815,
    "range": [
      1813,
      1815
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1815,
    "end": 1816,
    "range": [
      1815,
      1816
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1817,
    "end": 1820,
    "range": [
      1817,
      1820
    ]
  },
  {
    "type": "Identifier",
    "value": "r8b2",
    "start": 1821,
    "end": 1825,
    "range": [
      1821,
      1825
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1826,
    "end": 1827,
    "range": [
      1826,
      1827
    ]
  },
  {
    "type": "Identifier",
    "value": "b2",
    "start": 1828,
    "end": 1830,
    "range": [
      1828,
      1830
    ]
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 1831,
    "end": 1834,
    "range": [
      1831,
      1834
    ]
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 1835,
    "end": 1837,
    "range": [
      1835,
      1837
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1837,
    "end": 1838,
    "range": [
      1837,
      1838
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1839,
    "end": 1842,
    "range": [
      1839,
      1842
    ]
  },
  {
    "type": "Identifier",
    "value": "r8b3",
    "start": 1843,
    "end": 1847,
    "range": [
      1843,
      1847
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1848,
    "end": 1849,
    "range": [
      1848,
      1849
    ]
  },
  {
    "type": "Identifier",
    "value": "b3",
    "start": 1850,
    "end": 1852,
    "range": [
      1850,
      1852
    ]
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 1853,
    "end": 1856,
    "range": [
      1853,
      1856
    ]
  },
  {
    "type": "Identifier",
    "value": "a3",
    "start": 1857,
    "end": 1859,
    "range": [
      1857,
      1859
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1859,
    "end": 1860,
    "range": [
      1859,
      1860
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1861,
    "end": 1864,
    "range": [
      1861,
      1864
    ]
  },
  {
    "type": "Identifier",
    "value": "r8b4",
    "start": 1865,
    "end": 1869,
    "range": [
      1865,
      1869
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1870,
    "end": 1871,
    "range": [
      1870,
      1871
    ]
  },
  {
    "type": "Identifier",
    "value": "b4",
    "start": 1872,
    "end": 1874,
    "range": [
      1872,
      1874
    ]
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 1875,
    "end": 1878,
    "range": [
      1875,
      1878
    ]
  },
  {
    "type": "Identifier",
    "value": "a4",
    "start": 1879,
    "end": 1881,
    "range": [
      1879,
      1881
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1881,
    "end": 1882,
    "range": [
      1881,
      1882
    ]
  }
]
```
