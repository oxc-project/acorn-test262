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
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 68,
        "end": 71
      },
      "generator": false,
      "async": false,
      "declare": false,
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
              "start": 72,
              "end": 73
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 72,
            "end": 73
          }
        ],
        "start": 71,
        "end": 74
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "t",
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
                "start": 78,
                "end": 79
              },
              "typeArguments": null,
              "start": 78,
              "end": 79
            },
            "start": 76,
            "end": 79
          },
          "start": 75,
          "end": 79
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
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 94,
                      "end": 97
                    },
                    "start": 92,
                    "end": 97
                  },
                  "start": 91,
                  "end": 97
                },
                "init": null,
                "definite": false,
                "start": 91,
                "end": 97
              }
            ],
            "declare": false,
            "start": 87,
            "end": 98
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
                      "type": "TSBooleanKeyword",
                      "start": 110,
                      "end": 117
                    },
                    "start": 108,
                    "end": 117
                  },
                  "start": 107,
                  "end": 117
                },
                "init": null,
                "definite": false,
                "start": 107,
                "end": 117
              }
            ],
            "declare": false,
            "start": 103,
            "end": 118
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
                      "type": "TSNumberKeyword",
                      "start": 130,
                      "end": 136
                    },
                    "start": 128,
                    "end": 136
                  },
                  "start": 127,
                  "end": 136
                },
                "init": null,
                "definite": false,
                "start": 127,
                "end": 136
              }
            ],
            "declare": false,
            "start": 123,
            "end": 137
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
                      "type": "TSStringKeyword",
                      "start": 149,
                      "end": 155
                    },
                    "start": 147,
                    "end": 155
                  },
                  "start": 146,
                  "end": 155
                },
                "init": null,
                "definite": false,
                "start": 146,
                "end": 155
              }
            ],
            "declare": false,
            "start": 142,
            "end": 156
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
                      "members": [],
                      "start": 168,
                      "end": 170
                    },
                    "start": 166,
                    "end": 170
                  },
                  "start": 165,
                  "end": 170
                },
                "init": null,
                "definite": false,
                "start": 165,
                "end": 170
              }
            ],
            "declare": false,
            "start": 161,
            "end": 171
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
                  "start": 181,
                  "end": 185
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 188,
                    "end": 189
                  },
                  "operator": "*",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 192,
                    "end": 193
                  },
                  "start": 188,
                  "end": 193
                },
                "definite": false,
                "start": 181,
                "end": 193
              }
            ],
            "declare": false,
            "start": 177,
            "end": 194
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
                  "start": 203,
                  "end": 207
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 210,
                    "end": 211
                  },
                  "operator": "/",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 214,
                    "end": 215
                  },
                  "start": 210,
                  "end": 215
                },
                "definite": false,
                "start": 203,
                "end": 215
              }
            ],
            "declare": false,
            "start": 199,
            "end": 216
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
                  "start": 225,
                  "end": 229
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 232,
                    "end": 233
                  },
                  "operator": "%",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 236,
                    "end": 237
                  },
                  "start": 232,
                  "end": 237
                },
                "definite": false,
                "start": 225,
                "end": 237
              }
            ],
            "declare": false,
            "start": 221,
            "end": 238
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
                  "start": 247,
                  "end": 251
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 254,
                    "end": 255
                  },
                  "operator": "-",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 258,
                    "end": 259
                  },
                  "start": 254,
                  "end": 259
                },
                "definite": false,
                "start": 247,
                "end": 259
              }
            ],
            "declare": false,
            "start": 243,
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
                  "name": "r1a5",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 269,
                  "end": 273
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 276,
                    "end": 277
                  },
                  "operator": "<<",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 281,
                    "end": 282
                  },
                  "start": 276,
                  "end": 282
                },
                "definite": false,
                "start": 269,
                "end": 282
              }
            ],
            "declare": false,
            "start": 265,
            "end": 283
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
                  "name": "r1a6",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 292,
                  "end": 296
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 299,
                    "end": 300
                  },
                  "operator": ">>",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 304,
                    "end": 305
                  },
                  "start": 299,
                  "end": 305
                },
                "definite": false,
                "start": 292,
                "end": 305
              }
            ],
            "declare": false,
            "start": 288,
            "end": 306
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
                  "name": "r1a7",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 315,
                  "end": 319
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 322,
                    "end": 323
                  },
                  "operator": ">>>",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 328,
                    "end": 329
                  },
                  "start": 322,
                  "end": 329
                },
                "definite": false,
                "start": 315,
                "end": 329
              }
            ],
            "declare": false,
            "start": 311,
            "end": 330
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
                  "name": "r1a8",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 339,
                  "end": 343
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 346,
                    "end": 347
                  },
                  "operator": "&",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 350,
                    "end": 351
                  },
                  "start": 346,
                  "end": 351
                },
                "definite": false,
                "start": 339,
                "end": 351
              }
            ],
            "declare": false,
            "start": 335,
            "end": 352
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
                  "name": "r1a9",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 361,
                  "end": 365
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 368,
                    "end": 369
                  },
                  "operator": "^",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 372,
                    "end": 373
                  },
                  "start": 368,
                  "end": 373
                },
                "definite": false,
                "start": 361,
                "end": 373
              }
            ],
            "declare": false,
            "start": 357,
            "end": 374
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
                  "name": "r1a10",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 383,
                  "end": 388
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 391,
                    "end": 392
                  },
                  "operator": "|",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 395,
                    "end": 396
                  },
                  "start": 391,
                  "end": 396
                },
                "definite": false,
                "start": 383,
                "end": 396
              }
            ],
            "declare": false,
            "start": 379,
            "end": 397
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
                  "start": 407,
                  "end": 411
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 414,
                    "end": 415
                  },
                  "operator": "*",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 418,
                    "end": 419
                  },
                  "start": 414,
                  "end": 419
                },
                "definite": false,
                "start": 407,
                "end": 419
              }
            ],
            "declare": false,
            "start": 403,
            "end": 420
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
                  "start": 429,
                  "end": 433
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 436,
                    "end": 437
                  },
                  "operator": "/",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 440,
                    "end": 441
                  },
                  "start": 436,
                  "end": 441
                },
                "definite": false,
                "start": 429,
                "end": 441
              }
            ],
            "declare": false,
            "start": 425,
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
                  "name": "r2a3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 451,
                  "end": 455
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 458,
                    "end": 459
                  },
                  "operator": "%",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 462,
                    "end": 463
                  },
                  "start": 458,
                  "end": 463
                },
                "definite": false,
                "start": 451,
                "end": 463
              }
            ],
            "declare": false,
            "start": 447,
            "end": 464
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
                  "start": 473,
                  "end": 477
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 480,
                    "end": 481
                  },
                  "operator": "-",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 484,
                    "end": 485
                  },
                  "start": 480,
                  "end": 485
                },
                "definite": false,
                "start": 473,
                "end": 485
              }
            ],
            "declare": false,
            "start": 469,
            "end": 486
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
                  "name": "r2a5",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 495,
                  "end": 499
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 502,
                    "end": 503
                  },
                  "operator": "<<",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 507,
                    "end": 508
                  },
                  "start": 502,
                  "end": 508
                },
                "definite": false,
                "start": 495,
                "end": 508
              }
            ],
            "declare": false,
            "start": 491,
            "end": 509
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
                  "name": "r2a6",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 518,
                  "end": 522
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 525,
                    "end": 526
                  },
                  "operator": ">>",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 530,
                    "end": 531
                  },
                  "start": 525,
                  "end": 531
                },
                "definite": false,
                "start": 518,
                "end": 531
              }
            ],
            "declare": false,
            "start": 514,
            "end": 532
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
                  "name": "r2a7",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 541,
                  "end": 545
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 548,
                    "end": 549
                  },
                  "operator": ">>>",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 554,
                    "end": 555
                  },
                  "start": 548,
                  "end": 555
                },
                "definite": false,
                "start": 541,
                "end": 555
              }
            ],
            "declare": false,
            "start": 537,
            "end": 556
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
                  "name": "r2a8",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 565,
                  "end": 569
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 572,
                    "end": 573
                  },
                  "operator": "&",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 576,
                    "end": 577
                  },
                  "start": 572,
                  "end": 577
                },
                "definite": false,
                "start": 565,
                "end": 577
              }
            ],
            "declare": false,
            "start": 561,
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
                  "name": "r2a9",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 587,
                  "end": 591
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 594,
                    "end": 595
                  },
                  "operator": "^",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 598,
                    "end": 599
                  },
                  "start": 594,
                  "end": 599
                },
                "definite": false,
                "start": 587,
                "end": 599
              }
            ],
            "declare": false,
            "start": 583,
            "end": 600
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
                  "name": "r2a10",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 609,
                  "end": 614
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 617,
                    "end": 618
                  },
                  "operator": "|",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 621,
                    "end": 622
                  },
                  "start": 617,
                  "end": 622
                },
                "definite": false,
                "start": 609,
                "end": 622
              }
            ],
            "declare": false,
            "start": 605,
            "end": 623
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
                  "start": 633,
                  "end": 637
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 640,
                    "end": 641
                  },
                  "operator": "*",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 644,
                    "end": 645
                  },
                  "start": 640,
                  "end": 645
                },
                "definite": false,
                "start": 633,
                "end": 645
              }
            ],
            "declare": false,
            "start": 629,
            "end": 646
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
                  "start": 655,
                  "end": 659
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 662,
                    "end": 663
                  },
                  "operator": "/",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 666,
                    "end": 667
                  },
                  "start": 662,
                  "end": 667
                },
                "definite": false,
                "start": 655,
                "end": 667
              }
            ],
            "declare": false,
            "start": 651,
            "end": 668
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
                  "start": 677,
                  "end": 681
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 684,
                    "end": 685
                  },
                  "operator": "%",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 688,
                    "end": 689
                  },
                  "start": 684,
                  "end": 689
                },
                "definite": false,
                "start": 677,
                "end": 689
              }
            ],
            "declare": false,
            "start": 673,
            "end": 690
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
                  "start": 699,
                  "end": 703
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 706,
                    "end": 707
                  },
                  "operator": "-",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 710,
                    "end": 711
                  },
                  "start": 706,
                  "end": 711
                },
                "definite": false,
                "start": 699,
                "end": 711
              }
            ],
            "declare": false,
            "start": 695,
            "end": 712
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
                  "name": "r1b5",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 721,
                  "end": 725
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 728,
                    "end": 729
                  },
                  "operator": "<<",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 733,
                    "end": 734
                  },
                  "start": 728,
                  "end": 734
                },
                "definite": false,
                "start": 721,
                "end": 734
              }
            ],
            "declare": false,
            "start": 717,
            "end": 735
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
                  "name": "r1b6",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 744,
                  "end": 748
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 751,
                    "end": 752
                  },
                  "operator": ">>",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 756,
                    "end": 757
                  },
                  "start": 751,
                  "end": 757
                },
                "definite": false,
                "start": 744,
                "end": 757
              }
            ],
            "declare": false,
            "start": 740,
            "end": 758
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
                  "name": "r1b7",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 767,
                  "end": 771
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 774,
                    "end": 775
                  },
                  "operator": ">>>",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 780,
                    "end": 781
                  },
                  "start": 774,
                  "end": 781
                },
                "definite": false,
                "start": 767,
                "end": 781
              }
            ],
            "declare": false,
            "start": 763,
            "end": 782
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
                  "name": "r1b8",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 791,
                  "end": 795
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 798,
                    "end": 799
                  },
                  "operator": "&",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 802,
                    "end": 803
                  },
                  "start": 798,
                  "end": 803
                },
                "definite": false,
                "start": 791,
                "end": 803
              }
            ],
            "declare": false,
            "start": 787,
            "end": 804
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
                  "name": "r1b9",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 813,
                  "end": 817
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 820,
                    "end": 821
                  },
                  "operator": "^",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 824,
                    "end": 825
                  },
                  "start": 820,
                  "end": 825
                },
                "definite": false,
                "start": 813,
                "end": 825
              }
            ],
            "declare": false,
            "start": 809,
            "end": 826
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
                  "name": "r1b10",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 835,
                  "end": 840
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 843,
                    "end": 844
                  },
                  "operator": "|",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 847,
                    "end": 848
                  },
                  "start": 843,
                  "end": 848
                },
                "definite": false,
                "start": 835,
                "end": 848
              }
            ],
            "declare": false,
            "start": 831,
            "end": 849
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
                  "start": 859,
                  "end": 863
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 866,
                    "end": 867
                  },
                  "operator": "*",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 870,
                    "end": 871
                  },
                  "start": 866,
                  "end": 871
                },
                "definite": false,
                "start": 859,
                "end": 871
              }
            ],
            "declare": false,
            "start": 855,
            "end": 872
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
                  "start": 881,
                  "end": 885
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 888,
                    "end": 889
                  },
                  "operator": "/",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 892,
                    "end": 893
                  },
                  "start": 888,
                  "end": 893
                },
                "definite": false,
                "start": 881,
                "end": 893
              }
            ],
            "declare": false,
            "start": 877,
            "end": 894
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
                  "start": 903,
                  "end": 907
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 910,
                    "end": 911
                  },
                  "operator": "%",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 914,
                    "end": 915
                  },
                  "start": 910,
                  "end": 915
                },
                "definite": false,
                "start": 903,
                "end": 915
              }
            ],
            "declare": false,
            "start": 899,
            "end": 916
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
                  "start": 925,
                  "end": 929
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 932,
                    "end": 933
                  },
                  "operator": "-",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 936,
                    "end": 937
                  },
                  "start": 932,
                  "end": 937
                },
                "definite": false,
                "start": 925,
                "end": 937
              }
            ],
            "declare": false,
            "start": 921,
            "end": 938
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
                  "name": "r2b5",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 947,
                  "end": 951
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 954,
                    "end": 955
                  },
                  "operator": "<<",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 959,
                    "end": 960
                  },
                  "start": 954,
                  "end": 960
                },
                "definite": false,
                "start": 947,
                "end": 960
              }
            ],
            "declare": false,
            "start": 943,
            "end": 961
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
                  "name": "r2b6",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 970,
                  "end": 974
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 977,
                    "end": 978
                  },
                  "operator": ">>",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 982,
                    "end": 983
                  },
                  "start": 977,
                  "end": 983
                },
                "definite": false,
                "start": 970,
                "end": 983
              }
            ],
            "declare": false,
            "start": 966,
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
                  "name": "r2b7",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 993,
                  "end": 997
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1000,
                    "end": 1001
                  },
                  "operator": ">>>",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1006,
                    "end": 1007
                  },
                  "start": 1000,
                  "end": 1007
                },
                "definite": false,
                "start": 993,
                "end": 1007
              }
            ],
            "declare": false,
            "start": 989,
            "end": 1008
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
                  "name": "r2b8",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1017,
                  "end": 1021
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1024,
                    "end": 1025
                  },
                  "operator": "&",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1028,
                    "end": 1029
                  },
                  "start": 1024,
                  "end": 1029
                },
                "definite": false,
                "start": 1017,
                "end": 1029
              }
            ],
            "declare": false,
            "start": 1013,
            "end": 1030
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
                  "name": "r2b9",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1039,
                  "end": 1043
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1046,
                    "end": 1047
                  },
                  "operator": "^",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1050,
                    "end": 1051
                  },
                  "start": 1046,
                  "end": 1051
                },
                "definite": false,
                "start": 1039,
                "end": 1051
              }
            ],
            "declare": false,
            "start": 1035,
            "end": 1052
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
                  "name": "r2b10",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1061,
                  "end": 1066
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1069,
                    "end": 1070
                  },
                  "operator": "|",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1073,
                    "end": 1074
                  },
                  "start": 1069,
                  "end": 1074
                },
                "definite": false,
                "start": 1061,
                "end": 1074
              }
            ],
            "declare": false,
            "start": 1057,
            "end": 1075
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
                  "name": "r1c1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1085,
                  "end": 1089
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1092,
                    "end": 1093
                  },
                  "operator": "*",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1096,
                    "end": 1097
                  },
                  "start": 1092,
                  "end": 1097
                },
                "definite": false,
                "start": 1085,
                "end": 1097
              }
            ],
            "declare": false,
            "start": 1081,
            "end": 1098
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
                  "name": "r1c2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1107,
                  "end": 1111
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1114,
                    "end": 1115
                  },
                  "operator": "/",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1118,
                    "end": 1119
                  },
                  "start": 1114,
                  "end": 1119
                },
                "definite": false,
                "start": 1107,
                "end": 1119
              }
            ],
            "declare": false,
            "start": 1103,
            "end": 1120
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
                  "name": "r1c3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1129,
                  "end": 1133
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1136,
                    "end": 1137
                  },
                  "operator": "%",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1140,
                    "end": 1141
                  },
                  "start": 1136,
                  "end": 1141
                },
                "definite": false,
                "start": 1129,
                "end": 1141
              }
            ],
            "declare": false,
            "start": 1125,
            "end": 1142
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
                  "name": "r1c4",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1151,
                  "end": 1155
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1158,
                    "end": 1159
                  },
                  "operator": "-",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1162,
                    "end": 1163
                  },
                  "start": 1158,
                  "end": 1163
                },
                "definite": false,
                "start": 1151,
                "end": 1163
              }
            ],
            "declare": false,
            "start": 1147,
            "end": 1164
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
                  "name": "r1c5",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1173,
                  "end": 1177
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1180,
                    "end": 1181
                  },
                  "operator": "<<",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1185,
                    "end": 1186
                  },
                  "start": 1180,
                  "end": 1186
                },
                "definite": false,
                "start": 1173,
                "end": 1186
              }
            ],
            "declare": false,
            "start": 1169,
            "end": 1187
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
                  "name": "r1c6",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1196,
                  "end": 1200
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1203,
                    "end": 1204
                  },
                  "operator": ">>",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1208,
                    "end": 1209
                  },
                  "start": 1203,
                  "end": 1209
                },
                "definite": false,
                "start": 1196,
                "end": 1209
              }
            ],
            "declare": false,
            "start": 1192,
            "end": 1210
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
                  "name": "r1c7",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1219,
                  "end": 1223
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1226,
                    "end": 1227
                  },
                  "operator": ">>>",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1232,
                    "end": 1233
                  },
                  "start": 1226,
                  "end": 1233
                },
                "definite": false,
                "start": 1219,
                "end": 1233
              }
            ],
            "declare": false,
            "start": 1215,
            "end": 1234
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
                  "name": "r1c8",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1243,
                  "end": 1247
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1250,
                    "end": 1251
                  },
                  "operator": "&",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1254,
                    "end": 1255
                  },
                  "start": 1250,
                  "end": 1255
                },
                "definite": false,
                "start": 1243,
                "end": 1255
              }
            ],
            "declare": false,
            "start": 1239,
            "end": 1256
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
                  "name": "r1c9",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1265,
                  "end": 1269
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1272,
                    "end": 1273
                  },
                  "operator": "^",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1276,
                    "end": 1277
                  },
                  "start": 1272,
                  "end": 1277
                },
                "definite": false,
                "start": 1265,
                "end": 1277
              }
            ],
            "declare": false,
            "start": 1261,
            "end": 1278
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
                  "name": "r1c10",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1287,
                  "end": 1292
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1295,
                    "end": 1296
                  },
                  "operator": "|",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1299,
                    "end": 1300
                  },
                  "start": 1295,
                  "end": 1300
                },
                "definite": false,
                "start": 1287,
                "end": 1300
              }
            ],
            "declare": false,
            "start": 1283,
            "end": 1301
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
                  "name": "r2c1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1311,
                  "end": 1315
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1318,
                    "end": 1319
                  },
                  "operator": "*",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1322,
                    "end": 1323
                  },
                  "start": 1318,
                  "end": 1323
                },
                "definite": false,
                "start": 1311,
                "end": 1323
              }
            ],
            "declare": false,
            "start": 1307,
            "end": 1324
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
                  "name": "r2c2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1333,
                  "end": 1337
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1340,
                    "end": 1341
                  },
                  "operator": "/",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1344,
                    "end": 1345
                  },
                  "start": 1340,
                  "end": 1345
                },
                "definite": false,
                "start": 1333,
                "end": 1345
              }
            ],
            "declare": false,
            "start": 1329,
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
                  "name": "r2c3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1355,
                  "end": 1359
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1362,
                    "end": 1363
                  },
                  "operator": "%",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1366,
                    "end": 1367
                  },
                  "start": 1362,
                  "end": 1367
                },
                "definite": false,
                "start": 1355,
                "end": 1367
              }
            ],
            "declare": false,
            "start": 1351,
            "end": 1368
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
                  "name": "r2c4",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1377,
                  "end": 1381
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1384,
                    "end": 1385
                  },
                  "operator": "-",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1388,
                    "end": 1389
                  },
                  "start": 1384,
                  "end": 1389
                },
                "definite": false,
                "start": 1377,
                "end": 1389
              }
            ],
            "declare": false,
            "start": 1373,
            "end": 1390
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
                  "name": "r2c5",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1399,
                  "end": 1403
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1406,
                    "end": 1407
                  },
                  "operator": "<<",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1411,
                    "end": 1412
                  },
                  "start": 1406,
                  "end": 1412
                },
                "definite": false,
                "start": 1399,
                "end": 1412
              }
            ],
            "declare": false,
            "start": 1395,
            "end": 1413
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
                  "name": "r2c6",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1422,
                  "end": 1426
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1429,
                    "end": 1430
                  },
                  "operator": ">>",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1434,
                    "end": 1435
                  },
                  "start": 1429,
                  "end": 1435
                },
                "definite": false,
                "start": 1422,
                "end": 1435
              }
            ],
            "declare": false,
            "start": 1418,
            "end": 1436
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
                  "name": "r2c7",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1445,
                  "end": 1449
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1452,
                    "end": 1453
                  },
                  "operator": ">>>",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1458,
                    "end": 1459
                  },
                  "start": 1452,
                  "end": 1459
                },
                "definite": false,
                "start": 1445,
                "end": 1459
              }
            ],
            "declare": false,
            "start": 1441,
            "end": 1460
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
                  "name": "r2c8",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1469,
                  "end": 1473
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1476,
                    "end": 1477
                  },
                  "operator": "&",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1480,
                    "end": 1481
                  },
                  "start": 1476,
                  "end": 1481
                },
                "definite": false,
                "start": 1469,
                "end": 1481
              }
            ],
            "declare": false,
            "start": 1465,
            "end": 1482
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
                  "name": "r2c9",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1491,
                  "end": 1495
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1498,
                    "end": 1499
                  },
                  "operator": "^",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1502,
                    "end": 1503
                  },
                  "start": 1498,
                  "end": 1503
                },
                "definite": false,
                "start": 1491,
                "end": 1503
              }
            ],
            "declare": false,
            "start": 1487,
            "end": 1504
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
                  "name": "r2c10",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1513,
                  "end": 1518
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1521,
                    "end": 1522
                  },
                  "operator": "|",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1525,
                    "end": 1526
                  },
                  "start": 1521,
                  "end": 1526
                },
                "definite": false,
                "start": 1513,
                "end": 1526
              }
            ],
            "declare": false,
            "start": 1509,
            "end": 1527
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
                  "name": "r1d1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1537,
                  "end": 1541
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "d",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1544,
                    "end": 1545
                  },
                  "operator": "*",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1548,
                    "end": 1549
                  },
                  "start": 1544,
                  "end": 1549
                },
                "definite": false,
                "start": 1537,
                "end": 1549
              }
            ],
            "declare": false,
            "start": 1533,
            "end": 1550
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
                  "name": "r1d2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1559,
                  "end": 1563
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "d",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1566,
                    "end": 1567
                  },
                  "operator": "/",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1570,
                    "end": 1571
                  },
                  "start": 1566,
                  "end": 1571
                },
                "definite": false,
                "start": 1559,
                "end": 1571
              }
            ],
            "declare": false,
            "start": 1555,
            "end": 1572
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
                  "name": "r1d3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1581,
                  "end": 1585
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "d",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1588,
                    "end": 1589
                  },
                  "operator": "%",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1592,
                    "end": 1593
                  },
                  "start": 1588,
                  "end": 1593
                },
                "definite": false,
                "start": 1581,
                "end": 1593
              }
            ],
            "declare": false,
            "start": 1577,
            "end": 1594
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
                  "name": "r1d4",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1603,
                  "end": 1607
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "d",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1610,
                    "end": 1611
                  },
                  "operator": "-",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1614,
                    "end": 1615
                  },
                  "start": 1610,
                  "end": 1615
                },
                "definite": false,
                "start": 1603,
                "end": 1615
              }
            ],
            "declare": false,
            "start": 1599,
            "end": 1616
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
                  "name": "r1d5",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1625,
                  "end": 1629
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "d",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1632,
                    "end": 1633
                  },
                  "operator": "<<",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1637,
                    "end": 1638
                  },
                  "start": 1632,
                  "end": 1638
                },
                "definite": false,
                "start": 1625,
                "end": 1638
              }
            ],
            "declare": false,
            "start": 1621,
            "end": 1639
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
                  "name": "r1d6",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1648,
                  "end": 1652
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "d",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1655,
                    "end": 1656
                  },
                  "operator": ">>",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1660,
                    "end": 1661
                  },
                  "start": 1655,
                  "end": 1661
                },
                "definite": false,
                "start": 1648,
                "end": 1661
              }
            ],
            "declare": false,
            "start": 1644,
            "end": 1662
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
                  "name": "r1d7",
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
                    "name": "d",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1678,
                    "end": 1679
                  },
                  "operator": ">>>",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1684,
                    "end": 1685
                  },
                  "start": 1678,
                  "end": 1685
                },
                "definite": false,
                "start": 1671,
                "end": 1685
              }
            ],
            "declare": false,
            "start": 1667,
            "end": 1686
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
                  "name": "r1d8",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1695,
                  "end": 1699
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "d",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1702,
                    "end": 1703
                  },
                  "operator": "&",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1706,
                    "end": 1707
                  },
                  "start": 1702,
                  "end": 1707
                },
                "definite": false,
                "start": 1695,
                "end": 1707
              }
            ],
            "declare": false,
            "start": 1691,
            "end": 1708
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
                  "name": "r1d9",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1717,
                  "end": 1721
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "d",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1724,
                    "end": 1725
                  },
                  "operator": "^",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1728,
                    "end": 1729
                  },
                  "start": 1724,
                  "end": 1729
                },
                "definite": false,
                "start": 1717,
                "end": 1729
              }
            ],
            "declare": false,
            "start": 1713,
            "end": 1730
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
                  "name": "r1d10",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1739,
                  "end": 1744
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "d",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1747,
                    "end": 1748
                  },
                  "operator": "|",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1751,
                    "end": 1752
                  },
                  "start": 1747,
                  "end": 1752
                },
                "definite": false,
                "start": 1739,
                "end": 1752
              }
            ],
            "declare": false,
            "start": 1735,
            "end": 1753
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
                  "name": "r2d1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1763,
                  "end": 1767
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1770,
                    "end": 1771
                  },
                  "operator": "*",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "d",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1774,
                    "end": 1775
                  },
                  "start": 1770,
                  "end": 1775
                },
                "definite": false,
                "start": 1763,
                "end": 1775
              }
            ],
            "declare": false,
            "start": 1759,
            "end": 1776
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
                  "name": "r2d2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1785,
                  "end": 1789
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1792,
                    "end": 1793
                  },
                  "operator": "/",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "d",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1796,
                    "end": 1797
                  },
                  "start": 1792,
                  "end": 1797
                },
                "definite": false,
                "start": 1785,
                "end": 1797
              }
            ],
            "declare": false,
            "start": 1781,
            "end": 1798
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
                  "name": "r2d3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1807,
                  "end": 1811
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1814,
                    "end": 1815
                  },
                  "operator": "%",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "d",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1818,
                    "end": 1819
                  },
                  "start": 1814,
                  "end": 1819
                },
                "definite": false,
                "start": 1807,
                "end": 1819
              }
            ],
            "declare": false,
            "start": 1803,
            "end": 1820
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
                  "name": "r2d4",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1829,
                  "end": 1833
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1836,
                    "end": 1837
                  },
                  "operator": "-",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "d",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1840,
                    "end": 1841
                  },
                  "start": 1836,
                  "end": 1841
                },
                "definite": false,
                "start": 1829,
                "end": 1841
              }
            ],
            "declare": false,
            "start": 1825,
            "end": 1842
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
                  "name": "r2d5",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1851,
                  "end": 1855
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1858,
                    "end": 1859
                  },
                  "operator": "<<",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "d",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1863,
                    "end": 1864
                  },
                  "start": 1858,
                  "end": 1864
                },
                "definite": false,
                "start": 1851,
                "end": 1864
              }
            ],
            "declare": false,
            "start": 1847,
            "end": 1865
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
                  "name": "r2d6",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1874,
                  "end": 1878
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1881,
                    "end": 1882
                  },
                  "operator": ">>",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "d",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1886,
                    "end": 1887
                  },
                  "start": 1881,
                  "end": 1887
                },
                "definite": false,
                "start": 1874,
                "end": 1887
              }
            ],
            "declare": false,
            "start": 1870,
            "end": 1888
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
                  "name": "r2d7",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1897,
                  "end": 1901
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1904,
                    "end": 1905
                  },
                  "operator": ">>>",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "d",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1910,
                    "end": 1911
                  },
                  "start": 1904,
                  "end": 1911
                },
                "definite": false,
                "start": 1897,
                "end": 1911
              }
            ],
            "declare": false,
            "start": 1893,
            "end": 1912
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
                  "name": "r2d8",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1921,
                  "end": 1925
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1928,
                    "end": 1929
                  },
                  "operator": "&",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "d",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1932,
                    "end": 1933
                  },
                  "start": 1928,
                  "end": 1933
                },
                "definite": false,
                "start": 1921,
                "end": 1933
              }
            ],
            "declare": false,
            "start": 1917,
            "end": 1934
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
                  "name": "r2d9",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1943,
                  "end": 1947
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1950,
                    "end": 1951
                  },
                  "operator": "^",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "d",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1954,
                    "end": 1955
                  },
                  "start": 1950,
                  "end": 1955
                },
                "definite": false,
                "start": 1943,
                "end": 1955
              }
            ],
            "declare": false,
            "start": 1939,
            "end": 1956
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
                  "name": "r2d10",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1965,
                  "end": 1970
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1973,
                    "end": 1974
                  },
                  "operator": "|",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "d",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1977,
                    "end": 1978
                  },
                  "start": 1973,
                  "end": 1978
                },
                "definite": false,
                "start": 1965,
                "end": 1978
              }
            ],
            "declare": false,
            "start": 1961,
            "end": 1979
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
                  "name": "r1e1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1989,
                  "end": 1993
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "e",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1996,
                    "end": 1997
                  },
                  "operator": "*",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2000,
                    "end": 2001
                  },
                  "start": 1996,
                  "end": 2001
                },
                "definite": false,
                "start": 1989,
                "end": 2001
              }
            ],
            "declare": false,
            "start": 1985,
            "end": 2002
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
                  "name": "r1e2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2011,
                  "end": 2015
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "e",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2018,
                    "end": 2019
                  },
                  "operator": "/",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2022,
                    "end": 2023
                  },
                  "start": 2018,
                  "end": 2023
                },
                "definite": false,
                "start": 2011,
                "end": 2023
              }
            ],
            "declare": false,
            "start": 2007,
            "end": 2024
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
                  "name": "r1e3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2033,
                  "end": 2037
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "e",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2040,
                    "end": 2041
                  },
                  "operator": "%",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2044,
                    "end": 2045
                  },
                  "start": 2040,
                  "end": 2045
                },
                "definite": false,
                "start": 2033,
                "end": 2045
              }
            ],
            "declare": false,
            "start": 2029,
            "end": 2046
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
                  "name": "r1e4",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2055,
                  "end": 2059
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "e",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2062,
                    "end": 2063
                  },
                  "operator": "-",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2066,
                    "end": 2067
                  },
                  "start": 2062,
                  "end": 2067
                },
                "definite": false,
                "start": 2055,
                "end": 2067
              }
            ],
            "declare": false,
            "start": 2051,
            "end": 2068
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
                  "name": "r1e5",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2077,
                  "end": 2081
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "e",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2084,
                    "end": 2085
                  },
                  "operator": "<<",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2089,
                    "end": 2090
                  },
                  "start": 2084,
                  "end": 2090
                },
                "definite": false,
                "start": 2077,
                "end": 2090
              }
            ],
            "declare": false,
            "start": 2073,
            "end": 2091
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
                  "name": "r1e6",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2100,
                  "end": 2104
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "e",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2107,
                    "end": 2108
                  },
                  "operator": ">>",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2112,
                    "end": 2113
                  },
                  "start": 2107,
                  "end": 2113
                },
                "definite": false,
                "start": 2100,
                "end": 2113
              }
            ],
            "declare": false,
            "start": 2096,
            "end": 2114
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
                  "name": "r1e7",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2123,
                  "end": 2127
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "e",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2130,
                    "end": 2131
                  },
                  "operator": ">>>",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2136,
                    "end": 2137
                  },
                  "start": 2130,
                  "end": 2137
                },
                "definite": false,
                "start": 2123,
                "end": 2137
              }
            ],
            "declare": false,
            "start": 2119,
            "end": 2138
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
                  "name": "r1e8",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2147,
                  "end": 2151
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "e",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2154,
                    "end": 2155
                  },
                  "operator": "&",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2158,
                    "end": 2159
                  },
                  "start": 2154,
                  "end": 2159
                },
                "definite": false,
                "start": 2147,
                "end": 2159
              }
            ],
            "declare": false,
            "start": 2143,
            "end": 2160
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
                  "name": "r1e9",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2169,
                  "end": 2173
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "e",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2176,
                    "end": 2177
                  },
                  "operator": "^",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2180,
                    "end": 2181
                  },
                  "start": 2176,
                  "end": 2181
                },
                "definite": false,
                "start": 2169,
                "end": 2181
              }
            ],
            "declare": false,
            "start": 2165,
            "end": 2182
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
                  "name": "r1e10",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2191,
                  "end": 2196
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "e",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2199,
                    "end": 2200
                  },
                  "operator": "|",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2203,
                    "end": 2204
                  },
                  "start": 2199,
                  "end": 2204
                },
                "definite": false,
                "start": 2191,
                "end": 2204
              }
            ],
            "declare": false,
            "start": 2187,
            "end": 2205
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
                  "name": "r2e1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2215,
                  "end": 2219
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2222,
                    "end": 2223
                  },
                  "operator": "*",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "e",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2226,
                    "end": 2227
                  },
                  "start": 2222,
                  "end": 2227
                },
                "definite": false,
                "start": 2215,
                "end": 2227
              }
            ],
            "declare": false,
            "start": 2211,
            "end": 2228
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
                  "name": "r2e2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2237,
                  "end": 2241
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2244,
                    "end": 2245
                  },
                  "operator": "/",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "e",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2248,
                    "end": 2249
                  },
                  "start": 2244,
                  "end": 2249
                },
                "definite": false,
                "start": 2237,
                "end": 2249
              }
            ],
            "declare": false,
            "start": 2233,
            "end": 2250
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
                  "name": "r2e3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2259,
                  "end": 2263
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2266,
                    "end": 2267
                  },
                  "operator": "%",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "e",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2270,
                    "end": 2271
                  },
                  "start": 2266,
                  "end": 2271
                },
                "definite": false,
                "start": 2259,
                "end": 2271
              }
            ],
            "declare": false,
            "start": 2255,
            "end": 2272
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
                  "name": "r2e4",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2281,
                  "end": 2285
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2288,
                    "end": 2289
                  },
                  "operator": "-",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "e",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2292,
                    "end": 2293
                  },
                  "start": 2288,
                  "end": 2293
                },
                "definite": false,
                "start": 2281,
                "end": 2293
              }
            ],
            "declare": false,
            "start": 2277,
            "end": 2294
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
                  "name": "r2e5",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2303,
                  "end": 2307
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2310,
                    "end": 2311
                  },
                  "operator": "<<",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "e",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2315,
                    "end": 2316
                  },
                  "start": 2310,
                  "end": 2316
                },
                "definite": false,
                "start": 2303,
                "end": 2316
              }
            ],
            "declare": false,
            "start": 2299,
            "end": 2317
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
                  "name": "r2e6",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2326,
                  "end": 2330
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2333,
                    "end": 2334
                  },
                  "operator": ">>",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "e",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2338,
                    "end": 2339
                  },
                  "start": 2333,
                  "end": 2339
                },
                "definite": false,
                "start": 2326,
                "end": 2339
              }
            ],
            "declare": false,
            "start": 2322,
            "end": 2340
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
                  "name": "r2e7",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2349,
                  "end": 2353
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2356,
                    "end": 2357
                  },
                  "operator": ">>>",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "e",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2362,
                    "end": 2363
                  },
                  "start": 2356,
                  "end": 2363
                },
                "definite": false,
                "start": 2349,
                "end": 2363
              }
            ],
            "declare": false,
            "start": 2345,
            "end": 2364
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
                  "name": "r2e8",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2373,
                  "end": 2377
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2380,
                    "end": 2381
                  },
                  "operator": "&",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "e",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2384,
                    "end": 2385
                  },
                  "start": 2380,
                  "end": 2385
                },
                "definite": false,
                "start": 2373,
                "end": 2385
              }
            ],
            "declare": false,
            "start": 2369,
            "end": 2386
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
                  "name": "r2e9",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2395,
                  "end": 2399
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2402,
                    "end": 2403
                  },
                  "operator": "^",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "e",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2406,
                    "end": 2407
                  },
                  "start": 2402,
                  "end": 2407
                },
                "definite": false,
                "start": 2395,
                "end": 2407
              }
            ],
            "declare": false,
            "start": 2391,
            "end": 2408
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
                  "name": "r2e10",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2417,
                  "end": 2422
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2425,
                    "end": 2426
                  },
                  "operator": "|",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "e",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2429,
                    "end": 2430
                  },
                  "start": 2425,
                  "end": 2430
                },
                "definite": false,
                "start": 2417,
                "end": 2430
              }
            ],
            "declare": false,
            "start": 2413,
            "end": 2431
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
                  "name": "r1f1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2441,
                  "end": 2445
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2448,
                    "end": 2449
                  },
                  "operator": "*",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2452,
                    "end": 2453
                  },
                  "start": 2448,
                  "end": 2453
                },
                "definite": false,
                "start": 2441,
                "end": 2453
              }
            ],
            "declare": false,
            "start": 2437,
            "end": 2454
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
                  "name": "r1f2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2463,
                  "end": 2467
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2470,
                    "end": 2471
                  },
                  "operator": "/",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2474,
                    "end": 2475
                  },
                  "start": 2470,
                  "end": 2475
                },
                "definite": false,
                "start": 2463,
                "end": 2475
              }
            ],
            "declare": false,
            "start": 2459,
            "end": 2476
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
                  "name": "r1f3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2485,
                  "end": 2489
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2492,
                    "end": 2493
                  },
                  "operator": "%",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2496,
                    "end": 2497
                  },
                  "start": 2492,
                  "end": 2497
                },
                "definite": false,
                "start": 2485,
                "end": 2497
              }
            ],
            "declare": false,
            "start": 2481,
            "end": 2498
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
                  "name": "r1f4",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2507,
                  "end": 2511
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2514,
                    "end": 2515
                  },
                  "operator": "-",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2518,
                    "end": 2519
                  },
                  "start": 2514,
                  "end": 2519
                },
                "definite": false,
                "start": 2507,
                "end": 2519
              }
            ],
            "declare": false,
            "start": 2503,
            "end": 2520
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
                  "name": "r1f5",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2529,
                  "end": 2533
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2536,
                    "end": 2537
                  },
                  "operator": "<<",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2541,
                    "end": 2542
                  },
                  "start": 2536,
                  "end": 2542
                },
                "definite": false,
                "start": 2529,
                "end": 2542
              }
            ],
            "declare": false,
            "start": 2525,
            "end": 2543
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
                  "name": "r1f6",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2552,
                  "end": 2556
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2559,
                    "end": 2560
                  },
                  "operator": ">>",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2564,
                    "end": 2565
                  },
                  "start": 2559,
                  "end": 2565
                },
                "definite": false,
                "start": 2552,
                "end": 2565
              }
            ],
            "declare": false,
            "start": 2548,
            "end": 2566
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
                  "name": "r1f7",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2575,
                  "end": 2579
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2582,
                    "end": 2583
                  },
                  "operator": ">>>",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2588,
                    "end": 2589
                  },
                  "start": 2582,
                  "end": 2589
                },
                "definite": false,
                "start": 2575,
                "end": 2589
              }
            ],
            "declare": false,
            "start": 2571,
            "end": 2590
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
                  "name": "r1f8",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2599,
                  "end": 2603
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2606,
                    "end": 2607
                  },
                  "operator": "&",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2610,
                    "end": 2611
                  },
                  "start": 2606,
                  "end": 2611
                },
                "definite": false,
                "start": 2599,
                "end": 2611
              }
            ],
            "declare": false,
            "start": 2595,
            "end": 2612
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
                  "name": "r1f9",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2621,
                  "end": 2625
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2628,
                    "end": 2629
                  },
                  "operator": "^",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2632,
                    "end": 2633
                  },
                  "start": 2628,
                  "end": 2633
                },
                "definite": false,
                "start": 2621,
                "end": 2633
              }
            ],
            "declare": false,
            "start": 2617,
            "end": 2634
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
                  "name": "r1f10",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2643,
                  "end": 2648
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2651,
                    "end": 2652
                  },
                  "operator": "|",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2655,
                    "end": 2656
                  },
                  "start": 2651,
                  "end": 2656
                },
                "definite": false,
                "start": 2643,
                "end": 2656
              }
            ],
            "declare": false,
            "start": 2639,
            "end": 2657
          }
        ],
        "start": 81,
        "end": 2659
      },
      "expression": false,
      "start": 59,
      "end": 2659
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 59,
  "end": 2659
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "function",
    "start": 59,
    "end": 67
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 68,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 71,
    "end": 72
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 72,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 73,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 74,
    "end": 75
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 75,
    "end": 76
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 76,
    "end": 77
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 78,
    "end": 79
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 79,
    "end": 80
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 81,
    "end": 82
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 87,
    "end": 90
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 91,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 92,
    "end": 93
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 94,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 97,
    "end": 98
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 103,
    "end": 106
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 107,
    "end": 108
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 108,
    "end": 109
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 110,
    "end": 117
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 117,
    "end": 118
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 123,
    "end": 126
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 127,
    "end": 128
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 128,
    "end": 129
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 130,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 136,
    "end": 137
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 142,
    "end": 145
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 146,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 147,
    "end": 148
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 149,
    "end": 155
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 155,
    "end": 156
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 161,
    "end": 164
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 165,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 166,
    "end": 167
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 168,
    "end": 169
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 169,
    "end": 170
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 170,
    "end": 171
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 177,
    "end": 180
  },
  {
    "type": "Identifier",
    "value": "r1a1",
    "start": 181,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 186,
    "end": 187
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 188,
    "end": 189
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 190,
    "end": 191
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 192,
    "end": 193
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 193,
    "end": 194
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 199,
    "end": 202
  },
  {
    "type": "Identifier",
    "value": "r1a2",
    "start": 203,
    "end": 207
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 208,
    "end": 209
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 210,
    "end": 211
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 212,
    "end": 213
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 214,
    "end": 215
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 215,
    "end": 216
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 221,
    "end": 224
  },
  {
    "type": "Identifier",
    "value": "r1a3",
    "start": 225,
    "end": 229
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 230,
    "end": 231
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 232,
    "end": 233
  },
  {
    "type": "Punctuator",
    "value": "%",
    "start": 234,
    "end": 235
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 236,
    "end": 237
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 237,
    "end": 238
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 243,
    "end": 246
  },
  {
    "type": "Identifier",
    "value": "r1a4",
    "start": 247,
    "end": 251
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 252,
    "end": 253
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 254,
    "end": 255
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 256,
    "end": 257
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 258,
    "end": 259
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 259,
    "end": 260
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 265,
    "end": 268
  },
  {
    "type": "Identifier",
    "value": "r1a5",
    "start": 269,
    "end": 273
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 274,
    "end": 275
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 276,
    "end": 277
  },
  {
    "type": "Punctuator",
    "value": "<<",
    "start": 278,
    "end": 280
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 281,
    "end": 282
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 282,
    "end": 283
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 288,
    "end": 291
  },
  {
    "type": "Identifier",
    "value": "r1a6",
    "start": 292,
    "end": 296
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 297,
    "end": 298
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 299,
    "end": 300
  },
  {
    "type": "Punctuator",
    "value": ">>",
    "start": 301,
    "end": 303
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 304,
    "end": 305
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 305,
    "end": 306
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 311,
    "end": 314
  },
  {
    "type": "Identifier",
    "value": "r1a7",
    "start": 315,
    "end": 319
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 320,
    "end": 321
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 322,
    "end": 323
  },
  {
    "type": "Punctuator",
    "value": ">>>",
    "start": 324,
    "end": 327
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 328,
    "end": 329
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 329,
    "end": 330
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 335,
    "end": 338
  },
  {
    "type": "Identifier",
    "value": "r1a8",
    "start": 339,
    "end": 343
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 344,
    "end": 345
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 346,
    "end": 347
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 348,
    "end": 349
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 350,
    "end": 351
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 351,
    "end": 352
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 357,
    "end": 360
  },
  {
    "type": "Identifier",
    "value": "r1a9",
    "start": 361,
    "end": 365
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 366,
    "end": 367
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 368,
    "end": 369
  },
  {
    "type": "Punctuator",
    "value": "^",
    "start": 370,
    "end": 371
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 372,
    "end": 373
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 373,
    "end": 374
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 379,
    "end": 382
  },
  {
    "type": "Identifier",
    "value": "r1a10",
    "start": 383,
    "end": 388
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 389,
    "end": 390
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 391,
    "end": 392
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 393,
    "end": 394
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 395,
    "end": 396
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 396,
    "end": 397
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 403,
    "end": 406
  },
  {
    "type": "Identifier",
    "value": "r2a1",
    "start": 407,
    "end": 411
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 412,
    "end": 413
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 414,
    "end": 415
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 416,
    "end": 417
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 418,
    "end": 419
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 419,
    "end": 420
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 425,
    "end": 428
  },
  {
    "type": "Identifier",
    "value": "r2a2",
    "start": 429,
    "end": 433
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 434,
    "end": 435
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 436,
    "end": 437
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 438,
    "end": 439
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 440,
    "end": 441
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 441,
    "end": 442
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 447,
    "end": 450
  },
  {
    "type": "Identifier",
    "value": "r2a3",
    "start": 451,
    "end": 455
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 456,
    "end": 457
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 458,
    "end": 459
  },
  {
    "type": "Punctuator",
    "value": "%",
    "start": 460,
    "end": 461
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 462,
    "end": 463
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 463,
    "end": 464
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 469,
    "end": 472
  },
  {
    "type": "Identifier",
    "value": "r2a4",
    "start": 473,
    "end": 477
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 478,
    "end": 479
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 480,
    "end": 481
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 482,
    "end": 483
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 484,
    "end": 485
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 485,
    "end": 486
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 491,
    "end": 494
  },
  {
    "type": "Identifier",
    "value": "r2a5",
    "start": 495,
    "end": 499
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 500,
    "end": 501
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 502,
    "end": 503
  },
  {
    "type": "Punctuator",
    "value": "<<",
    "start": 504,
    "end": 506
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 507,
    "end": 508
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 508,
    "end": 509
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 514,
    "end": 517
  },
  {
    "type": "Identifier",
    "value": "r2a6",
    "start": 518,
    "end": 522
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 523,
    "end": 524
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 525,
    "end": 526
  },
  {
    "type": "Punctuator",
    "value": ">>",
    "start": 527,
    "end": 529
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 530,
    "end": 531
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 531,
    "end": 532
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 537,
    "end": 540
  },
  {
    "type": "Identifier",
    "value": "r2a7",
    "start": 541,
    "end": 545
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 546,
    "end": 547
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 548,
    "end": 549
  },
  {
    "type": "Punctuator",
    "value": ">>>",
    "start": 550,
    "end": 553
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 554,
    "end": 555
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 555,
    "end": 556
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 561,
    "end": 564
  },
  {
    "type": "Identifier",
    "value": "r2a8",
    "start": 565,
    "end": 569
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 570,
    "end": 571
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 572,
    "end": 573
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 574,
    "end": 575
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 576,
    "end": 577
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 577,
    "end": 578
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 583,
    "end": 586
  },
  {
    "type": "Identifier",
    "value": "r2a9",
    "start": 587,
    "end": 591
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 592,
    "end": 593
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 594,
    "end": 595
  },
  {
    "type": "Punctuator",
    "value": "^",
    "start": 596,
    "end": 597
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 598,
    "end": 599
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 599,
    "end": 600
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 605,
    "end": 608
  },
  {
    "type": "Identifier",
    "value": "r2a10",
    "start": 609,
    "end": 614
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 615,
    "end": 616
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 617,
    "end": 618
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 619,
    "end": 620
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 621,
    "end": 622
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 622,
    "end": 623
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 629,
    "end": 632
  },
  {
    "type": "Identifier",
    "value": "r1b1",
    "start": 633,
    "end": 637
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 638,
    "end": 639
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 640,
    "end": 641
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 642,
    "end": 643
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 644,
    "end": 645
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 645,
    "end": 646
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 651,
    "end": 654
  },
  {
    "type": "Identifier",
    "value": "r1b2",
    "start": 655,
    "end": 659
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 660,
    "end": 661
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 662,
    "end": 663
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 664,
    "end": 665
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 666,
    "end": 667
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 667,
    "end": 668
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 673,
    "end": 676
  },
  {
    "type": "Identifier",
    "value": "r1b3",
    "start": 677,
    "end": 681
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 682,
    "end": 683
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 684,
    "end": 685
  },
  {
    "type": "Punctuator",
    "value": "%",
    "start": 686,
    "end": 687
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 688,
    "end": 689
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 689,
    "end": 690
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 695,
    "end": 698
  },
  {
    "type": "Identifier",
    "value": "r1b4",
    "start": 699,
    "end": 703
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 704,
    "end": 705
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 706,
    "end": 707
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 708,
    "end": 709
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 710,
    "end": 711
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 711,
    "end": 712
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 717,
    "end": 720
  },
  {
    "type": "Identifier",
    "value": "r1b5",
    "start": 721,
    "end": 725
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 726,
    "end": 727
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 728,
    "end": 729
  },
  {
    "type": "Punctuator",
    "value": "<<",
    "start": 730,
    "end": 732
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 733,
    "end": 734
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 734,
    "end": 735
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 740,
    "end": 743
  },
  {
    "type": "Identifier",
    "value": "r1b6",
    "start": 744,
    "end": 748
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 749,
    "end": 750
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 751,
    "end": 752
  },
  {
    "type": "Punctuator",
    "value": ">>",
    "start": 753,
    "end": 755
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 756,
    "end": 757
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 757,
    "end": 758
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 763,
    "end": 766
  },
  {
    "type": "Identifier",
    "value": "r1b7",
    "start": 767,
    "end": 771
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 772,
    "end": 773
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 774,
    "end": 775
  },
  {
    "type": "Punctuator",
    "value": ">>>",
    "start": 776,
    "end": 779
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 780,
    "end": 781
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 781,
    "end": 782
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 787,
    "end": 790
  },
  {
    "type": "Identifier",
    "value": "r1b8",
    "start": 791,
    "end": 795
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 796,
    "end": 797
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 798,
    "end": 799
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 800,
    "end": 801
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 802,
    "end": 803
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 803,
    "end": 804
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 809,
    "end": 812
  },
  {
    "type": "Identifier",
    "value": "r1b9",
    "start": 813,
    "end": 817
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 818,
    "end": 819
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 820,
    "end": 821
  },
  {
    "type": "Punctuator",
    "value": "^",
    "start": 822,
    "end": 823
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 824,
    "end": 825
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 825,
    "end": 826
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 831,
    "end": 834
  },
  {
    "type": "Identifier",
    "value": "r1b10",
    "start": 835,
    "end": 840
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 841,
    "end": 842
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 843,
    "end": 844
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 845,
    "end": 846
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 847,
    "end": 848
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 848,
    "end": 849
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 855,
    "end": 858
  },
  {
    "type": "Identifier",
    "value": "r2b1",
    "start": 859,
    "end": 863
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 864,
    "end": 865
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 866,
    "end": 867
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 868,
    "end": 869
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 870,
    "end": 871
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 871,
    "end": 872
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 877,
    "end": 880
  },
  {
    "type": "Identifier",
    "value": "r2b2",
    "start": 881,
    "end": 885
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 886,
    "end": 887
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 888,
    "end": 889
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 890,
    "end": 891
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 892,
    "end": 893
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 893,
    "end": 894
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 899,
    "end": 902
  },
  {
    "type": "Identifier",
    "value": "r2b3",
    "start": 903,
    "end": 907
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 908,
    "end": 909
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 910,
    "end": 911
  },
  {
    "type": "Punctuator",
    "value": "%",
    "start": 912,
    "end": 913
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 914,
    "end": 915
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 915,
    "end": 916
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 921,
    "end": 924
  },
  {
    "type": "Identifier",
    "value": "r2b4",
    "start": 925,
    "end": 929
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 930,
    "end": 931
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 932,
    "end": 933
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 934,
    "end": 935
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 936,
    "end": 937
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 937,
    "end": 938
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 943,
    "end": 946
  },
  {
    "type": "Identifier",
    "value": "r2b5",
    "start": 947,
    "end": 951
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 952,
    "end": 953
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 954,
    "end": 955
  },
  {
    "type": "Punctuator",
    "value": "<<",
    "start": 956,
    "end": 958
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 959,
    "end": 960
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 960,
    "end": 961
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 966,
    "end": 969
  },
  {
    "type": "Identifier",
    "value": "r2b6",
    "start": 970,
    "end": 974
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 975,
    "end": 976
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 977,
    "end": 978
  },
  {
    "type": "Punctuator",
    "value": ">>",
    "start": 979,
    "end": 981
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 982,
    "end": 983
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 983,
    "end": 984
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 989,
    "end": 992
  },
  {
    "type": "Identifier",
    "value": "r2b7",
    "start": 993,
    "end": 997
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 998,
    "end": 999
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 1000,
    "end": 1001
  },
  {
    "type": "Punctuator",
    "value": ">>>",
    "start": 1002,
    "end": 1005
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1006,
    "end": 1007
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1007,
    "end": 1008
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1013,
    "end": 1016
  },
  {
    "type": "Identifier",
    "value": "r2b8",
    "start": 1017,
    "end": 1021
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1022,
    "end": 1023
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 1024,
    "end": 1025
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 1026,
    "end": 1027
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1028,
    "end": 1029
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1029,
    "end": 1030
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1035,
    "end": 1038
  },
  {
    "type": "Identifier",
    "value": "r2b9",
    "start": 1039,
    "end": 1043
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1044,
    "end": 1045
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 1046,
    "end": 1047
  },
  {
    "type": "Punctuator",
    "value": "^",
    "start": 1048,
    "end": 1049
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1050,
    "end": 1051
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1051,
    "end": 1052
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1057,
    "end": 1060
  },
  {
    "type": "Identifier",
    "value": "r2b10",
    "start": 1061,
    "end": 1066
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1067,
    "end": 1068
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 1069,
    "end": 1070
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1071,
    "end": 1072
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1073,
    "end": 1074
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1074,
    "end": 1075
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1081,
    "end": 1084
  },
  {
    "type": "Identifier",
    "value": "r1c1",
    "start": 1085,
    "end": 1089
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1090,
    "end": 1091
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1092,
    "end": 1093
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 1094,
    "end": 1095
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 1096,
    "end": 1097
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1097,
    "end": 1098
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1103,
    "end": 1106
  },
  {
    "type": "Identifier",
    "value": "r1c2",
    "start": 1107,
    "end": 1111
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1112,
    "end": 1113
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1114,
    "end": 1115
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 1116,
    "end": 1117
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 1118,
    "end": 1119
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1119,
    "end": 1120
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1125,
    "end": 1128
  },
  {
    "type": "Identifier",
    "value": "r1c3",
    "start": 1129,
    "end": 1133
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1134,
    "end": 1135
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1136,
    "end": 1137
  },
  {
    "type": "Punctuator",
    "value": "%",
    "start": 1138,
    "end": 1139
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 1140,
    "end": 1141
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1141,
    "end": 1142
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1147,
    "end": 1150
  },
  {
    "type": "Identifier",
    "value": "r1c4",
    "start": 1151,
    "end": 1155
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1156,
    "end": 1157
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1158,
    "end": 1159
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 1160,
    "end": 1161
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 1162,
    "end": 1163
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1163,
    "end": 1164
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1169,
    "end": 1172
  },
  {
    "type": "Identifier",
    "value": "r1c5",
    "start": 1173,
    "end": 1177
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1178,
    "end": 1179
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1180,
    "end": 1181
  },
  {
    "type": "Punctuator",
    "value": "<<",
    "start": 1182,
    "end": 1184
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 1185,
    "end": 1186
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1186,
    "end": 1187
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1192,
    "end": 1195
  },
  {
    "type": "Identifier",
    "value": "r1c6",
    "start": 1196,
    "end": 1200
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1201,
    "end": 1202
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1203,
    "end": 1204
  },
  {
    "type": "Punctuator",
    "value": ">>",
    "start": 1205,
    "end": 1207
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 1208,
    "end": 1209
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1209,
    "end": 1210
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1215,
    "end": 1218
  },
  {
    "type": "Identifier",
    "value": "r1c7",
    "start": 1219,
    "end": 1223
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1224,
    "end": 1225
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1226,
    "end": 1227
  },
  {
    "type": "Punctuator",
    "value": ">>>",
    "start": 1228,
    "end": 1231
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 1232,
    "end": 1233
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1233,
    "end": 1234
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1239,
    "end": 1242
  },
  {
    "type": "Identifier",
    "value": "r1c8",
    "start": 1243,
    "end": 1247
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1248,
    "end": 1249
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1250,
    "end": 1251
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 1252,
    "end": 1253
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 1254,
    "end": 1255
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1255,
    "end": 1256
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1261,
    "end": 1264
  },
  {
    "type": "Identifier",
    "value": "r1c9",
    "start": 1265,
    "end": 1269
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1270,
    "end": 1271
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1272,
    "end": 1273
  },
  {
    "type": "Punctuator",
    "value": "^",
    "start": 1274,
    "end": 1275
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 1276,
    "end": 1277
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1277,
    "end": 1278
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1283,
    "end": 1286
  },
  {
    "type": "Identifier",
    "value": "r1c10",
    "start": 1287,
    "end": 1292
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1293,
    "end": 1294
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1295,
    "end": 1296
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1297,
    "end": 1298
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 1299,
    "end": 1300
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1300,
    "end": 1301
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1307,
    "end": 1310
  },
  {
    "type": "Identifier",
    "value": "r2c1",
    "start": 1311,
    "end": 1315
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1316,
    "end": 1317
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 1318,
    "end": 1319
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 1320,
    "end": 1321
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1322,
    "end": 1323
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1323,
    "end": 1324
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1329,
    "end": 1332
  },
  {
    "type": "Identifier",
    "value": "r2c2",
    "start": 1333,
    "end": 1337
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1338,
    "end": 1339
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 1340,
    "end": 1341
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 1342,
    "end": 1343
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1344,
    "end": 1345
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1345,
    "end": 1346
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1351,
    "end": 1354
  },
  {
    "type": "Identifier",
    "value": "r2c3",
    "start": 1355,
    "end": 1359
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1360,
    "end": 1361
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 1362,
    "end": 1363
  },
  {
    "type": "Punctuator",
    "value": "%",
    "start": 1364,
    "end": 1365
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1366,
    "end": 1367
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1367,
    "end": 1368
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1373,
    "end": 1376
  },
  {
    "type": "Identifier",
    "value": "r2c4",
    "start": 1377,
    "end": 1381
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1382,
    "end": 1383
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 1384,
    "end": 1385
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 1386,
    "end": 1387
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1388,
    "end": 1389
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1389,
    "end": 1390
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1395,
    "end": 1398
  },
  {
    "type": "Identifier",
    "value": "r2c5",
    "start": 1399,
    "end": 1403
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1404,
    "end": 1405
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 1406,
    "end": 1407
  },
  {
    "type": "Punctuator",
    "value": "<<",
    "start": 1408,
    "end": 1410
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1411,
    "end": 1412
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1412,
    "end": 1413
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1418,
    "end": 1421
  },
  {
    "type": "Identifier",
    "value": "r2c6",
    "start": 1422,
    "end": 1426
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1427,
    "end": 1428
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 1429,
    "end": 1430
  },
  {
    "type": "Punctuator",
    "value": ">>",
    "start": 1431,
    "end": 1433
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1434,
    "end": 1435
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1435,
    "end": 1436
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1441,
    "end": 1444
  },
  {
    "type": "Identifier",
    "value": "r2c7",
    "start": 1445,
    "end": 1449
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1450,
    "end": 1451
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 1452,
    "end": 1453
  },
  {
    "type": "Punctuator",
    "value": ">>>",
    "start": 1454,
    "end": 1457
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1458,
    "end": 1459
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1459,
    "end": 1460
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1465,
    "end": 1468
  },
  {
    "type": "Identifier",
    "value": "r2c8",
    "start": 1469,
    "end": 1473
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1474,
    "end": 1475
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 1476,
    "end": 1477
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 1478,
    "end": 1479
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1480,
    "end": 1481
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1481,
    "end": 1482
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1487,
    "end": 1490
  },
  {
    "type": "Identifier",
    "value": "r2c9",
    "start": 1491,
    "end": 1495
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1496,
    "end": 1497
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 1498,
    "end": 1499
  },
  {
    "type": "Punctuator",
    "value": "^",
    "start": 1500,
    "end": 1501
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1502,
    "end": 1503
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1503,
    "end": 1504
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1509,
    "end": 1512
  },
  {
    "type": "Identifier",
    "value": "r2c10",
    "start": 1513,
    "end": 1518
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1519,
    "end": 1520
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 1521,
    "end": 1522
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1523,
    "end": 1524
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1525,
    "end": 1526
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1526,
    "end": 1527
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1533,
    "end": 1536
  },
  {
    "type": "Identifier",
    "value": "r1d1",
    "start": 1537,
    "end": 1541
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1542,
    "end": 1543
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 1544,
    "end": 1545
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 1546,
    "end": 1547
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 1548,
    "end": 1549
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1549,
    "end": 1550
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1555,
    "end": 1558
  },
  {
    "type": "Identifier",
    "value": "r1d2",
    "start": 1559,
    "end": 1563
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1564,
    "end": 1565
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 1566,
    "end": 1567
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 1568,
    "end": 1569
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 1570,
    "end": 1571
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1571,
    "end": 1572
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1577,
    "end": 1580
  },
  {
    "type": "Identifier",
    "value": "r1d3",
    "start": 1581,
    "end": 1585
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1586,
    "end": 1587
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 1588,
    "end": 1589
  },
  {
    "type": "Punctuator",
    "value": "%",
    "start": 1590,
    "end": 1591
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 1592,
    "end": 1593
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1593,
    "end": 1594
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1599,
    "end": 1602
  },
  {
    "type": "Identifier",
    "value": "r1d4",
    "start": 1603,
    "end": 1607
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1608,
    "end": 1609
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 1610,
    "end": 1611
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 1612,
    "end": 1613
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 1614,
    "end": 1615
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1615,
    "end": 1616
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1621,
    "end": 1624
  },
  {
    "type": "Identifier",
    "value": "r1d5",
    "start": 1625,
    "end": 1629
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1630,
    "end": 1631
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 1632,
    "end": 1633
  },
  {
    "type": "Punctuator",
    "value": "<<",
    "start": 1634,
    "end": 1636
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 1637,
    "end": 1638
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1638,
    "end": 1639
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1644,
    "end": 1647
  },
  {
    "type": "Identifier",
    "value": "r1d6",
    "start": 1648,
    "end": 1652
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1653,
    "end": 1654
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 1655,
    "end": 1656
  },
  {
    "type": "Punctuator",
    "value": ">>",
    "start": 1657,
    "end": 1659
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 1660,
    "end": 1661
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1661,
    "end": 1662
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1667,
    "end": 1670
  },
  {
    "type": "Identifier",
    "value": "r1d7",
    "start": 1671,
    "end": 1675
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1676,
    "end": 1677
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 1678,
    "end": 1679
  },
  {
    "type": "Punctuator",
    "value": ">>>",
    "start": 1680,
    "end": 1683
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 1684,
    "end": 1685
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1685,
    "end": 1686
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1691,
    "end": 1694
  },
  {
    "type": "Identifier",
    "value": "r1d8",
    "start": 1695,
    "end": 1699
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1700,
    "end": 1701
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 1702,
    "end": 1703
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 1704,
    "end": 1705
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 1706,
    "end": 1707
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1707,
    "end": 1708
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1713,
    "end": 1716
  },
  {
    "type": "Identifier",
    "value": "r1d9",
    "start": 1717,
    "end": 1721
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1722,
    "end": 1723
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 1724,
    "end": 1725
  },
  {
    "type": "Punctuator",
    "value": "^",
    "start": 1726,
    "end": 1727
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 1728,
    "end": 1729
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1729,
    "end": 1730
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1735,
    "end": 1738
  },
  {
    "type": "Identifier",
    "value": "r1d10",
    "start": 1739,
    "end": 1744
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1745,
    "end": 1746
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 1747,
    "end": 1748
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1749,
    "end": 1750
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 1751,
    "end": 1752
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1752,
    "end": 1753
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1759,
    "end": 1762
  },
  {
    "type": "Identifier",
    "value": "r2d1",
    "start": 1763,
    "end": 1767
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1768,
    "end": 1769
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 1770,
    "end": 1771
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 1772,
    "end": 1773
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 1774,
    "end": 1775
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1775,
    "end": 1776
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1781,
    "end": 1784
  },
  {
    "type": "Identifier",
    "value": "r2d2",
    "start": 1785,
    "end": 1789
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1790,
    "end": 1791
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 1792,
    "end": 1793
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 1794,
    "end": 1795
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 1796,
    "end": 1797
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1797,
    "end": 1798
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1803,
    "end": 1806
  },
  {
    "type": "Identifier",
    "value": "r2d3",
    "start": 1807,
    "end": 1811
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1812,
    "end": 1813
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 1814,
    "end": 1815
  },
  {
    "type": "Punctuator",
    "value": "%",
    "start": 1816,
    "end": 1817
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 1818,
    "end": 1819
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1819,
    "end": 1820
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1825,
    "end": 1828
  },
  {
    "type": "Identifier",
    "value": "r2d4",
    "start": 1829,
    "end": 1833
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1834,
    "end": 1835
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 1836,
    "end": 1837
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 1838,
    "end": 1839
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 1840,
    "end": 1841
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1841,
    "end": 1842
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1847,
    "end": 1850
  },
  {
    "type": "Identifier",
    "value": "r2d5",
    "start": 1851,
    "end": 1855
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1856,
    "end": 1857
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 1858,
    "end": 1859
  },
  {
    "type": "Punctuator",
    "value": "<<",
    "start": 1860,
    "end": 1862
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 1863,
    "end": 1864
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1864,
    "end": 1865
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1870,
    "end": 1873
  },
  {
    "type": "Identifier",
    "value": "r2d6",
    "start": 1874,
    "end": 1878
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1879,
    "end": 1880
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 1881,
    "end": 1882
  },
  {
    "type": "Punctuator",
    "value": ">>",
    "start": 1883,
    "end": 1885
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 1886,
    "end": 1887
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1887,
    "end": 1888
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1893,
    "end": 1896
  },
  {
    "type": "Identifier",
    "value": "r2d7",
    "start": 1897,
    "end": 1901
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1902,
    "end": 1903
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 1904,
    "end": 1905
  },
  {
    "type": "Punctuator",
    "value": ">>>",
    "start": 1906,
    "end": 1909
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 1910,
    "end": 1911
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1911,
    "end": 1912
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1917,
    "end": 1920
  },
  {
    "type": "Identifier",
    "value": "r2d8",
    "start": 1921,
    "end": 1925
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1926,
    "end": 1927
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 1928,
    "end": 1929
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 1930,
    "end": 1931
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 1932,
    "end": 1933
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1933,
    "end": 1934
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1939,
    "end": 1942
  },
  {
    "type": "Identifier",
    "value": "r2d9",
    "start": 1943,
    "end": 1947
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1948,
    "end": 1949
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 1950,
    "end": 1951
  },
  {
    "type": "Punctuator",
    "value": "^",
    "start": 1952,
    "end": 1953
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 1954,
    "end": 1955
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1955,
    "end": 1956
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1961,
    "end": 1964
  },
  {
    "type": "Identifier",
    "value": "r2d10",
    "start": 1965,
    "end": 1970
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1971,
    "end": 1972
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 1973,
    "end": 1974
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1975,
    "end": 1976
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 1977,
    "end": 1978
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1978,
    "end": 1979
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1985,
    "end": 1988
  },
  {
    "type": "Identifier",
    "value": "r1e1",
    "start": 1989,
    "end": 1993
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1994,
    "end": 1995
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 1996,
    "end": 1997
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 1998,
    "end": 1999
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 2000,
    "end": 2001
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2001,
    "end": 2002
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2007,
    "end": 2010
  },
  {
    "type": "Identifier",
    "value": "r1e2",
    "start": 2011,
    "end": 2015
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2016,
    "end": 2017
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 2018,
    "end": 2019
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 2020,
    "end": 2021
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 2022,
    "end": 2023
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2023,
    "end": 2024
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2029,
    "end": 2032
  },
  {
    "type": "Identifier",
    "value": "r1e3",
    "start": 2033,
    "end": 2037
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2038,
    "end": 2039
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 2040,
    "end": 2041
  },
  {
    "type": "Punctuator",
    "value": "%",
    "start": 2042,
    "end": 2043
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 2044,
    "end": 2045
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2045,
    "end": 2046
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2051,
    "end": 2054
  },
  {
    "type": "Identifier",
    "value": "r1e4",
    "start": 2055,
    "end": 2059
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2060,
    "end": 2061
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 2062,
    "end": 2063
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 2064,
    "end": 2065
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 2066,
    "end": 2067
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2067,
    "end": 2068
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2073,
    "end": 2076
  },
  {
    "type": "Identifier",
    "value": "r1e5",
    "start": 2077,
    "end": 2081
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2082,
    "end": 2083
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 2084,
    "end": 2085
  },
  {
    "type": "Punctuator",
    "value": "<<",
    "start": 2086,
    "end": 2088
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 2089,
    "end": 2090
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2090,
    "end": 2091
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2096,
    "end": 2099
  },
  {
    "type": "Identifier",
    "value": "r1e6",
    "start": 2100,
    "end": 2104
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2105,
    "end": 2106
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 2107,
    "end": 2108
  },
  {
    "type": "Punctuator",
    "value": ">>",
    "start": 2109,
    "end": 2111
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 2112,
    "end": 2113
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2113,
    "end": 2114
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2119,
    "end": 2122
  },
  {
    "type": "Identifier",
    "value": "r1e7",
    "start": 2123,
    "end": 2127
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2128,
    "end": 2129
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 2130,
    "end": 2131
  },
  {
    "type": "Punctuator",
    "value": ">>>",
    "start": 2132,
    "end": 2135
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 2136,
    "end": 2137
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2137,
    "end": 2138
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2143,
    "end": 2146
  },
  {
    "type": "Identifier",
    "value": "r1e8",
    "start": 2147,
    "end": 2151
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2152,
    "end": 2153
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 2154,
    "end": 2155
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 2156,
    "end": 2157
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 2158,
    "end": 2159
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2159,
    "end": 2160
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2165,
    "end": 2168
  },
  {
    "type": "Identifier",
    "value": "r1e9",
    "start": 2169,
    "end": 2173
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2174,
    "end": 2175
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 2176,
    "end": 2177
  },
  {
    "type": "Punctuator",
    "value": "^",
    "start": 2178,
    "end": 2179
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 2180,
    "end": 2181
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2181,
    "end": 2182
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2187,
    "end": 2190
  },
  {
    "type": "Identifier",
    "value": "r1e10",
    "start": 2191,
    "end": 2196
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2197,
    "end": 2198
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 2199,
    "end": 2200
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2201,
    "end": 2202
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 2203,
    "end": 2204
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2204,
    "end": 2205
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2211,
    "end": 2214
  },
  {
    "type": "Identifier",
    "value": "r2e1",
    "start": 2215,
    "end": 2219
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2220,
    "end": 2221
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 2222,
    "end": 2223
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 2224,
    "end": 2225
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 2226,
    "end": 2227
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2227,
    "end": 2228
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2233,
    "end": 2236
  },
  {
    "type": "Identifier",
    "value": "r2e2",
    "start": 2237,
    "end": 2241
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2242,
    "end": 2243
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 2244,
    "end": 2245
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 2246,
    "end": 2247
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 2248,
    "end": 2249
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2249,
    "end": 2250
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2255,
    "end": 2258
  },
  {
    "type": "Identifier",
    "value": "r2e3",
    "start": 2259,
    "end": 2263
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2264,
    "end": 2265
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 2266,
    "end": 2267
  },
  {
    "type": "Punctuator",
    "value": "%",
    "start": 2268,
    "end": 2269
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 2270,
    "end": 2271
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2271,
    "end": 2272
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2277,
    "end": 2280
  },
  {
    "type": "Identifier",
    "value": "r2e4",
    "start": 2281,
    "end": 2285
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2286,
    "end": 2287
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 2288,
    "end": 2289
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 2290,
    "end": 2291
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 2292,
    "end": 2293
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2293,
    "end": 2294
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2299,
    "end": 2302
  },
  {
    "type": "Identifier",
    "value": "r2e5",
    "start": 2303,
    "end": 2307
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2308,
    "end": 2309
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 2310,
    "end": 2311
  },
  {
    "type": "Punctuator",
    "value": "<<",
    "start": 2312,
    "end": 2314
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 2315,
    "end": 2316
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2316,
    "end": 2317
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2322,
    "end": 2325
  },
  {
    "type": "Identifier",
    "value": "r2e6",
    "start": 2326,
    "end": 2330
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2331,
    "end": 2332
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 2333,
    "end": 2334
  },
  {
    "type": "Punctuator",
    "value": ">>",
    "start": 2335,
    "end": 2337
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 2338,
    "end": 2339
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2339,
    "end": 2340
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2345,
    "end": 2348
  },
  {
    "type": "Identifier",
    "value": "r2e7",
    "start": 2349,
    "end": 2353
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2354,
    "end": 2355
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 2356,
    "end": 2357
  },
  {
    "type": "Punctuator",
    "value": ">>>",
    "start": 2358,
    "end": 2361
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 2362,
    "end": 2363
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2363,
    "end": 2364
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2369,
    "end": 2372
  },
  {
    "type": "Identifier",
    "value": "r2e8",
    "start": 2373,
    "end": 2377
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2378,
    "end": 2379
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 2380,
    "end": 2381
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 2382,
    "end": 2383
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 2384,
    "end": 2385
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2385,
    "end": 2386
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2391,
    "end": 2394
  },
  {
    "type": "Identifier",
    "value": "r2e9",
    "start": 2395,
    "end": 2399
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2400,
    "end": 2401
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 2402,
    "end": 2403
  },
  {
    "type": "Punctuator",
    "value": "^",
    "start": 2404,
    "end": 2405
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 2406,
    "end": 2407
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2407,
    "end": 2408
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2413,
    "end": 2416
  },
  {
    "type": "Identifier",
    "value": "r2e10",
    "start": 2417,
    "end": 2422
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2423,
    "end": 2424
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 2425,
    "end": 2426
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2427,
    "end": 2428
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 2429,
    "end": 2430
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2430,
    "end": 2431
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2437,
    "end": 2440
  },
  {
    "type": "Identifier",
    "value": "r1f1",
    "start": 2441,
    "end": 2445
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2446,
    "end": 2447
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 2448,
    "end": 2449
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 2450,
    "end": 2451
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 2452,
    "end": 2453
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2453,
    "end": 2454
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2459,
    "end": 2462
  },
  {
    "type": "Identifier",
    "value": "r1f2",
    "start": 2463,
    "end": 2467
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2468,
    "end": 2469
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 2470,
    "end": 2471
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 2472,
    "end": 2473
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 2474,
    "end": 2475
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2475,
    "end": 2476
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2481,
    "end": 2484
  },
  {
    "type": "Identifier",
    "value": "r1f3",
    "start": 2485,
    "end": 2489
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2490,
    "end": 2491
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 2492,
    "end": 2493
  },
  {
    "type": "Punctuator",
    "value": "%",
    "start": 2494,
    "end": 2495
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 2496,
    "end": 2497
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2497,
    "end": 2498
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2503,
    "end": 2506
  },
  {
    "type": "Identifier",
    "value": "r1f4",
    "start": 2507,
    "end": 2511
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2512,
    "end": 2513
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 2514,
    "end": 2515
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 2516,
    "end": 2517
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 2518,
    "end": 2519
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2519,
    "end": 2520
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2525,
    "end": 2528
  },
  {
    "type": "Identifier",
    "value": "r1f5",
    "start": 2529,
    "end": 2533
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2534,
    "end": 2535
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 2536,
    "end": 2537
  },
  {
    "type": "Punctuator",
    "value": "<<",
    "start": 2538,
    "end": 2540
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 2541,
    "end": 2542
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2542,
    "end": 2543
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2548,
    "end": 2551
  },
  {
    "type": "Identifier",
    "value": "r1f6",
    "start": 2552,
    "end": 2556
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2557,
    "end": 2558
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 2559,
    "end": 2560
  },
  {
    "type": "Punctuator",
    "value": ">>",
    "start": 2561,
    "end": 2563
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 2564,
    "end": 2565
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2565,
    "end": 2566
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2571,
    "end": 2574
  },
  {
    "type": "Identifier",
    "value": "r1f7",
    "start": 2575,
    "end": 2579
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2580,
    "end": 2581
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 2582,
    "end": 2583
  },
  {
    "type": "Punctuator",
    "value": ">>>",
    "start": 2584,
    "end": 2587
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 2588,
    "end": 2589
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2589,
    "end": 2590
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2595,
    "end": 2598
  },
  {
    "type": "Identifier",
    "value": "r1f8",
    "start": 2599,
    "end": 2603
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2604,
    "end": 2605
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 2606,
    "end": 2607
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 2608,
    "end": 2609
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 2610,
    "end": 2611
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2611,
    "end": 2612
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2617,
    "end": 2620
  },
  {
    "type": "Identifier",
    "value": "r1f9",
    "start": 2621,
    "end": 2625
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2626,
    "end": 2627
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 2628,
    "end": 2629
  },
  {
    "type": "Punctuator",
    "value": "^",
    "start": 2630,
    "end": 2631
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 2632,
    "end": 2633
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2633,
    "end": 2634
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2639,
    "end": 2642
  },
  {
    "type": "Identifier",
    "value": "r1f10",
    "start": 2643,
    "end": 2648
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2649,
    "end": 2650
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 2651,
    "end": 2652
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2653,
    "end": 2654
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 2655,
    "end": 2656
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2656,
    "end": 2657
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2658,
    "end": 2659
  }
]
```
