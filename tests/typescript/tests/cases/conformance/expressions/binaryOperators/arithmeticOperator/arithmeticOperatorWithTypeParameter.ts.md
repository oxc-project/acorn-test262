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
