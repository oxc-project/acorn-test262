__ESTREE_TEST__:AST:
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
          "type": "UnaryExpression",
          "operator": "!",
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
              "start": 65,
              "end": 69
            },
            "start": 63,
            "end": 69
          },
          "prefix": true,
          "start": 61,
          "end": 69
        },
        "operator": "**",
        "right": {
          "type": "Literal",
          "value": 3,
          "raw": "3",
          "start": 74,
          "end": 75
        },
        "start": 60,
        "end": 75
      },
      "directive": null,
      "start": 60,
      "end": 76
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "UnaryExpression",
          "operator": "!",
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
              "start": 79,
              "end": 83
            },
            "start": 79,
            "end": 85
          },
          "prefix": true,
          "start": 78,
          "end": 85
        },
        "operator": "**",
        "right": {
          "type": "Literal",
          "value": 3,
          "raw": "3",
          "start": 90,
          "end": 91
        },
        "start": 77,
        "end": 91
      },
      "directive": null,
      "start": 77,
      "end": 92
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "UnaryExpression",
          "operator": "!",
          "argument": {
            "type": "Literal",
            "value": 3,
            "raw": "3",
            "start": 95,
            "end": 96
          },
          "prefix": true,
          "start": 94,
          "end": 96
        },
        "operator": "**",
        "right": {
          "type": "Literal",
          "value": 4,
          "raw": "4",
          "start": 101,
          "end": 102
        },
        "start": 93,
        "end": 102
      },
      "directive": null,
      "start": 93,
      "end": 103
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "UnaryExpression",
          "operator": "!",
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
              "start": 106,
              "end": 110
            },
            "start": 106,
            "end": 112
          },
          "prefix": true,
          "start": 105,
          "end": 112
        },
        "operator": "**",
        "right": {
          "type": "Literal",
          "value": 4,
          "raw": "4",
          "start": 117,
          "end": 118
        },
        "start": 104,
        "end": 118
      },
      "directive": null,
      "start": 104,
      "end": 119
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "UnaryExpression",
          "operator": "!",
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
              "start": 122,
              "end": 126
            },
            "start": 122,
            "end": 128
          },
          "prefix": true,
          "start": 121,
          "end": 128
        },
        "operator": "**",
        "right": {
          "type": "Literal",
          "value": 4,
          "raw": "4",
          "start": 133,
          "end": 134
        },
        "start": 120,
        "end": 134
      },
      "directive": null,
      "start": 120,
      "end": 135
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "UnaryExpression",
          "operator": "!",
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
              "start": 142,
              "end": 146
            },
            "start": 140,
            "end": 146
          },
          "prefix": true,
          "start": 138,
          "end": 146
        },
        "operator": "**",
        "right": {
          "type": "BinaryExpression",
          "left": {
            "type": "Literal",
            "value": 3,
            "raw": "3",
            "start": 151,
            "end": 152
          },
          "operator": "**",
          "right": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 156,
            "end": 157
          },
          "start": 151,
          "end": 157
        },
        "start": 137,
        "end": 157
      },
      "directive": null,
      "start": 137,
      "end": 158
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "UnaryExpression",
          "operator": "!",
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
              "start": 161,
              "end": 165
            },
            "start": 161,
            "end": 167
          },
          "prefix": true,
          "start": 160,
          "end": 167
        },
        "operator": "**",
        "right": {
          "type": "BinaryExpression",
          "left": {
            "type": "Literal",
            "value": 3,
            "raw": "3",
            "start": 172,
            "end": 173
          },
          "operator": "**",
          "right": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 177,
            "end": 178
          },
          "start": 172,
          "end": 178
        },
        "start": 159,
        "end": 178
      },
      "directive": null,
      "start": 159,
      "end": 179
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "UnaryExpression",
          "operator": "!",
          "argument": {
            "type": "Literal",
            "value": 3,
            "raw": "3",
            "start": 182,
            "end": 183
          },
          "prefix": true,
          "start": 181,
          "end": 183
        },
        "operator": "**",
        "right": {
          "type": "BinaryExpression",
          "left": {
            "type": "Literal",
            "value": 4,
            "raw": "4",
            "start": 188,
            "end": 189
          },
          "operator": "**",
          "right": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 193,
            "end": 194
          },
          "start": 188,
          "end": 194
        },
        "start": 180,
        "end": 194
      },
      "directive": null,
      "start": 180,
      "end": 195
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "UnaryExpression",
          "operator": "!",
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
              "start": 198,
              "end": 202
            },
            "start": 198,
            "end": 204
          },
          "prefix": true,
          "start": 197,
          "end": 204
        },
        "operator": "**",
        "right": {
          "type": "BinaryExpression",
          "left": {
            "type": "Literal",
            "value": 4,
            "raw": "4",
            "start": 209,
            "end": 210
          },
          "operator": "**",
          "right": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 214,
            "end": 215
          },
          "start": 209,
          "end": 215
        },
        "start": 196,
        "end": 215
      },
      "directive": null,
      "start": 196,
      "end": 216
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "UnaryExpression",
          "operator": "!",
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
              "start": 219,
              "end": 223
            },
            "start": 219,
            "end": 225
          },
          "prefix": true,
          "start": 218,
          "end": 225
        },
        "operator": "**",
        "right": {
          "type": "BinaryExpression",
          "left": {
            "type": "Literal",
            "value": 4,
            "raw": "4",
            "start": 230,
            "end": 231
          },
          "operator": "**",
          "right": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 235,
            "end": 236
          },
          "start": 230,
          "end": 236
        },
        "start": 217,
        "end": 236
      },
      "directive": null,
      "start": 217,
      "end": 237
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "UnaryExpression",
          "operator": "typeof",
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
              "start": 249,
              "end": 253
            },
            "start": 247,
            "end": 253
          },
          "prefix": true,
          "start": 240,
          "end": 253
        },
        "operator": "**",
        "right": {
          "type": "Literal",
          "value": 3,
          "raw": "3",
          "start": 258,
          "end": 259
        },
        "start": 239,
        "end": 259
      },
      "directive": null,
      "start": 239,
      "end": 260
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "UnaryExpression",
          "operator": "typeof",
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
          "start": 262,
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
        "start": 261,
        "end": 281
      },
      "directive": null,
      "start": 261,
      "end": 282
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "UnaryExpression",
          "operator": "typeof",
          "argument": {
            "type": "Literal",
            "value": 3,
            "raw": "3",
            "start": 291,
            "end": 292
          },
          "prefix": true,
          "start": 284,
          "end": 292
        },
        "operator": "**",
        "right": {
          "type": "Literal",
          "value": 4,
          "raw": "4",
          "start": 297,
          "end": 298
        },
        "start": 283,
        "end": 298
      },
      "directive": null,
      "start": 283,
      "end": 299
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "UnaryExpression",
          "operator": "typeof",
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
              "start": 308,
              "end": 312
            },
            "start": 308,
            "end": 314
          },
          "prefix": true,
          "start": 301,
          "end": 314
        },
        "operator": "**",
        "right": {
          "type": "Literal",
          "value": 4,
          "raw": "4",
          "start": 319,
          "end": 320
        },
        "start": 300,
        "end": 320
      },
      "directive": null,
      "start": 300,
      "end": 321
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "UnaryExpression",
          "operator": "typeof",
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
              "start": 330,
              "end": 334
            },
            "start": 330,
            "end": 336
          },
          "prefix": true,
          "start": 323,
          "end": 336
        },
        "operator": "**",
        "right": {
          "type": "Literal",
          "value": 4,
          "raw": "4",
          "start": 341,
          "end": 342
        },
        "start": 322,
        "end": 342
      },
      "directive": null,
      "start": 322,
      "end": 343
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 345,
          "end": 346
        },
        "operator": "**",
        "right": {
          "type": "BinaryExpression",
          "left": {
            "type": "UnaryExpression",
            "operator": "typeof",
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
                "start": 360,
                "end": 364
              },
              "start": 358,
              "end": 364
            },
            "prefix": true,
            "start": 351,
            "end": 364
          },
          "operator": "**",
          "right": {
            "type": "Literal",
            "value": 3,
            "raw": "3",
            "start": 369,
            "end": 370
          },
          "start": 350,
          "end": 370
        },
        "start": 345,
        "end": 370
      },
      "directive": null,
      "start": 345,
      "end": 371
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 372,
          "end": 373
        },
        "operator": "**",
        "right": {
          "type": "BinaryExpression",
          "left": {
            "type": "UnaryExpression",
            "operator": "typeof",
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
                "start": 385,
                "end": 389
              },
              "start": 385,
              "end": 391
            },
            "prefix": true,
            "start": 378,
            "end": 391
          },
          "operator": "**",
          "right": {
            "type": "Literal",
            "value": 3,
            "raw": "3",
            "start": 396,
            "end": 397
          },
          "start": 377,
          "end": 397
        },
        "start": 372,
        "end": 397
      },
      "directive": null,
      "start": 372,
      "end": 398
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 399,
          "end": 400
        },
        "operator": "**",
        "right": {
          "type": "BinaryExpression",
          "left": {
            "type": "UnaryExpression",
            "operator": "typeof",
            "argument": {
              "type": "Literal",
              "value": 3,
              "raw": "3",
              "start": 412,
              "end": 413
            },
            "prefix": true,
            "start": 405,
            "end": 413
          },
          "operator": "**",
          "right": {
            "type": "Literal",
            "value": 4,
            "raw": "4",
            "start": 418,
            "end": 419
          },
          "start": 404,
          "end": 419
        },
        "start": 399,
        "end": 419
      },
      "directive": null,
      "start": 399,
      "end": 420
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 421,
          "end": 422
        },
        "operator": "**",
        "right": {
          "type": "BinaryExpression",
          "left": {
            "type": "UnaryExpression",
            "operator": "typeof",
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
                "start": 434,
                "end": 438
              },
              "start": 434,
              "end": 440
            },
            "prefix": true,
            "start": 427,
            "end": 440
          },
          "operator": "**",
          "right": {
            "type": "Literal",
            "value": 4,
            "raw": "4",
            "start": 445,
            "end": 446
          },
          "start": 426,
          "end": 446
        },
        "start": 421,
        "end": 446
      },
      "directive": null,
      "start": 421,
      "end": 447
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 448,
          "end": 449
        },
        "operator": "**",
        "right": {
          "type": "BinaryExpression",
          "left": {
            "type": "UnaryExpression",
            "operator": "typeof",
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
                "start": 461,
                "end": 465
              },
              "start": 461,
              "end": 467
            },
            "prefix": true,
            "start": 454,
            "end": 467
          },
          "operator": "**",
          "right": {
            "type": "Literal",
            "value": 4,
            "raw": "4",
            "start": 472,
            "end": 473
          },
          "start": 453,
          "end": 473
        },
        "start": 448,
        "end": 473
      },
      "directive": null,
      "start": 448,
      "end": 474
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "UnaryExpression",
          "operator": "delete",
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
              "start": 486,
              "end": 490
            },
            "start": 484,
            "end": 490
          },
          "prefix": true,
          "start": 477,
          "end": 490
        },
        "operator": "**",
        "right": {
          "type": "Literal",
          "value": 3,
          "raw": "3",
          "start": 495,
          "end": 496
        },
        "start": 476,
        "end": 496
      },
      "directive": null,
      "start": 476,
      "end": 497
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "UnaryExpression",
          "operator": "delete",
          "argument": {
            "type": "UpdateExpression",
            "operator": "++",
            "prefix": true,
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "temp",
              "optional": false,
              "typeAnnotation": null,
              "start": 508,
              "end": 512
            },
            "start": 506,
            "end": 512
          },
          "prefix": true,
          "start": 499,
          "end": 512
        },
        "operator": "**",
        "right": {
          "type": "Literal",
          "value": 3,
          "raw": "3",
          "start": 517,
          "end": 518
        },
        "start": 498,
        "end": 518
      },
      "directive": null,
      "start": 498,
      "end": 519
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "UnaryExpression",
          "operator": "delete",
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
              "start": 528,
              "end": 532
            },
            "start": 528,
            "end": 534
          },
          "prefix": true,
          "start": 521,
          "end": 534
        },
        "operator": "**",
        "right": {
          "type": "Literal",
          "value": 3,
          "raw": "3",
          "start": 539,
          "end": 540
        },
        "start": 520,
        "end": 540
      },
      "directive": null,
      "start": 520,
      "end": 541
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "UnaryExpression",
          "operator": "delete",
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
              "start": 550,
              "end": 554
            },
            "start": 550,
            "end": 556
          },
          "prefix": true,
          "start": 543,
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
          "start": 565,
          "end": 566
        },
        "operator": "**",
        "right": {
          "type": "BinaryExpression",
          "left": {
            "type": "UnaryExpression",
            "operator": "delete",
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
                "start": 580,
                "end": 584
              },
              "start": 578,
              "end": 584
            },
            "prefix": true,
            "start": 571,
            "end": 584
          },
          "operator": "**",
          "right": {
            "type": "Literal",
            "value": 3,
            "raw": "3",
            "start": 589,
            "end": 590
          },
          "start": 570,
          "end": 590
        },
        "start": 565,
        "end": 590
      },
      "directive": null,
      "start": 565,
      "end": 591
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 592,
          "end": 593
        },
        "operator": "**",
        "right": {
          "type": "BinaryExpression",
          "left": {
            "type": "UnaryExpression",
            "operator": "delete",
            "argument": {
              "type": "UpdateExpression",
              "operator": "++",
              "prefix": true,
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "temp",
                "optional": false,
                "typeAnnotation": null,
                "start": 607,
                "end": 611
              },
              "start": 605,
              "end": 611
            },
            "prefix": true,
            "start": 598,
            "end": 611
          },
          "operator": "**",
          "right": {
            "type": "Literal",
            "value": 3,
            "raw": "3",
            "start": 616,
            "end": 617
          },
          "start": 597,
          "end": 617
        },
        "start": 592,
        "end": 617
      },
      "directive": null,
      "start": 592,
      "end": 618
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 619,
          "end": 620
        },
        "operator": "**",
        "right": {
          "type": "BinaryExpression",
          "left": {
            "type": "UnaryExpression",
            "operator": "delete",
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
                "start": 632,
                "end": 636
              },
              "start": 632,
              "end": 638
            },
            "prefix": true,
            "start": 625,
            "end": 638
          },
          "operator": "**",
          "right": {
            "type": "Literal",
            "value": 3,
            "raw": "3",
            "start": 643,
            "end": 644
          },
          "start": 624,
          "end": 644
        },
        "start": 619,
        "end": 644
      },
      "directive": null,
      "start": 619,
      "end": 645
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 646,
          "end": 647
        },
        "operator": "**",
        "right": {
          "type": "BinaryExpression",
          "left": {
            "type": "UnaryExpression",
            "operator": "delete",
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
                "start": 659,
                "end": 663
              },
              "start": 659,
              "end": 665
            },
            "prefix": true,
            "start": 652,
            "end": 665
          },
          "operator": "**",
          "right": {
            "type": "Literal",
            "value": 3,
            "raw": "3",
            "start": 670,
            "end": 671
          },
          "start": 651,
          "end": 671
        },
        "start": 646,
        "end": 671
      },
      "directive": null,
      "start": 646,
      "end": 672
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 672
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "var",
    "start": 0,
    "end": 3,
    "range": [
      0,
      3
    ]
  },
  {
    "type": "Identifier",
    "value": "temp",
    "start": 4,
    "end": 8,
    "range": [
      4,
      8
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 8,
    "end": 9,
    "range": [
      8,
      9
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 10,
    "end": 13,
    "range": [
      10,
      13
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 13,
    "end": 14,
    "range": [
      13,
      14
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 60,
    "end": 61,
    "range": [
      60,
      61
    ]
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 61,
    "end": 62,
    "range": [
      61,
      62
    ]
  },
  {
    "type": "Punctuator",
    "value": "--",
    "start": 63,
    "end": 65,
    "range": [
      63,
      65
    ]
  },
  {
    "type": "Identifier",
    "value": "temp",
    "start": 65,
    "end": 69,
    "range": [
      65,
      69
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 69,
    "end": 70,
    "range": [
      69,
      70
    ]
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 71,
    "end": 73,
    "range": [
      71,
      73
    ]
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 74,
    "end": 75,
    "range": [
      74,
      75
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 75,
    "end": 76,
    "range": [
      75,
      76
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 77,
    "end": 78,
    "range": [
      77,
      78
    ]
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 78,
    "end": 79,
    "range": [
      78,
      79
    ]
  },
  {
    "type": "Identifier",
    "value": "temp",
    "start": 79,
    "end": 83,
    "range": [
      79,
      83
    ]
  },
  {
    "type": "Punctuator",
    "value": "--",
    "start": 83,
    "end": 85,
    "range": [
      83,
      85
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 85,
    "end": 86,
    "range": [
      85,
      86
    ]
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 87,
    "end": 89,
    "range": [
      87,
      89
    ]
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 90,
    "end": 91,
    "range": [
      90,
      91
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 91,
    "end": 92,
    "range": [
      91,
      92
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 93,
    "end": 94,
    "range": [
      93,
      94
    ]
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 94,
    "end": 95,
    "range": [
      94,
      95
    ]
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 95,
    "end": 96,
    "range": [
      95,
      96
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 96,
    "end": 97,
    "range": [
      96,
      97
    ]
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 98,
    "end": 100,
    "range": [
      98,
      100
    ]
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 101,
    "end": 102,
    "range": [
      101,
      102
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 102,
    "end": 103,
    "range": [
      102,
      103
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 104,
    "end": 105,
    "range": [
      104,
      105
    ]
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 105,
    "end": 106,
    "range": [
      105,
      106
    ]
  },
  {
    "type": "Identifier",
    "value": "temp",
    "start": 106,
    "end": 110,
    "range": [
      106,
      110
    ]
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 110,
    "end": 112,
    "range": [
      110,
      112
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 112,
    "end": 113,
    "range": [
      112,
      113
    ]
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 114,
    "end": 116,
    "range": [
      114,
      116
    ]
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 117,
    "end": 118,
    "range": [
      117,
      118
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 118,
    "end": 119,
    "range": [
      118,
      119
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 120,
    "end": 121,
    "range": [
      120,
      121
    ]
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 121,
    "end": 122,
    "range": [
      121,
      122
    ]
  },
  {
    "type": "Identifier",
    "value": "temp",
    "start": 122,
    "end": 126,
    "range": [
      122,
      126
    ]
  },
  {
    "type": "Punctuator",
    "value": "--",
    "start": 126,
    "end": 128,
    "range": [
      126,
      128
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 128,
    "end": 129,
    "range": [
      128,
      129
    ]
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 130,
    "end": 132,
    "range": [
      130,
      132
    ]
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 133,
    "end": 134,
    "range": [
      133,
      134
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 134,
    "end": 135,
    "range": [
      134,
      135
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 137,
    "end": 138,
    "range": [
      137,
      138
    ]
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 138,
    "end": 139,
    "range": [
      138,
      139
    ]
  },
  {
    "type": "Punctuator",
    "value": "--",
    "start": 140,
    "end": 142,
    "range": [
      140,
      142
    ]
  },
  {
    "type": "Identifier",
    "value": "temp",
    "start": 142,
    "end": 146,
    "range": [
      142,
      146
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 146,
    "end": 147,
    "range": [
      146,
      147
    ]
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 148,
    "end": 150,
    "range": [
      148,
      150
    ]
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 151,
    "end": 152,
    "range": [
      151,
      152
    ]
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 153,
    "end": 155,
    "range": [
      153,
      155
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 156,
    "end": 157,
    "range": [
      156,
      157
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 157,
    "end": 158,
    "range": [
      157,
      158
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 159,
    "end": 160,
    "range": [
      159,
      160
    ]
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 160,
    "end": 161,
    "range": [
      160,
      161
    ]
  },
  {
    "type": "Identifier",
    "value": "temp",
    "start": 161,
    "end": 165,
    "range": [
      161,
      165
    ]
  },
  {
    "type": "Punctuator",
    "value": "--",
    "start": 165,
    "end": 167,
    "range": [
      165,
      167
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 167,
    "end": 168,
    "range": [
      167,
      168
    ]
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 169,
    "end": 171,
    "range": [
      169,
      171
    ]
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 172,
    "end": 173,
    "range": [
      172,
      173
    ]
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 174,
    "end": 176,
    "range": [
      174,
      176
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 177,
    "end": 178,
    "range": [
      177,
      178
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 178,
    "end": 179,
    "range": [
      178,
      179
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 180,
    "end": 181,
    "range": [
      180,
      181
    ]
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 181,
    "end": 182,
    "range": [
      181,
      182
    ]
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 182,
    "end": 183,
    "range": [
      182,
      183
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 183,
    "end": 184,
    "range": [
      183,
      184
    ]
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 185,
    "end": 187,
    "range": [
      185,
      187
    ]
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 188,
    "end": 189,
    "range": [
      188,
      189
    ]
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 190,
    "end": 192,
    "range": [
      190,
      192
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 193,
    "end": 194,
    "range": [
      193,
      194
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 194,
    "end": 195,
    "range": [
      194,
      195
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 196,
    "end": 197,
    "range": [
      196,
      197
    ]
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 197,
    "end": 198,
    "range": [
      197,
      198
    ]
  },
  {
    "type": "Identifier",
    "value": "temp",
    "start": 198,
    "end": 202,
    "range": [
      198,
      202
    ]
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 202,
    "end": 204,
    "range": [
      202,
      204
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 204,
    "end": 205,
    "range": [
      204,
      205
    ]
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 206,
    "end": 208,
    "range": [
      206,
      208
    ]
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 209,
    "end": 210,
    "range": [
      209,
      210
    ]
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 211,
    "end": 213,
    "range": [
      211,
      213
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 214,
    "end": 215,
    "range": [
      214,
      215
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 215,
    "end": 216,
    "range": [
      215,
      216
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 217,
    "end": 218,
    "range": [
      217,
      218
    ]
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 218,
    "end": 219,
    "range": [
      218,
      219
    ]
  },
  {
    "type": "Identifier",
    "value": "temp",
    "start": 219,
    "end": 223,
    "range": [
      219,
      223
    ]
  },
  {
    "type": "Punctuator",
    "value": "--",
    "start": 223,
    "end": 225,
    "range": [
      223,
      225
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 225,
    "end": 226,
    "range": [
      225,
      226
    ]
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 227,
    "end": 229,
    "range": [
      227,
      229
    ]
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 230,
    "end": 231,
    "range": [
      230,
      231
    ]
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 232,
    "end": 234,
    "range": [
      232,
      234
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 235,
    "end": 236,
    "range": [
      235,
      236
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 236,
    "end": 237,
    "range": [
      236,
      237
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 239,
    "end": 240,
    "range": [
      239,
      240
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 240,
    "end": 246,
    "range": [
      240,
      246
    ]
  },
  {
    "type": "Punctuator",
    "value": "--",
    "start": 247,
    "end": 249,
    "range": [
      247,
      249
    ]
  },
  {
    "type": "Identifier",
    "value": "temp",
    "start": 249,
    "end": 253,
    "range": [
      249,
      253
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 253,
    "end": 254,
    "range": [
      253,
      254
    ]
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 255,
    "end": 257,
    "range": [
      255,
      257
    ]
  },
  {
    "type": "Numeric",
    "value": "3",
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
    "type": "Punctuator",
    "value": "(",
    "start": 261,
    "end": 262,
    "range": [
      261,
      262
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 262,
    "end": 268,
    "range": [
      262,
      268
    ]
  },
  {
    "type": "Identifier",
    "value": "temp",
    "start": 269,
    "end": 273,
    "range": [
      269,
      273
    ]
  },
  {
    "type": "Punctuator",
    "value": "--",
    "start": 273,
    "end": 275,
    "range": [
      273,
      275
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 275,
    "end": 276,
    "range": [
      275,
      276
    ]
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 277,
    "end": 279,
    "range": [
      277,
      279
    ]
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 280,
    "end": 281,
    "range": [
      280,
      281
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 281,
    "end": 282,
    "range": [
      281,
      282
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 283,
    "end": 284,
    "range": [
      283,
      284
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 284,
    "end": 290,
    "range": [
      284,
      290
    ]
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 291,
    "end": 292,
    "range": [
      291,
      292
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 292,
    "end": 293,
    "range": [
      292,
      293
    ]
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 294,
    "end": 296,
    "range": [
      294,
      296
    ]
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 297,
    "end": 298,
    "range": [
      297,
      298
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 298,
    "end": 299,
    "range": [
      298,
      299
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 300,
    "end": 301,
    "range": [
      300,
      301
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 301,
    "end": 307,
    "range": [
      301,
      307
    ]
  },
  {
    "type": "Identifier",
    "value": "temp",
    "start": 308,
    "end": 312,
    "range": [
      308,
      312
    ]
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 312,
    "end": 314,
    "range": [
      312,
      314
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 314,
    "end": 315,
    "range": [
      314,
      315
    ]
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 316,
    "end": 318,
    "range": [
      316,
      318
    ]
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 319,
    "end": 320,
    "range": [
      319,
      320
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 320,
    "end": 321,
    "range": [
      320,
      321
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 322,
    "end": 323,
    "range": [
      322,
      323
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 323,
    "end": 329,
    "range": [
      323,
      329
    ]
  },
  {
    "type": "Identifier",
    "value": "temp",
    "start": 330,
    "end": 334,
    "range": [
      330,
      334
    ]
  },
  {
    "type": "Punctuator",
    "value": "--",
    "start": 334,
    "end": 336,
    "range": [
      334,
      336
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 336,
    "end": 337,
    "range": [
      336,
      337
    ]
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 338,
    "end": 340,
    "range": [
      338,
      340
    ]
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 341,
    "end": 342,
    "range": [
      341,
      342
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 342,
    "end": 343,
    "range": [
      342,
      343
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 345,
    "end": 346,
    "range": [
      345,
      346
    ]
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 347,
    "end": 349,
    "range": [
      347,
      349
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 350,
    "end": 351,
    "range": [
      350,
      351
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 351,
    "end": 357,
    "range": [
      351,
      357
    ]
  },
  {
    "type": "Punctuator",
    "value": "--",
    "start": 358,
    "end": 360,
    "range": [
      358,
      360
    ]
  },
  {
    "type": "Identifier",
    "value": "temp",
    "start": 360,
    "end": 364,
    "range": [
      360,
      364
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 364,
    "end": 365,
    "range": [
      364,
      365
    ]
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 366,
    "end": 368,
    "range": [
      366,
      368
    ]
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 369,
    "end": 370,
    "range": [
      369,
      370
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 370,
    "end": 371,
    "range": [
      370,
      371
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 372,
    "end": 373,
    "range": [
      372,
      373
    ]
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 374,
    "end": 376,
    "range": [
      374,
      376
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 377,
    "end": 378,
    "range": [
      377,
      378
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 378,
    "end": 384,
    "range": [
      378,
      384
    ]
  },
  {
    "type": "Identifier",
    "value": "temp",
    "start": 385,
    "end": 389,
    "range": [
      385,
      389
    ]
  },
  {
    "type": "Punctuator",
    "value": "--",
    "start": 389,
    "end": 391,
    "range": [
      389,
      391
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 391,
    "end": 392,
    "range": [
      391,
      392
    ]
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 393,
    "end": 395,
    "range": [
      393,
      395
    ]
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 396,
    "end": 397,
    "range": [
      396,
      397
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 397,
    "end": 398,
    "range": [
      397,
      398
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 399,
    "end": 400,
    "range": [
      399,
      400
    ]
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 401,
    "end": 403,
    "range": [
      401,
      403
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 404,
    "end": 405,
    "range": [
      404,
      405
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 405,
    "end": 411,
    "range": [
      405,
      411
    ]
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 412,
    "end": 413,
    "range": [
      412,
      413
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 413,
    "end": 414,
    "range": [
      413,
      414
    ]
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 415,
    "end": 417,
    "range": [
      415,
      417
    ]
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 418,
    "end": 419,
    "range": [
      418,
      419
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 419,
    "end": 420,
    "range": [
      419,
      420
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 421,
    "end": 422,
    "range": [
      421,
      422
    ]
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 423,
    "end": 425,
    "range": [
      423,
      425
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 426,
    "end": 427,
    "range": [
      426,
      427
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 427,
    "end": 433,
    "range": [
      427,
      433
    ]
  },
  {
    "type": "Identifier",
    "value": "temp",
    "start": 434,
    "end": 438,
    "range": [
      434,
      438
    ]
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 438,
    "end": 440,
    "range": [
      438,
      440
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 440,
    "end": 441,
    "range": [
      440,
      441
    ]
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 442,
    "end": 444,
    "range": [
      442,
      444
    ]
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 445,
    "end": 446,
    "range": [
      445,
      446
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 446,
    "end": 447,
    "range": [
      446,
      447
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 448,
    "end": 449,
    "range": [
      448,
      449
    ]
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 450,
    "end": 452,
    "range": [
      450,
      452
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 453,
    "end": 454,
    "range": [
      453,
      454
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 454,
    "end": 460,
    "range": [
      454,
      460
    ]
  },
  {
    "type": "Identifier",
    "value": "temp",
    "start": 461,
    "end": 465,
    "range": [
      461,
      465
    ]
  },
  {
    "type": "Punctuator",
    "value": "--",
    "start": 465,
    "end": 467,
    "range": [
      465,
      467
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 467,
    "end": 468,
    "range": [
      467,
      468
    ]
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 469,
    "end": 471,
    "range": [
      469,
      471
    ]
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 472,
    "end": 473,
    "range": [
      472,
      473
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 473,
    "end": 474,
    "range": [
      473,
      474
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 476,
    "end": 477,
    "range": [
      476,
      477
    ]
  },
  {
    "type": "Keyword",
    "value": "delete",
    "start": 477,
    "end": 483,
    "range": [
      477,
      483
    ]
  },
  {
    "type": "Punctuator",
    "value": "--",
    "start": 484,
    "end": 486,
    "range": [
      484,
      486
    ]
  },
  {
    "type": "Identifier",
    "value": "temp",
    "start": 486,
    "end": 490,
    "range": [
      486,
      490
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 490,
    "end": 491,
    "range": [
      490,
      491
    ]
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 492,
    "end": 494,
    "range": [
      492,
      494
    ]
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 495,
    "end": 496,
    "range": [
      495,
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
    "type": "Punctuator",
    "value": "(",
    "start": 498,
    "end": 499,
    "range": [
      498,
      499
    ]
  },
  {
    "type": "Keyword",
    "value": "delete",
    "start": 499,
    "end": 505,
    "range": [
      499,
      505
    ]
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 506,
    "end": 508,
    "range": [
      506,
      508
    ]
  },
  {
    "type": "Identifier",
    "value": "temp",
    "start": 508,
    "end": 512,
    "range": [
      508,
      512
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 512,
    "end": 513,
    "range": [
      512,
      513
    ]
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 514,
    "end": 516,
    "range": [
      514,
      516
    ]
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 517,
    "end": 518,
    "range": [
      517,
      518
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 518,
    "end": 519,
    "range": [
      518,
      519
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 520,
    "end": 521,
    "range": [
      520,
      521
    ]
  },
  {
    "type": "Keyword",
    "value": "delete",
    "start": 521,
    "end": 527,
    "range": [
      521,
      527
    ]
  },
  {
    "type": "Identifier",
    "value": "temp",
    "start": 528,
    "end": 532,
    "range": [
      528,
      532
    ]
  },
  {
    "type": "Punctuator",
    "value": "--",
    "start": 532,
    "end": 534,
    "range": [
      532,
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
    "value": "**",
    "start": 536,
    "end": 538,
    "range": [
      536,
      538
    ]
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 539,
    "end": 540,
    "range": [
      539,
      540
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 540,
    "end": 541,
    "range": [
      540,
      541
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 542,
    "end": 543,
    "range": [
      542,
      543
    ]
  },
  {
    "type": "Keyword",
    "value": "delete",
    "start": 543,
    "end": 549,
    "range": [
      543,
      549
    ]
  },
  {
    "type": "Identifier",
    "value": "temp",
    "start": 550,
    "end": 554,
    "range": [
      550,
      554
    ]
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 554,
    "end": 556,
    "range": [
      554,
      556
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 556,
    "end": 557,
    "range": [
      556,
      557
    ]
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 558,
    "end": 560,
    "range": [
      558,
      560
    ]
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 561,
    "end": 562,
    "range": [
      561,
      562
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 562,
    "end": 563,
    "range": [
      562,
      563
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 565,
    "end": 566,
    "range": [
      565,
      566
    ]
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 567,
    "end": 569,
    "range": [
      567,
      569
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 570,
    "end": 571,
    "range": [
      570,
      571
    ]
  },
  {
    "type": "Keyword",
    "value": "delete",
    "start": 571,
    "end": 577,
    "range": [
      571,
      577
    ]
  },
  {
    "type": "Punctuator",
    "value": "--",
    "start": 578,
    "end": 580,
    "range": [
      578,
      580
    ]
  },
  {
    "type": "Identifier",
    "value": "temp",
    "start": 580,
    "end": 584,
    "range": [
      580,
      584
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 584,
    "end": 585,
    "range": [
      584,
      585
    ]
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 586,
    "end": 588,
    "range": [
      586,
      588
    ]
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 589,
    "end": 590,
    "range": [
      589,
      590
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 590,
    "end": 591,
    "range": [
      590,
      591
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 592,
    "end": 593,
    "range": [
      592,
      593
    ]
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 594,
    "end": 596,
    "range": [
      594,
      596
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 597,
    "end": 598,
    "range": [
      597,
      598
    ]
  },
  {
    "type": "Keyword",
    "value": "delete",
    "start": 598,
    "end": 604,
    "range": [
      598,
      604
    ]
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 605,
    "end": 607,
    "range": [
      605,
      607
    ]
  },
  {
    "type": "Identifier",
    "value": "temp",
    "start": 607,
    "end": 611,
    "range": [
      607,
      611
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 611,
    "end": 612,
    "range": [
      611,
      612
    ]
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 613,
    "end": 615,
    "range": [
      613,
      615
    ]
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 616,
    "end": 617,
    "range": [
      616,
      617
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 617,
    "end": 618,
    "range": [
      617,
      618
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 619,
    "end": 620,
    "range": [
      619,
      620
    ]
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 621,
    "end": 623,
    "range": [
      621,
      623
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 624,
    "end": 625,
    "range": [
      624,
      625
    ]
  },
  {
    "type": "Keyword",
    "value": "delete",
    "start": 625,
    "end": 631,
    "range": [
      625,
      631
    ]
  },
  {
    "type": "Identifier",
    "value": "temp",
    "start": 632,
    "end": 636,
    "range": [
      632,
      636
    ]
  },
  {
    "type": "Punctuator",
    "value": "--",
    "start": 636,
    "end": 638,
    "range": [
      636,
      638
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 638,
    "end": 639,
    "range": [
      638,
      639
    ]
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 640,
    "end": 642,
    "range": [
      640,
      642
    ]
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 643,
    "end": 644,
    "range": [
      643,
      644
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 644,
    "end": 645,
    "range": [
      644,
      645
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 646,
    "end": 647,
    "range": [
      646,
      647
    ]
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 648,
    "end": 650,
    "range": [
      648,
      650
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 651,
    "end": 652,
    "range": [
      651,
      652
    ]
  },
  {
    "type": "Keyword",
    "value": "delete",
    "start": 652,
    "end": 658,
    "range": [
      652,
      658
    ]
  },
  {
    "type": "Identifier",
    "value": "temp",
    "start": 659,
    "end": 663,
    "range": [
      659,
      663
    ]
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 663,
    "end": 665,
    "range": [
      663,
      665
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 665,
    "end": 666,
    "range": [
      665,
      666
    ]
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 667,
    "end": 669,
    "range": [
      667,
      669
    ]
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 670,
    "end": 671,
    "range": [
      670,
      671
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 671,
    "end": 672,
    "range": [
      671,
      672
    ]
  }
]
```
