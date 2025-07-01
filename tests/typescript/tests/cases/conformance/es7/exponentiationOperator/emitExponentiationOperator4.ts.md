__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
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
            "name": "temp",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 10,
                "end": 13
              },
              "start": 8,
              "end": 13
            },
            "start": 4,
            "end": 13
          },
          "init": null,
          "definite": false,
          "start": 4,
          "end": 13
        }
      ],
      "declare": false,
      "start": 0,
      "end": 14
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "TSTypeAssertion",
          "typeAnnotation": {
            "type": "TSNumberKeyword",
            "start": 18,
            "end": 24
          },
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "temp",
            "optional": false,
            "typeAnnotation": null,
            "start": 25,
            "end": 29
          },
          "start": 17,
          "end": 29
        },
        "operator": "**",
        "right": {
          "type": "Literal",
          "value": 3,
          "raw": "3",
          "start": 34,
          "end": 35
        },
        "start": 16,
        "end": 35
      },
      "directive": null,
      "start": 16,
      "end": 36
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "TSTypeAssertion",
          "typeAnnotation": {
            "type": "TSNumberKeyword",
            "start": 39,
            "end": 45
          },
          "expression": {
            "type": "UpdateExpression",
            "operator": "--",
            "prefix": true,
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "temp",
              "optional": false,
              "typeAnnotation": null,
              "start": 48,
              "end": 52
            },
            "start": 46,
            "end": 52
          },
          "start": 38,
          "end": 52
        },
        "operator": "**",
        "right": {
          "type": "Literal",
          "value": 3,
          "raw": "3",
          "start": 57,
          "end": 58
        },
        "start": 37,
        "end": 58
      },
      "directive": null,
      "start": 37,
      "end": 59
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "TSTypeAssertion",
          "typeAnnotation": {
            "type": "TSNumberKeyword",
            "start": 62,
            "end": 68
          },
          "expression": {
            "type": "UpdateExpression",
            "operator": "++",
            "prefix": true,
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "temp",
              "optional": false,
              "typeAnnotation": null,
              "start": 71,
              "end": 75
            },
            "start": 69,
            "end": 75
          },
          "start": 61,
          "end": 75
        },
        "operator": "**",
        "right": {
          "type": "Literal",
          "value": 3,
          "raw": "3",
          "start": 80,
          "end": 81
        },
        "start": 60,
        "end": 81
      },
      "directive": null,
      "start": 60,
      "end": 82
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "TSTypeAssertion",
          "typeAnnotation": {
            "type": "TSNumberKeyword",
            "start": 85,
            "end": 91
          },
          "expression": {
            "type": "UpdateExpression",
            "operator": "--",
            "prefix": false,
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "temp",
              "optional": false,
              "typeAnnotation": null,
              "start": 92,
              "end": 96
            },
            "start": 92,
            "end": 98
          },
          "start": 84,
          "end": 98
        },
        "operator": "**",
        "right": {
          "type": "Literal",
          "value": 3,
          "raw": "3",
          "start": 103,
          "end": 104
        },
        "start": 83,
        "end": 104
      },
      "directive": null,
      "start": 83,
      "end": 105
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "TSTypeAssertion",
          "typeAnnotation": {
            "type": "TSNumberKeyword",
            "start": 108,
            "end": 114
          },
          "expression": {
            "type": "UpdateExpression",
            "operator": "++",
            "prefix": false,
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "temp",
              "optional": false,
              "typeAnnotation": null,
              "start": 115,
              "end": 119
            },
            "start": 115,
            "end": 121
          },
          "start": 107,
          "end": 121
        },
        "operator": "**",
        "right": {
          "type": "Literal",
          "value": 3,
          "raw": "3",
          "start": 126,
          "end": 127
        },
        "start": 106,
        "end": 127
      },
      "directive": null,
      "start": 106,
      "end": 128
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 130,
          "end": 131
        },
        "operator": "**",
        "right": {
          "type": "BinaryExpression",
          "left": {
            "type": "TSTypeAssertion",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 137,
              "end": 143
            },
            "expression": {
              "type": "UpdateExpression",
              "operator": "--",
              "prefix": true,
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "temp",
                "optional": false,
                "typeAnnotation": null,
                "start": 146,
                "end": 150
              },
              "start": 144,
              "end": 150
            },
            "start": 136,
            "end": 150
          },
          "operator": "**",
          "right": {
            "type": "Literal",
            "value": 3,
            "raw": "3",
            "start": 155,
            "end": 156
          },
          "start": 135,
          "end": 156
        },
        "start": 130,
        "end": 156
      },
      "directive": null,
      "start": 130,
      "end": 157
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 158,
          "end": 159
        },
        "operator": "**",
        "right": {
          "type": "BinaryExpression",
          "left": {
            "type": "TSTypeAssertion",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 165,
              "end": 171
            },
            "expression": {
              "type": "UpdateExpression",
              "operator": "++",
              "prefix": true,
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "temp",
                "optional": false,
                "typeAnnotation": null,
                "start": 174,
                "end": 178
              },
              "start": 172,
              "end": 178
            },
            "start": 164,
            "end": 178
          },
          "operator": "**",
          "right": {
            "type": "Literal",
            "value": 3,
            "raw": "3",
            "start": 183,
            "end": 184
          },
          "start": 163,
          "end": 184
        },
        "start": 158,
        "end": 184
      },
      "directive": null,
      "start": 158,
      "end": 185
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 186,
          "end": 187
        },
        "operator": "**",
        "right": {
          "type": "BinaryExpression",
          "left": {
            "type": "TSTypeAssertion",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 193,
              "end": 199
            },
            "expression": {
              "type": "UpdateExpression",
              "operator": "--",
              "prefix": false,
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "temp",
                "optional": false,
                "typeAnnotation": null,
                "start": 200,
                "end": 204
              },
              "start": 200,
              "end": 206
            },
            "start": 192,
            "end": 206
          },
          "operator": "**",
          "right": {
            "type": "Literal",
            "value": 3,
            "raw": "3",
            "start": 211,
            "end": 212
          },
          "start": 191,
          "end": 212
        },
        "start": 186,
        "end": 212
      },
      "directive": null,
      "start": 186,
      "end": 213
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 214,
          "end": 215
        },
        "operator": "**",
        "right": {
          "type": "BinaryExpression",
          "left": {
            "type": "TSTypeAssertion",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 221,
              "end": 227
            },
            "expression": {
              "type": "UpdateExpression",
              "operator": "++",
              "prefix": false,
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "temp",
                "optional": false,
                "typeAnnotation": null,
                "start": 228,
                "end": 232
              },
              "start": 228,
              "end": 234
            },
            "start": 220,
            "end": 234
          },
          "operator": "**",
          "right": {
            "type": "Literal",
            "value": 3,
            "raw": "3",
            "start": 239,
            "end": 240
          },
          "start": 219,
          "end": 240
        },
        "start": 214,
        "end": 240
      },
      "directive": null,
      "start": 214,
      "end": 241
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "UnaryExpression",
          "operator": "void",
          "argument": {
            "type": "UpdateExpression",
            "operator": "--",
            "prefix": true,
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "temp",
              "optional": false,
              "typeAnnotation": null,
              "start": 251,
              "end": 255
            },
            "start": 249,
            "end": 255
          },
          "prefix": true,
          "start": 244,
          "end": 255
        },
        "operator": "**",
        "right": {
          "type": "Literal",
          "value": 3,
          "raw": "3",
          "start": 260,
          "end": 261
        },
        "start": 243,
        "end": 261
      },
      "directive": null,
      "start": 243,
      "end": 262
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "UnaryExpression",
          "operator": "void",
          "argument": {
            "type": "UpdateExpression",
            "operator": "--",
            "prefix": false,
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "temp",
              "optional": false,
              "typeAnnotation": null,
              "start": 269,
              "end": 273
            },
            "start": 269,
            "end": 275
          },
          "prefix": true,
          "start": 264,
          "end": 275
        },
        "operator": "**",
        "right": {
          "type": "Literal",
          "value": 3,
          "raw": "3",
          "start": 280,
          "end": 281
        },
        "start": 263,
        "end": 281
      },
      "directive": null,
      "start": 263,
      "end": 282
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "UnaryExpression",
          "operator": "void",
          "argument": {
            "type": "Literal",
            "value": 3,
            "raw": "3",
            "start": 289,
            "end": 290
          },
          "prefix": true,
          "start": 284,
          "end": 290
        },
        "operator": "**",
        "right": {
          "type": "Literal",
          "value": 4,
          "raw": "4",
          "start": 295,
          "end": 296
        },
        "start": 283,
        "end": 296
      },
      "directive": null,
      "start": 283,
      "end": 297
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "UnaryExpression",
          "operator": "void",
          "argument": {
            "type": "UpdateExpression",
            "operator": "++",
            "prefix": false,
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "temp",
              "optional": false,
              "typeAnnotation": null,
              "start": 304,
              "end": 308
            },
            "start": 304,
            "end": 310
          },
          "prefix": true,
          "start": 299,
          "end": 310
        },
        "operator": "**",
        "right": {
          "type": "Literal",
          "value": 4,
          "raw": "4",
          "start": 315,
          "end": 316
        },
        "start": 298,
        "end": 316
      },
      "directive": null,
      "start": 298,
      "end": 317
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "UnaryExpression",
          "operator": "void",
          "argument": {
            "type": "UpdateExpression",
            "operator": "--",
            "prefix": false,
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "temp",
              "optional": false,
              "typeAnnotation": null,
              "start": 324,
              "end": 328
            },
            "start": 324,
            "end": 330
          },
          "prefix": true,
          "start": 319,
          "end": 330
        },
        "operator": "**",
        "right": {
          "type": "Literal",
          "value": 4,
          "raw": "4",
          "start": 335,
          "end": 336
        },
        "start": 318,
        "end": 336
      },
      "directive": null,
      "start": 318,
      "end": 337
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 340,
          "end": 341
        },
        "operator": "**",
        "right": {
          "type": "BinaryExpression",
          "left": {
            "type": "UnaryExpression",
            "operator": "void",
            "argument": {
              "type": "UpdateExpression",
              "operator": "--",
              "prefix": true,
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "temp",
                "optional": false,
                "typeAnnotation": null,
                "start": 353,
                "end": 357
              },
              "start": 351,
              "end": 357
            },
            "prefix": true,
            "start": 346,
            "end": 357
          },
          "operator": "**",
          "right": {
            "type": "Literal",
            "value": 3,
            "raw": "3",
            "start": 362,
            "end": 363
          },
          "start": 345,
          "end": 363
        },
        "start": 340,
        "end": 363
      },
      "directive": null,
      "start": 340,
      "end": 364
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 365,
          "end": 366
        },
        "operator": "**",
        "right": {
          "type": "BinaryExpression",
          "left": {
            "type": "UnaryExpression",
            "operator": "void",
            "argument": {
              "type": "UpdateExpression",
              "operator": "--",
              "prefix": false,
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "temp",
                "optional": false,
                "typeAnnotation": null,
                "start": 376,
                "end": 380
              },
              "start": 376,
              "end": 382
            },
            "prefix": true,
            "start": 371,
            "end": 382
          },
          "operator": "**",
          "right": {
            "type": "Literal",
            "value": 3,
            "raw": "3",
            "start": 387,
            "end": 388
          },
          "start": 370,
          "end": 388
        },
        "start": 365,
        "end": 388
      },
      "directive": null,
      "start": 365,
      "end": 389
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 390,
          "end": 391
        },
        "operator": "**",
        "right": {
          "type": "BinaryExpression",
          "left": {
            "type": "UnaryExpression",
            "operator": "void",
            "argument": {
              "type": "Literal",
              "value": 3,
              "raw": "3",
              "start": 401,
              "end": 402
            },
            "prefix": true,
            "start": 396,
            "end": 402
          },
          "operator": "**",
          "right": {
            "type": "Literal",
            "value": 4,
            "raw": "4",
            "start": 407,
            "end": 408
          },
          "start": 395,
          "end": 408
        },
        "start": 390,
        "end": 408
      },
      "directive": null,
      "start": 390,
      "end": 409
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 410,
          "end": 411
        },
        "operator": "**",
        "right": {
          "type": "BinaryExpression",
          "left": {
            "type": "UnaryExpression",
            "operator": "void",
            "argument": {
              "type": "UpdateExpression",
              "operator": "++",
              "prefix": false,
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "temp",
                "optional": false,
                "typeAnnotation": null,
                "start": 421,
                "end": 425
              },
              "start": 421,
              "end": 427
            },
            "prefix": true,
            "start": 416,
            "end": 427
          },
          "operator": "**",
          "right": {
            "type": "Literal",
            "value": 4,
            "raw": "4",
            "start": 432,
            "end": 433
          },
          "start": 415,
          "end": 433
        },
        "start": 410,
        "end": 433
      },
      "directive": null,
      "start": 410,
      "end": 434
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 435,
          "end": 436
        },
        "operator": "**",
        "right": {
          "type": "BinaryExpression",
          "left": {
            "type": "UnaryExpression",
            "operator": "void",
            "argument": {
              "type": "UpdateExpression",
              "operator": "--",
              "prefix": false,
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "temp",
                "optional": false,
                "typeAnnotation": null,
                "start": 446,
                "end": 450
              },
              "start": 446,
              "end": 452
            },
            "prefix": true,
            "start": 441,
            "end": 452
          },
          "operator": "**",
          "right": {
            "type": "Literal",
            "value": 4,
            "raw": "4",
            "start": 457,
            "end": 458
          },
          "start": 440,
          "end": 458
        },
        "start": 435,
        "end": 458
      },
      "directive": null,
      "start": 435,
      "end": 459
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "UnaryExpression",
          "operator": "~",
          "argument": {
            "type": "UpdateExpression",
            "operator": "--",
            "prefix": true,
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "temp",
              "optional": false,
              "typeAnnotation": null,
              "start": 466,
              "end": 470
            },
            "start": 464,
            "end": 470
          },
          "prefix": true,
          "start": 462,
          "end": 470
        },
        "operator": "**",
        "right": {
          "type": "Literal",
          "value": 3,
          "raw": "3",
          "start": 475,
          "end": 476
        },
        "start": 461,
        "end": 476
      },
      "directive": null,
      "start": 461,
      "end": 477
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "UnaryExpression",
          "operator": "~",
          "argument": {
            "type": "UpdateExpression",
            "operator": "--",
            "prefix": false,
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "temp",
              "optional": false,
              "typeAnnotation": null,
              "start": 481,
              "end": 485
            },
            "start": 481,
            "end": 487
          },
          "prefix": true,
          "start": 479,
          "end": 487
        },
        "operator": "**",
        "right": {
          "type": "Literal",
          "value": 3,
          "raw": "3",
          "start": 492,
          "end": 493
        },
        "start": 478,
        "end": 493
      },
      "directive": null,
      "start": 478,
      "end": 494
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "UnaryExpression",
          "operator": "~",
          "argument": {
            "type": "Literal",
            "value": 3,
            "raw": "3",
            "start": 498,
            "end": 499
          },
          "prefix": true,
          "start": 496,
          "end": 499
        },
        "operator": "**",
        "right": {
          "type": "Literal",
          "value": 4,
          "raw": "4",
          "start": 504,
          "end": 505
        },
        "start": 495,
        "end": 505
      },
      "directive": null,
      "start": 495,
      "end": 506
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "UnaryExpression",
          "operator": "~",
          "argument": {
            "type": "UpdateExpression",
            "operator": "++",
            "prefix": false,
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "temp",
              "optional": false,
              "typeAnnotation": null,
              "start": 510,
              "end": 514
            },
            "start": 510,
            "end": 516
          },
          "prefix": true,
          "start": 508,
          "end": 516
        },
        "operator": "**",
        "right": {
          "type": "Literal",
          "value": 4,
          "raw": "4",
          "start": 521,
          "end": 522
        },
        "start": 507,
        "end": 522
      },
      "directive": null,
      "start": 507,
      "end": 523
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "UnaryExpression",
          "operator": "~",
          "argument": {
            "type": "UpdateExpression",
            "operator": "--",
            "prefix": false,
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "temp",
              "optional": false,
              "typeAnnotation": null,
              "start": 527,
              "end": 531
            },
            "start": 527,
            "end": 533
          },
          "prefix": true,
          "start": 525,
          "end": 533
        },
        "operator": "**",
        "right": {
          "type": "Literal",
          "value": 4,
          "raw": "4",
          "start": 538,
          "end": 539
        },
        "start": 524,
        "end": 539
      },
      "directive": null,
      "start": 524,
      "end": 540
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 542,
          "end": 543
        },
        "operator": "**",
        "right": {
          "type": "BinaryExpression",
          "left": {
            "type": "UnaryExpression",
            "operator": "~",
            "argument": {
              "type": "UpdateExpression",
              "operator": "--",
              "prefix": true,
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "temp",
                "optional": false,
                "typeAnnotation": null,
                "start": 552,
                "end": 556
              },
              "start": 550,
              "end": 556
            },
            "prefix": true,
            "start": 548,
            "end": 556
          },
          "operator": "**",
          "right": {
            "type": "Literal",
            "value": 3,
            "raw": "3",
            "start": 561,
            "end": 562
          },
          "start": 547,
          "end": 562
        },
        "start": 542,
        "end": 562
      },
      "directive": null,
      "start": 542,
      "end": 563
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 564,
          "end": 565
        },
        "operator": "**",
        "right": {
          "type": "BinaryExpression",
          "left": {
            "type": "UnaryExpression",
            "operator": "~",
            "argument": {
              "type": "UpdateExpression",
              "operator": "--",
              "prefix": false,
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "temp",
                "optional": false,
                "typeAnnotation": null,
                "start": 572,
                "end": 576
              },
              "start": 572,
              "end": 578
            },
            "prefix": true,
            "start": 570,
            "end": 578
          },
          "operator": "**",
          "right": {
            "type": "Literal",
            "value": 3,
            "raw": "3",
            "start": 583,
            "end": 584
          },
          "start": 569,
          "end": 584
        },
        "start": 564,
        "end": 584
      },
      "directive": null,
      "start": 564,
      "end": 585
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 586,
          "end": 587
        },
        "operator": "**",
        "right": {
          "type": "BinaryExpression",
          "left": {
            "type": "UnaryExpression",
            "operator": "~",
            "argument": {
              "type": "Literal",
              "value": 3,
              "raw": "3",
              "start": 594,
              "end": 595
            },
            "prefix": true,
            "start": 592,
            "end": 595
          },
          "operator": "**",
          "right": {
            "type": "Literal",
            "value": 4,
            "raw": "4",
            "start": 600,
            "end": 601
          },
          "start": 591,
          "end": 601
        },
        "start": 586,
        "end": 601
      },
      "directive": null,
      "start": 586,
      "end": 602
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 603,
          "end": 604
        },
        "operator": "**",
        "right": {
          "type": "BinaryExpression",
          "left": {
            "type": "UnaryExpression",
            "operator": "~",
            "argument": {
              "type": "UpdateExpression",
              "operator": "++",
              "prefix": false,
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "temp",
                "optional": false,
                "typeAnnotation": null,
                "start": 611,
                "end": 615
              },
              "start": 611,
              "end": 617
            },
            "prefix": true,
            "start": 609,
            "end": 617
          },
          "operator": "**",
          "right": {
            "type": "Literal",
            "value": 4,
            "raw": "4",
            "start": 622,
            "end": 623
          },
          "start": 608,
          "end": 623
        },
        "start": 603,
        "end": 623
      },
      "directive": null,
      "start": 603,
      "end": 624
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 625,
          "end": 626
        },
        "operator": "**",
        "right": {
          "type": "BinaryExpression",
          "left": {
            "type": "UnaryExpression",
            "operator": "~",
            "argument": {
              "type": "UpdateExpression",
              "operator": "--",
              "prefix": false,
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "temp",
                "optional": false,
                "typeAnnotation": null,
                "start": 633,
                "end": 637
              },
              "start": 633,
              "end": 639
            },
            "prefix": true,
            "start": 631,
            "end": 639
          },
          "operator": "**",
          "right": {
            "type": "Literal",
            "value": 4,
            "raw": "4",
            "start": 644,
            "end": 645
          },
          "start": 630,
          "end": 645
        },
        "start": 625,
        "end": 645
      },
      "directive": null,
      "start": 625,
      "end": 646
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 646
}
```
