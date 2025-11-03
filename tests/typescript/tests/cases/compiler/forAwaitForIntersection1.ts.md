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
        "name": "Stream1",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 12
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T_Sync",
              "optional": false,
              "typeAnnotation": null,
              "start": 13,
              "end": 19
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 13,
            "end": 19
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T_Async",
              "optional": false,
              "typeAnnotation": null,
              "start": 21,
              "end": 28
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 21,
            "end": 28
          }
        ],
        "start": 12,
        "end": 29
      },
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Iterable",
              "optional": false,
              "typeAnnotation": null,
              "start": 32,
              "end": 40
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T_Sync",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 41,
                    "end": 47
                  },
                  "typeArguments": null,
                  "start": 41,
                  "end": 47
                }
              ],
              "start": 40,
              "end": 48
            },
            "start": 32,
            "end": 48
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "AsyncIterable",
              "optional": false,
              "typeAnnotation": null,
              "start": 51,
              "end": 64
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T_Async",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 65,
                    "end": 72
                  },
                  "typeArguments": null,
                  "start": 65,
                  "end": 72
                }
              ],
              "start": 64,
              "end": 73
            },
            "start": 51,
            "end": 73
          }
        ],
        "start": 32,
        "end": 73
      },
      "declare": false,
      "start": 0,
      "end": 74
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A1",
        "optional": false,
        "typeAnnotation": null,
        "start": 82,
        "end": 84
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 85,
        "end": 87
      },
      "abstract": false,
      "declare": false,
      "start": 76,
      "end": 87
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B1",
        "optional": false,
        "typeAnnotation": null,
        "start": 94,
        "end": 96
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 97,
        "end": 99
      },
      "abstract": false,
      "declare": false,
      "start": 88,
      "end": 99
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "loop1",
        "optional": false,
        "typeAnnotation": null,
        "start": 116,
        "end": 121
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "stream",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Stream1",
                "optional": false,
                "typeAnnotation": null,
                "start": 130,
                "end": 137
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 138,
                      "end": 140
                    },
                    "typeArguments": null,
                    "start": 138,
                    "end": 140
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "B1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 142,
                      "end": 144
                    },
                    "typeArguments": null,
                    "start": 142,
                    "end": 144
                  }
                ],
                "start": 137,
                "end": 145
              },
              "start": 130,
              "end": 145
            },
            "start": 128,
            "end": 145
          },
          "start": 122,
          "end": 145
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ForOfStatement",
            "await": true,
            "left": {
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
                    "typeAnnotation": null,
                    "start": 168,
                    "end": 169
                  },
                  "init": null,
                  "definite": false,
                  "start": 168,
                  "end": 169
                }
              ],
              "declare": false,
              "start": 162,
              "end": 169
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "stream",
              "optional": false,
              "typeAnnotation": null,
              "start": 173,
              "end": 179
            },
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 181,
              "end": 183
            },
            "start": 151,
            "end": 183
          }
        ],
        "start": 147,
        "end": 185
      },
      "expression": false,
      "start": 101,
      "end": 185
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Stream2",
        "optional": false,
        "typeAnnotation": null,
        "start": 192,
        "end": 199
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T_Sync",
              "optional": false,
              "typeAnnotation": null,
              "start": 200,
              "end": 206
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 200,
            "end": 206
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T_Async",
              "optional": false,
              "typeAnnotation": null,
              "start": 208,
              "end": 215
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 208,
            "end": 215
          }
        ],
        "start": 199,
        "end": 216
      },
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Iterable",
              "optional": false,
              "typeAnnotation": null,
              "start": 219,
              "end": 227
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T_Sync",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 228,
                    "end": 234
                  },
                  "typeArguments": null,
                  "start": 228,
                  "end": 234
                }
              ],
              "start": 227,
              "end": 235
            },
            "start": 219,
            "end": 235
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "AsyncIterable",
              "optional": false,
              "typeAnnotation": null,
              "start": 238,
              "end": 251
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T_Async",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 252,
                    "end": 259
                  },
                  "typeArguments": null,
                  "start": 252,
                  "end": 259
                }
              ],
              "start": 251,
              "end": 260
            },
            "start": 238,
            "end": 260
          }
        ],
        "start": 219,
        "end": 260
      },
      "declare": false,
      "start": 187,
      "end": 261
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A2",
        "optional": false,
        "typeAnnotation": null,
        "start": 269,
        "end": 271
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 272,
        "end": 274
      },
      "abstract": false,
      "declare": false,
      "start": 263,
      "end": 274
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B2",
        "optional": false,
        "typeAnnotation": null,
        "start": 281,
        "end": 283
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 284,
        "end": 286
      },
      "abstract": false,
      "declare": false,
      "start": 275,
      "end": 286
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "loop2",
        "optional": false,
        "typeAnnotation": null,
        "start": 303,
        "end": 308
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "stream",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Stream2",
                "optional": false,
                "typeAnnotation": null,
                "start": 317,
                "end": 324
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 325,
                      "end": 327
                    },
                    "typeArguments": null,
                    "start": 325,
                    "end": 327
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "B2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 329,
                      "end": 331
                    },
                    "typeArguments": null,
                    "start": 329,
                    "end": 331
                  }
                ],
                "start": 324,
                "end": 332
              },
              "start": 317,
              "end": 332
            },
            "start": 315,
            "end": 332
          },
          "start": 309,
          "end": 332
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ForOfStatement",
            "await": false,
            "left": {
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
                    "typeAnnotation": null,
                    "start": 349,
                    "end": 350
                  },
                  "init": null,
                  "definite": false,
                  "start": 349,
                  "end": 350
                }
              ],
              "declare": false,
              "start": 343,
              "end": 350
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "stream",
              "optional": false,
              "typeAnnotation": null,
              "start": 354,
              "end": 360
            },
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 362,
              "end": 364
            },
            "start": 338,
            "end": 364
          }
        ],
        "start": 334,
        "end": 366
      },
      "expression": false,
      "start": 288,
      "end": 366
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Stream3",
        "optional": false,
        "typeAnnotation": null,
        "start": 373,
        "end": 380
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T_Sync",
              "optional": false,
              "typeAnnotation": null,
              "start": 381,
              "end": 387
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 381,
            "end": 387
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T_Async",
              "optional": false,
              "typeAnnotation": null,
              "start": 389,
              "end": 396
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 389,
            "end": 396
          }
        ],
        "start": 380,
        "end": 397
      },
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Iterable",
              "optional": false,
              "typeAnnotation": null,
              "start": 400,
              "end": 408
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T_Sync",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 409,
                    "end": 415
                  },
                  "typeArguments": null,
                  "start": 409,
                  "end": 415
                }
              ],
              "start": 408,
              "end": 416
            },
            "start": 400,
            "end": 416
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "AsyncIterable",
              "optional": false,
              "typeAnnotation": null,
              "start": 419,
              "end": 432
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T_Async",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 433,
                    "end": 440
                  },
                  "typeArguments": null,
                  "start": 433,
                  "end": 440
                }
              ],
              "start": 432,
              "end": 441
            },
            "start": 419,
            "end": 441
          }
        ],
        "start": 400,
        "end": 441
      },
      "declare": false,
      "start": 368,
      "end": 442
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A3",
        "optional": false,
        "typeAnnotation": null,
        "start": 450,
        "end": 452
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 453,
        "end": 455
      },
      "abstract": false,
      "declare": false,
      "start": 444,
      "end": 455
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B3",
        "optional": false,
        "typeAnnotation": null,
        "start": 462,
        "end": 464
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 465,
        "end": 467
      },
      "abstract": false,
      "declare": false,
      "start": 456,
      "end": 467
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "loop3",
        "optional": false,
        "typeAnnotation": null,
        "start": 484,
        "end": 489
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "stream",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Stream3",
                "optional": false,
                "typeAnnotation": null,
                "start": 498,
                "end": 505
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A3",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 506,
                      "end": 508
                    },
                    "typeArguments": null,
                    "start": 506,
                    "end": 508
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "B3",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 510,
                      "end": 512
                    },
                    "typeArguments": null,
                    "start": 510,
                    "end": 512
                  }
                ],
                "start": 505,
                "end": 513
              },
              "start": 498,
              "end": 513
            },
            "start": 496,
            "end": 513
          },
          "start": 490,
          "end": 513
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ForOfStatement",
            "await": true,
            "left": {
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
                    "typeAnnotation": null,
                    "start": 536,
                    "end": 537
                  },
                  "init": null,
                  "definite": false,
                  "start": 536,
                  "end": 537
                }
              ],
              "declare": false,
              "start": 530,
              "end": 537
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "stream",
              "optional": false,
              "typeAnnotation": null,
              "start": 541,
              "end": 547
            },
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 549,
              "end": 551
            },
            "start": 519,
            "end": 551
          },
          {
            "type": "ForOfStatement",
            "await": false,
            "left": {
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
                    "typeAnnotation": null,
                    "start": 566,
                    "end": 567
                  },
                  "init": null,
                  "definite": false,
                  "start": 566,
                  "end": 567
                }
              ],
              "declare": false,
              "start": 560,
              "end": 567
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "stream",
              "optional": false,
              "typeAnnotation": null,
              "start": 571,
              "end": 577
            },
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 579,
              "end": 581
            },
            "start": 555,
            "end": 581
          }
        ],
        "start": 515,
        "end": 583
      },
      "expression": false,
      "start": 469,
      "end": 583
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Stream4",
        "optional": false,
        "typeAnnotation": null,
        "start": 590,
        "end": 597
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T_Sync",
              "optional": false,
              "typeAnnotation": null,
              "start": 598,
              "end": 604
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 598,
            "end": 604
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T_Async",
              "optional": false,
              "typeAnnotation": null,
              "start": 606,
              "end": 613
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 606,
            "end": 613
          }
        ],
        "start": 597,
        "end": 614
      },
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Iterable",
              "optional": false,
              "typeAnnotation": null,
              "start": 617,
              "end": 625
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T_Sync",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 626,
                    "end": 632
                  },
                  "typeArguments": null,
                  "start": 626,
                  "end": 632
                }
              ],
              "start": 625,
              "end": 633
            },
            "start": 617,
            "end": 633
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "AsyncIterable",
              "optional": false,
              "typeAnnotation": null,
              "start": 636,
              "end": 649
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T_Async",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 650,
                    "end": 657
                  },
                  "typeArguments": null,
                  "start": 650,
                  "end": 657
                }
              ],
              "start": 649,
              "end": 658
            },
            "start": 636,
            "end": 658
          }
        ],
        "start": 617,
        "end": 658
      },
      "declare": false,
      "start": 585,
      "end": 659
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A4",
        "optional": false,
        "typeAnnotation": null,
        "start": 667,
        "end": 669
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 670,
        "end": 672
      },
      "abstract": false,
      "declare": false,
      "start": 661,
      "end": 672
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B4",
        "optional": false,
        "typeAnnotation": null,
        "start": 679,
        "end": 681
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 682,
        "end": 684
      },
      "abstract": false,
      "declare": false,
      "start": 673,
      "end": 684
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "loop4",
        "optional": false,
        "typeAnnotation": null,
        "start": 790,
        "end": 795
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "stream",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Stream4",
                "optional": false,
                "typeAnnotation": null,
                "start": 804,
                "end": 811
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A4",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 812,
                      "end": 814
                    },
                    "typeArguments": null,
                    "start": 812,
                    "end": 814
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "B4",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 816,
                      "end": 818
                    },
                    "typeArguments": null,
                    "start": 816,
                    "end": 818
                  }
                ],
                "start": 811,
                "end": 819
              },
              "start": 804,
              "end": 819
            },
            "start": 802,
            "end": 819
          },
          "start": 796,
          "end": 819
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ForOfStatement",
            "await": false,
            "left": {
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
                    "typeAnnotation": null,
                    "start": 836,
                    "end": 837
                  },
                  "init": null,
                  "definite": false,
                  "start": 836,
                  "end": 837
                }
              ],
              "declare": false,
              "start": 830,
              "end": 837
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "stream",
              "optional": false,
              "typeAnnotation": null,
              "start": 841,
              "end": 847
            },
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 849,
              "end": 851
            },
            "start": 825,
            "end": 851
          },
          {
            "type": "ForOfStatement",
            "await": true,
            "left": {
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
                    "typeAnnotation": null,
                    "start": 872,
                    "end": 873
                  },
                  "init": null,
                  "definite": false,
                  "start": 872,
                  "end": 873
                }
              ],
              "declare": false,
              "start": 866,
              "end": 873
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "stream",
              "optional": false,
              "typeAnnotation": null,
              "start": 877,
              "end": 883
            },
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 885,
              "end": 887
            },
            "start": 855,
            "end": 887
          }
        ],
        "start": 821,
        "end": 889
      },
      "expression": false,
      "start": 775,
      "end": 889
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 889
}
```
