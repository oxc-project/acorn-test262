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
        "name": "computed",
        "optional": false,
        "typeAnnotation": null,
        "start": 17,
        "end": 25
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "start": 29,
              "end": 35
            },
            "start": 27,
            "end": 35
          },
          "start": 26,
          "end": 35
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 38,
          "end": 44
        },
        "start": 36,
        "end": 44
      },
      "body": null,
      "expression": false,
      "start": 0,
      "end": 45
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "E",
        "optional": false,
        "typeAnnotation": null,
        "start": 52,
        "end": 53
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 60,
              "end": 61
            },
            "initializer": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "computed",
                "optional": false,
                "typeAnnotation": null,
                "start": 64,
                "end": 72
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 73,
                  "end": 74
                }
              ],
              "optional": false,
              "start": 64,
              "end": 75
            },
            "computed": false,
            "start": 60,
            "end": 75
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 81,
              "end": 82
            },
            "initializer": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "computed",
                "optional": false,
                "typeAnnotation": null,
                "start": 85,
                "end": 93
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 94,
                  "end": 95
                }
              ],
              "optional": false,
              "start": 85,
              "end": 96
            },
            "computed": false,
            "start": 81,
            "end": 96
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 102,
              "end": 103
            },
            "initializer": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "computed",
                "optional": false,
                "typeAnnotation": null,
                "start": 106,
                "end": 114
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 115,
                  "end": 116
                }
              ],
              "optional": false,
              "start": 106,
              "end": 117
            },
            "computed": false,
            "start": 102,
            "end": 117
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "D",
              "optional": false,
              "typeAnnotation": null,
              "start": 123,
              "end": 124
            },
            "initializer": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "computed",
                "optional": false,
                "typeAnnotation": null,
                "start": 127,
                "end": 135
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": 3,
                  "raw": "3",
                  "start": 136,
                  "end": 137
                }
              ],
              "optional": false,
              "start": 127,
              "end": 138
            },
            "computed": false,
            "start": 123,
            "end": 138
          }
        ],
        "start": 54,
        "end": 141
      },
      "const": false,
      "declare": false,
      "start": 47,
      "end": 141
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "F",
        "optional": false,
        "typeAnnotation": null,
        "start": 149,
        "end": 150
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 157,
              "end": 158
            },
            "initializer": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "E",
                "optional": false,
                "typeAnnotation": null,
                "start": 161,
                "end": 162
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 163,
                "end": 164
              },
              "optional": false,
              "computed": false,
              "start": 161,
              "end": 164
            },
            "computed": false,
            "start": 157,
            "end": 164
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 170,
              "end": 171
            },
            "initializer": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 174,
              "end": 175
            },
            "computed": false,
            "start": 170,
            "end": 175
          }
        ],
        "start": 151,
        "end": 178
      },
      "const": false,
      "declare": false,
      "start": 144,
      "end": 178
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Flag",
        "optional": false,
        "typeAnnotation": null,
        "start": 186,
        "end": 190
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 197,
              "end": 198
            },
            "initializer": {
              "type": "BinaryExpression",
              "left": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 201,
                "end": 202
              },
              "operator": ">>",
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 206,
                "end": 207
              },
              "start": 201,
              "end": 207
            },
            "computed": false,
            "start": 197,
            "end": 207
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 213,
              "end": 214
            },
            "initializer": {
              "type": "BinaryExpression",
              "left": {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 217,
                "end": 218
              },
              "operator": ">>",
              "right": {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 222,
                "end": 223
              },
              "start": 217,
              "end": 223
            },
            "computed": false,
            "start": 213,
            "end": 223
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 229,
              "end": 230
            },
            "initializer": {
              "type": "BinaryExpression",
              "left": {
                "type": "Literal",
                "value": 3,
                "raw": "3",
                "start": 233,
                "end": 234
              },
              "operator": ">>",
              "right": {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 238,
                "end": 239
              },
              "start": 233,
              "end": 239
            },
            "computed": false,
            "start": 229,
            "end": 239
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "AB",
              "optional": false,
              "typeAnnotation": null,
              "start": 245,
              "end": 247
            },
            "initializer": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 250,
                "end": 251
              },
              "operator": "|",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 254,
                "end": 255
              },
              "start": 250,
              "end": 255
            },
            "computed": false,
            "start": 245,
            "end": 255
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "ABC",
              "optional": false,
              "typeAnnotation": null,
              "start": 261,
              "end": 264
            },
            "initializer": {
              "type": "BinaryExpression",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Flag",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 267,
                  "end": 271
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "AB",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 272,
                  "end": 274
                },
                "optional": false,
                "computed": false,
                "start": 267,
                "end": 274
              },
              "operator": "|",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 277,
                "end": 278
              },
              "start": 267,
              "end": 278
            },
            "computed": false,
            "start": 261,
            "end": 278
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "AC",
              "optional": false,
              "typeAnnotation": null,
              "start": 284,
              "end": 286
            },
            "initializer": {
              "type": "BinaryExpression",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Flag",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 289,
                  "end": 293
                },
                "property": {
                  "type": "Literal",
                  "value": "A",
                  "raw": "\"A\"",
                  "start": 294,
                  "end": 297
                },
                "optional": false,
                "computed": true,
                "start": 289,
                "end": 298
              },
              "operator": "|",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 301,
                "end": 302
              },
              "start": 289,
              "end": 302
            },
            "computed": false,
            "start": 284,
            "end": 302
          }
        ],
        "start": 191,
        "end": 305
      },
      "const": false,
      "declare": false,
      "start": 181,
      "end": 305
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
            "name": "EV",
            "optional": false,
            "typeAnnotation": null,
            "start": 313,
            "end": 315
          },
          "init": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 318,
            "end": 319
          },
          "definite": false,
          "start": 313,
          "end": 319
        }
      ],
      "declare": false,
      "start": 307,
      "end": 320
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ExtFlags",
        "optional": false,
        "typeAnnotation": null,
        "start": 326,
        "end": 334
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "D",
              "optional": false,
              "typeAnnotation": null,
              "start": 341,
              "end": 342
            },
            "initializer": {
              "type": "BinaryExpression",
              "left": {
                "type": "Literal",
                "value": 4,
                "raw": "4",
                "start": 345,
                "end": 346
              },
              "operator": ">>",
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 350,
                "end": 351
              },
              "start": 345,
              "end": 351
            },
            "computed": false,
            "start": 341,
            "end": 351
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "E",
              "optional": false,
              "typeAnnotation": null,
              "start": 357,
              "end": 358
            },
            "initializer": {
              "type": "Identifier",
              "decorators": [],
              "name": "EV",
              "optional": false,
              "typeAnnotation": null,
              "start": 361,
              "end": 363
            },
            "computed": false,
            "start": 357,
            "end": 363
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "ABCD",
              "optional": false,
              "typeAnnotation": null,
              "start": 369,
              "end": 373
            },
            "initializer": {
              "type": "BinaryExpression",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Flag",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 376,
                  "end": 380
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ABC",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 381,
                  "end": 384
                },
                "optional": false,
                "computed": false,
                "start": 376,
                "end": 384
              },
              "operator": "|",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "D",
                "optional": false,
                "typeAnnotation": null,
                "start": 387,
                "end": 388
              },
              "start": 376,
              "end": 388
            },
            "computed": false,
            "start": 369,
            "end": 388
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "AC",
              "optional": false,
              "typeAnnotation": null,
              "start": 394,
              "end": 396
            },
            "initializer": {
              "type": "BinaryExpression",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Flag",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 399,
                  "end": 403
                },
                "property": {
                  "type": "Literal",
                  "value": "A",
                  "raw": "\"A\"",
                  "start": 404,
                  "end": 407
                },
                "optional": false,
                "computed": true,
                "start": 399,
                "end": 408
              },
              "operator": "|",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "D",
                "optional": false,
                "typeAnnotation": null,
                "start": 411,
                "end": 412
              },
              "start": 399,
              "end": 412
            },
            "computed": false,
            "start": 394,
            "end": 412
          }
        ],
        "start": 335,
        "end": 415
      },
      "const": false,
      "declare": false,
      "start": 321,
      "end": 415
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Str",
        "optional": false,
        "typeAnnotation": null,
        "start": 423,
        "end": 426
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 433,
              "end": 434
            },
            "initializer": {
              "type": "Literal",
              "value": "A",
              "raw": "\"A\"",
              "start": 437,
              "end": 440
            },
            "computed": false,
            "start": 433,
            "end": 440
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 446,
              "end": 447
            },
            "initializer": {
              "type": "Literal",
              "value": "B",
              "raw": "\"B\"",
              "start": 450,
              "end": 453
            },
            "computed": false,
            "start": 446,
            "end": 453
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "AB",
              "optional": false,
              "typeAnnotation": null,
              "start": 459,
              "end": 461
            },
            "initializer": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 464,
                "end": 465
              },
              "operator": "+",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 468,
                "end": 469
              },
              "start": 464,
              "end": 469
            },
            "computed": false,
            "start": 459,
            "end": 469
          }
        ],
        "start": 427,
        "end": 471
      },
      "const": false,
      "declare": false,
      "start": 418,
      "end": 471
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "StrExt",
        "optional": false,
        "typeAnnotation": null,
        "start": 479,
        "end": 485
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "D",
              "optional": false,
              "typeAnnotation": null,
              "start": 492,
              "end": 493
            },
            "initializer": {
              "type": "Literal",
              "value": "D",
              "raw": "\"D\"",
              "start": 496,
              "end": 499
            },
            "computed": false,
            "start": 492,
            "end": 499
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "ABD",
              "optional": false,
              "typeAnnotation": null,
              "start": 505,
              "end": 508
            },
            "initializer": {
              "type": "BinaryExpression",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Str",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 511,
                  "end": 514
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "AB",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 515,
                  "end": 517
                },
                "optional": false,
                "computed": false,
                "start": 511,
                "end": 517
              },
              "operator": "+",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "D",
                "optional": false,
                "typeAnnotation": null,
                "start": 520,
                "end": 521
              },
              "start": 511,
              "end": 521
            },
            "computed": false,
            "start": 505,
            "end": 521
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "AD",
              "optional": false,
              "typeAnnotation": null,
              "start": 527,
              "end": 529
            },
            "initializer": {
              "type": "BinaryExpression",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Str",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 532,
                  "end": 535
                },
                "property": {
                  "type": "Literal",
                  "value": "A",
                  "raw": "\"A\"",
                  "start": 536,
                  "end": 539
                },
                "optional": false,
                "computed": true,
                "start": 532,
                "end": 540
              },
              "operator": "+",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "D",
                "optional": false,
                "typeAnnotation": null,
                "start": 543,
                "end": 544
              },
              "start": 532,
              "end": 544
            },
            "computed": false,
            "start": 527,
            "end": 544
          }
        ],
        "start": 486,
        "end": 547
      },
      "const": false,
      "declare": false,
      "start": 474,
      "end": 547
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 547
}
```
