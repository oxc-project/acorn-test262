__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
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
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
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
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 19,
                      "end": 20
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "types": [
                          {
                            "type": "TSStringKeyword",
                            "start": 22,
                            "end": 28
                          },
                          {
                            "type": "TSNumberKeyword",
                            "start": 31,
                            "end": 37
                          }
                        ],
                        "start": 22,
                        "end": 37
                      },
                      "start": 20,
                      "end": 37
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 19,
                    "end": 37
                  }
                ],
                "start": 17,
                "end": 39
              },
              "start": 15,
              "end": 39
            },
            "start": 14,
            "end": 39
          },
          "init": null,
          "definite": false,
          "start": 14,
          "end": 39
        }
      ],
      "declare": true,
      "start": 0,
      "end": 40
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
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 60,
                      "end": 61
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "types": [
                          {
                            "type": "TSStringKeyword",
                            "start": 64,
                            "end": 70
                          },
                          {
                            "type": "TSNumberKeyword",
                            "start": 73,
                            "end": 79
                          }
                        ],
                        "start": 64,
                        "end": 79
                      },
                      "start": 62,
                      "end": 79
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 60,
                    "end": 79
                  }
                ],
                "start": 58,
                "end": 81
              },
              "start": 56,
              "end": 81
            },
            "start": 55,
            "end": 81
          },
          "init": null,
          "definite": false,
          "start": 55,
          "end": 81
        }
      ],
      "declare": true,
      "start": 41,
      "end": 82
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
            "name": "c",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 102,
                      "end": 103
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "types": [
                          {
                            "type": "TSStringKeyword",
                            "start": 106,
                            "end": 112
                          },
                          {
                            "type": "TSNumberKeyword",
                            "start": 115,
                            "end": 121
                          },
                          {
                            "type": "TSUndefinedKeyword",
                            "start": 124,
                            "end": 133
                          }
                        ],
                        "start": 106,
                        "end": 133
                      },
                      "start": 104,
                      "end": 133
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 102,
                    "end": 133
                  }
                ],
                "start": 100,
                "end": 135
              },
              "start": 98,
              "end": 135
            },
            "start": 97,
            "end": 135
          },
          "init": null,
          "definite": false,
          "start": 97,
          "end": 135
        }
      ],
      "declare": true,
      "start": 83,
      "end": 136
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
            "name": "v_a",
            "optional": false,
            "typeAnnotation": null,
            "start": 144,
            "end": 147
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 155,
                  "end": 156
                },
                "start": 152,
                "end": 156
              }
            ],
            "start": 150,
            "end": 158
          },
          "definite": false,
          "start": 144,
          "end": 158
        }
      ],
      "declare": false,
      "start": 138,
      "end": 159
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
            "name": "v_b",
            "optional": false,
            "typeAnnotation": null,
            "start": 166,
            "end": 169
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 177,
                  "end": 178
                },
                "start": 174,
                "end": 178
              }
            ],
            "start": 172,
            "end": 180
          },
          "definite": false,
          "start": 166,
          "end": 180
        }
      ],
      "declare": false,
      "start": 160,
      "end": 181
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
            "name": "v_c",
            "optional": false,
            "typeAnnotation": null,
            "start": 188,
            "end": 191
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 199,
                  "end": 200
                },
                "start": 196,
                "end": 200
              }
            ],
            "start": 194,
            "end": 202
          },
          "definite": false,
          "start": 188,
          "end": 202
        }
      ],
      "declare": false,
      "start": 182,
      "end": 203
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
            "name": "v_ab",
            "optional": false,
            "typeAnnotation": null,
            "start": 210,
            "end": 214
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 222,
                  "end": 223
                },
                "start": 219,
                "end": 223
              },
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 228,
                  "end": 229
                },
                "start": 225,
                "end": 229
              }
            ],
            "start": 217,
            "end": 231
          },
          "definite": false,
          "start": 210,
          "end": 231
        }
      ],
      "declare": false,
      "start": 204,
      "end": 232
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
            "name": "v_ac",
            "optional": false,
            "typeAnnotation": null,
            "start": 239,
            "end": 243
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 251,
                  "end": 252
                },
                "start": 248,
                "end": 252
              },
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 257,
                  "end": 258
                },
                "start": 254,
                "end": 258
              }
            ],
            "start": 246,
            "end": 260
          },
          "definite": false,
          "start": 239,
          "end": 260
        }
      ],
      "declare": false,
      "start": 233,
      "end": 261
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
            "name": "v_ba",
            "optional": false,
            "typeAnnotation": null,
            "start": 268,
            "end": 272
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 280,
                  "end": 281
                },
                "start": 277,
                "end": 281
              },
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 286,
                  "end": 287
                },
                "start": 283,
                "end": 287
              }
            ],
            "start": 275,
            "end": 289
          },
          "definite": false,
          "start": 268,
          "end": 289
        }
      ],
      "declare": false,
      "start": 262,
      "end": 290
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
            "name": "v_bc",
            "optional": false,
            "typeAnnotation": null,
            "start": 297,
            "end": 301
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 309,
                  "end": 310
                },
                "start": 306,
                "end": 310
              },
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 315,
                  "end": 316
                },
                "start": 312,
                "end": 316
              }
            ],
            "start": 304,
            "end": 318
          },
          "definite": false,
          "start": 297,
          "end": 318
        }
      ],
      "declare": false,
      "start": 291,
      "end": 319
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
            "name": "v_ca",
            "optional": false,
            "typeAnnotation": null,
            "start": 326,
            "end": 330
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 338,
                  "end": 339
                },
                "start": 335,
                "end": 339
              },
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 344,
                  "end": 345
                },
                "start": 341,
                "end": 345
              }
            ],
            "start": 333,
            "end": 347
          },
          "definite": false,
          "start": 326,
          "end": 347
        }
      ],
      "declare": false,
      "start": 320,
      "end": 348
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
            "name": "v_cb",
            "optional": false,
            "typeAnnotation": null,
            "start": 355,
            "end": 359
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 367,
                  "end": 368
                },
                "start": 364,
                "end": 368
              },
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 373,
                  "end": 374
                },
                "start": 370,
                "end": 374
              }
            ],
            "start": 362,
            "end": 376
          },
          "definite": false,
          "start": 355,
          "end": 376
        }
      ],
      "declare": false,
      "start": 349,
      "end": 377
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
            "name": "v_abc",
            "optional": false,
            "typeAnnotation": null,
            "start": 384,
            "end": 389
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 397,
                  "end": 398
                },
                "start": 394,
                "end": 398
              },
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 403,
                  "end": 404
                },
                "start": 400,
                "end": 404
              },
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 409,
                  "end": 410
                },
                "start": 406,
                "end": 410
              }
            ],
            "start": 392,
            "end": 412
          },
          "definite": false,
          "start": 384,
          "end": 412
        }
      ],
      "declare": false,
      "start": 378,
      "end": 413
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
            "name": "v_acb",
            "optional": false,
            "typeAnnotation": null,
            "start": 420,
            "end": 425
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 433,
                  "end": 434
                },
                "start": 430,
                "end": 434
              },
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 439,
                  "end": 440
                },
                "start": 436,
                "end": 440
              },
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 445,
                  "end": 446
                },
                "start": 442,
                "end": 446
              }
            ],
            "start": 428,
            "end": 448
          },
          "definite": false,
          "start": 420,
          "end": 448
        }
      ],
      "declare": false,
      "start": 414,
      "end": 449
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
            "name": "v_bac",
            "optional": false,
            "typeAnnotation": null,
            "start": 456,
            "end": 461
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 469,
                  "end": 470
                },
                "start": 466,
                "end": 470
              },
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 475,
                  "end": 476
                },
                "start": 472,
                "end": 476
              },
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 481,
                  "end": 482
                },
                "start": 478,
                "end": 482
              }
            ],
            "start": 464,
            "end": 484
          },
          "definite": false,
          "start": 456,
          "end": 484
        }
      ],
      "declare": false,
      "start": 450,
      "end": 485
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
            "name": "v_bca",
            "optional": false,
            "typeAnnotation": null,
            "start": 492,
            "end": 497
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 505,
                  "end": 506
                },
                "start": 502,
                "end": 506
              },
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 511,
                  "end": 512
                },
                "start": 508,
                "end": 512
              },
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 517,
                  "end": 518
                },
                "start": 514,
                "end": 518
              }
            ],
            "start": 500,
            "end": 520
          },
          "definite": false,
          "start": 492,
          "end": 520
        }
      ],
      "declare": false,
      "start": 486,
      "end": 521
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
            "name": "v_cab",
            "optional": false,
            "typeAnnotation": null,
            "start": 528,
            "end": 533
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 541,
                  "end": 542
                },
                "start": 538,
                "end": 542
              },
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 547,
                  "end": 548
                },
                "start": 544,
                "end": 548
              },
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 553,
                  "end": 554
                },
                "start": 550,
                "end": 554
              }
            ],
            "start": 536,
            "end": 556
          },
          "definite": false,
          "start": 528,
          "end": 556
        }
      ],
      "declare": false,
      "start": 522,
      "end": 557
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
            "name": "v_cba",
            "optional": false,
            "typeAnnotation": null,
            "start": 564,
            "end": 569
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 577,
                  "end": 578
                },
                "start": 574,
                "end": 578
              },
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 583,
                  "end": 584
                },
                "start": 580,
                "end": 584
              },
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 589,
                  "end": 590
                },
                "start": 586,
                "end": 590
              }
            ],
            "start": 572,
            "end": 592
          },
          "definite": false,
          "start": 564,
          "end": 592
        }
      ],
      "declare": false,
      "start": 558,
      "end": 593
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 593
}
```
