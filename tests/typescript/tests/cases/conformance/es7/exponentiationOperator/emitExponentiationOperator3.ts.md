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
            "typeAnnotation": null,
            "start": 4,
            "end": 8
          },
          "init": {
            "type": "Literal",
            "value": 10,
            "raw": "10",
            "start": 11,
            "end": 13
          },
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
          "operator": "-",
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
              "start": 20,
              "end": 24
            },
            "start": 18,
            "end": 24
          },
          "prefix": true,
          "start": 17,
          "end": 24
        },
        "operator": "**",
        "right": {
          "type": "Literal",
          "value": 3,
          "raw": "3",
          "start": 29,
          "end": 30
        },
        "start": 16,
        "end": 30
      },
      "directive": null,
      "start": 16,
      "end": 31
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "UnaryExpression",
          "operator": "+",
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
              "start": 36,
              "end": 40
            },
            "start": 34,
            "end": 40
          },
          "prefix": true,
          "start": 33,
          "end": 40
        },
        "operator": "**",
        "right": {
          "type": "Literal",
          "value": 3,
          "raw": "3",
          "start": 45,
          "end": 46
        },
        "start": 32,
        "end": 46
      },
      "directive": null,
      "start": 32,
      "end": 47
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "UnaryExpression",
          "operator": "-",
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
              "start": 50,
              "end": 54
            },
            "start": 50,
            "end": 56
          },
          "prefix": true,
          "start": 49,
          "end": 56
        },
        "operator": "**",
        "right": {
          "type": "Literal",
          "value": 3,
          "raw": "3",
          "start": 61,
          "end": 62
        },
        "start": 48,
        "end": 62
      },
      "directive": null,
      "start": 48,
      "end": 63
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "UnaryExpression",
          "operator": "+",
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
              "start": 66,
              "end": 70
            },
            "start": 66,
            "end": 72
          },
          "prefix": true,
          "start": 65,
          "end": 72
        },
        "operator": "**",
        "right": {
          "type": "Literal",
          "value": 3,
          "raw": "3",
          "start": 77,
          "end": 78
        },
        "start": 64,
        "end": 78
      },
      "directive": null,
      "start": 64,
      "end": 79
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "UnaryExpression",
          "operator": "-",
          "argument": {
            "type": "BinaryExpression",
            "left": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 83,
              "end": 84
            },
            "operator": "**",
            "right": {
              "type": "UpdateExpression",
              "operator": "++",
              "prefix": true,
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "temp",
                "optional": false,
                "typeAnnotation": null,
                "start": 90,
                "end": 94
              },
              "start": 88,
              "end": 94
            },
            "start": 83,
            "end": 94
          },
          "prefix": true,
          "start": 81,
          "end": 95
        },
        "operator": "**",
        "right": {
          "type": "Literal",
          "value": 3,
          "raw": "3",
          "start": 100,
          "end": 101
        },
        "start": 80,
        "end": 101
      },
      "directive": null,
      "start": 80,
      "end": 102
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "UnaryExpression",
          "operator": "-",
          "argument": {
            "type": "BinaryExpression",
            "left": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 106,
              "end": 107
            },
            "operator": "**",
            "right": {
              "type": "UpdateExpression",
              "operator": "--",
              "prefix": true,
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "temp",
                "optional": false,
                "typeAnnotation": null,
                "start": 113,
                "end": 117
              },
              "start": 111,
              "end": 117
            },
            "start": 106,
            "end": 117
          },
          "prefix": true,
          "start": 104,
          "end": 118
        },
        "operator": "**",
        "right": {
          "type": "Literal",
          "value": 3,
          "raw": "3",
          "start": 123,
          "end": 124
        },
        "start": 103,
        "end": 124
      },
      "directive": null,
      "start": 103,
      "end": 125
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "UnaryExpression",
          "operator": "-",
          "argument": {
            "type": "BinaryExpression",
            "left": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 129,
              "end": 130
            },
            "operator": "**",
            "right": {
              "type": "UpdateExpression",
              "operator": "++",
              "prefix": false,
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "temp",
                "optional": false,
                "typeAnnotation": null,
                "start": 134,
                "end": 138
              },
              "start": 134,
              "end": 140
            },
            "start": 129,
            "end": 140
          },
          "prefix": true,
          "start": 127,
          "end": 141
        },
        "operator": "**",
        "right": {
          "type": "Literal",
          "value": 3,
          "raw": "3",
          "start": 146,
          "end": 147
        },
        "start": 126,
        "end": 147
      },
      "directive": null,
      "start": 126,
      "end": 148
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "UnaryExpression",
          "operator": "-",
          "argument": {
            "type": "BinaryExpression",
            "left": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 152,
              "end": 153
            },
            "operator": "**",
            "right": {
              "type": "UpdateExpression",
              "operator": "--",
              "prefix": false,
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "temp",
                "optional": false,
                "typeAnnotation": null,
                "start": 157,
                "end": 161
              },
              "start": 157,
              "end": 163
            },
            "start": 152,
            "end": 163
          },
          "prefix": true,
          "start": 150,
          "end": 164
        },
        "operator": "**",
        "right": {
          "type": "Literal",
          "value": 3,
          "raw": "3",
          "start": 169,
          "end": 170
        },
        "start": 149,
        "end": 170
      },
      "directive": null,
      "start": 149,
      "end": 171
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "UnaryExpression",
          "operator": "-",
          "argument": {
            "type": "Literal",
            "value": 3,
            "raw": "3",
            "start": 175,
            "end": 176
          },
          "prefix": true,
          "start": 174,
          "end": 176
        },
        "operator": "**",
        "right": {
          "type": "UpdateExpression",
          "operator": "++",
          "prefix": false,
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "temp",
            "optional": false,
            "typeAnnotation": null,
            "start": 181,
            "end": 185
          },
          "start": 181,
          "end": 187
        },
        "start": 173,
        "end": 187
      },
      "directive": null,
      "start": 173,
      "end": 188
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "UnaryExpression",
          "operator": "-",
          "argument": {
            "type": "Literal",
            "value": 3,
            "raw": "3",
            "start": 191,
            "end": 192
          },
          "prefix": true,
          "start": 190,
          "end": 192
        },
        "operator": "**",
        "right": {
          "type": "UpdateExpression",
          "operator": "--",
          "prefix": false,
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "temp",
            "optional": false,
            "typeAnnotation": null,
            "start": 197,
            "end": 201
          },
          "start": 197,
          "end": 203
        },
        "start": 189,
        "end": 203
      },
      "directive": null,
      "start": 189,
      "end": 204
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "UnaryExpression",
          "operator": "-",
          "argument": {
            "type": "Literal",
            "value": 3,
            "raw": "3",
            "start": 207,
            "end": 208
          },
          "prefix": true,
          "start": 206,
          "end": 208
        },
        "operator": "**",
        "right": {
          "type": "UpdateExpression",
          "operator": "++",
          "prefix": true,
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "temp",
            "optional": false,
            "typeAnnotation": null,
            "start": 215,
            "end": 219
          },
          "start": 213,
          "end": 219
        },
        "start": 205,
        "end": 219
      },
      "directive": null,
      "start": 205,
      "end": 220
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "UnaryExpression",
          "operator": "-",
          "argument": {
            "type": "Literal",
            "value": 3,
            "raw": "3",
            "start": 223,
            "end": 224
          },
          "prefix": true,
          "start": 222,
          "end": 224
        },
        "operator": "**",
        "right": {
          "type": "UpdateExpression",
          "operator": "--",
          "prefix": true,
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "temp",
            "optional": false,
            "typeAnnotation": null,
            "start": 231,
            "end": 235
          },
          "start": 229,
          "end": 235
        },
        "start": 221,
        "end": 235
      },
      "directive": null,
      "start": 221,
      "end": 236
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "UnaryExpression",
          "operator": "+",
          "argument": {
            "type": "Literal",
            "value": 3,
            "raw": "3",
            "start": 239,
            "end": 240
          },
          "prefix": true,
          "start": 238,
          "end": 240
        },
        "operator": "**",
        "right": {
          "type": "UpdateExpression",
          "operator": "++",
          "prefix": false,
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "temp",
            "optional": false,
            "typeAnnotation": null,
            "start": 245,
            "end": 249
          },
          "start": 245,
          "end": 251
        },
        "start": 237,
        "end": 251
      },
      "directive": null,
      "start": 237,
      "end": 252
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "UnaryExpression",
          "operator": "+",
          "argument": {
            "type": "Literal",
            "value": 3,
            "raw": "3",
            "start": 255,
            "end": 256
          },
          "prefix": true,
          "start": 254,
          "end": 256
        },
        "operator": "**",
        "right": {
          "type": "UpdateExpression",
          "operator": "--",
          "prefix": false,
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "temp",
            "optional": false,
            "typeAnnotation": null,
            "start": 261,
            "end": 265
          },
          "start": 261,
          "end": 267
        },
        "start": 253,
        "end": 267
      },
      "directive": null,
      "start": 253,
      "end": 268
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "UnaryExpression",
          "operator": "+",
          "argument": {
            "type": "Literal",
            "value": 3,
            "raw": "3",
            "start": 271,
            "end": 272
          },
          "prefix": true,
          "start": 270,
          "end": 272
        },
        "operator": "**",
        "right": {
          "type": "UpdateExpression",
          "operator": "++",
          "prefix": true,
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "temp",
            "optional": false,
            "typeAnnotation": null,
            "start": 279,
            "end": 283
          },
          "start": 277,
          "end": 283
        },
        "start": 269,
        "end": 283
      },
      "directive": null,
      "start": 269,
      "end": 284
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "UnaryExpression",
          "operator": "+",
          "argument": {
            "type": "Literal",
            "value": 3,
            "raw": "3",
            "start": 287,
            "end": 288
          },
          "prefix": true,
          "start": 286,
          "end": 288
        },
        "operator": "**",
        "right": {
          "type": "UpdateExpression",
          "operator": "--",
          "prefix": true,
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "temp",
            "optional": false,
            "typeAnnotation": null,
            "start": 295,
            "end": 299
          },
          "start": 293,
          "end": 299
        },
        "start": 285,
        "end": 299
      },
      "directive": null,
      "start": 285,
      "end": 300
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "UnaryExpression",
          "operator": "-",
          "argument": {
            "type": "Literal",
            "value": 3,
            "raw": "3",
            "start": 303,
            "end": 304
          },
          "prefix": true,
          "start": 302,
          "end": 304
        },
        "operator": "**",
        "right": {
          "type": "BinaryExpression",
          "left": {
            "type": "UpdateExpression",
            "operator": "++",
            "prefix": false,
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "temp",
              "optional": false,
              "typeAnnotation": null,
              "start": 309,
              "end": 313
            },
            "start": 309,
            "end": 315
          },
          "operator": "**",
          "right": {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 319,
            "end": 320
          },
          "start": 309,
          "end": 320
        },
        "start": 301,
        "end": 320
      },
      "directive": null,
      "start": 301,
      "end": 321
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "UnaryExpression",
          "operator": "-",
          "argument": {
            "type": "Literal",
            "value": 3,
            "raw": "3",
            "start": 324,
            "end": 325
          },
          "prefix": true,
          "start": 323,
          "end": 325
        },
        "operator": "**",
        "right": {
          "type": "BinaryExpression",
          "left": {
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
          "operator": "**",
          "right": {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 340,
            "end": 341
          },
          "start": 330,
          "end": 341
        },
        "start": 322,
        "end": 341
      },
      "directive": null,
      "start": 322,
      "end": 342
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "UnaryExpression",
          "operator": "-",
          "argument": {
            "type": "Literal",
            "value": 3,
            "raw": "3",
            "start": 345,
            "end": 346
          },
          "prefix": true,
          "start": 344,
          "end": 346
        },
        "operator": "**",
        "right": {
          "type": "BinaryExpression",
          "left": {
            "type": "UpdateExpression",
            "operator": "++",
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
          "operator": "**",
          "right": {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 361,
            "end": 362
          },
          "start": 351,
          "end": 362
        },
        "start": 343,
        "end": 362
      },
      "directive": null,
      "start": 343,
      "end": 363
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "UnaryExpression",
          "operator": "-",
          "argument": {
            "type": "Literal",
            "value": 3,
            "raw": "3",
            "start": 366,
            "end": 367
          },
          "prefix": true,
          "start": 365,
          "end": 367
        },
        "operator": "**",
        "right": {
          "type": "BinaryExpression",
          "left": {
            "type": "UpdateExpression",
            "operator": "--",
            "prefix": true,
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "temp",
              "optional": false,
              "typeAnnotation": null,
              "start": 374,
              "end": 378
            },
            "start": 372,
            "end": 378
          },
          "operator": "**",
          "right": {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 382,
            "end": 383
          },
          "start": 372,
          "end": 383
        },
        "start": 364,
        "end": 383
      },
      "directive": null,
      "start": 364,
      "end": 384
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "UnaryExpression",
          "operator": "+",
          "argument": {
            "type": "Literal",
            "value": 3,
            "raw": "3",
            "start": 387,
            "end": 388
          },
          "prefix": true,
          "start": 386,
          "end": 388
        },
        "operator": "**",
        "right": {
          "type": "BinaryExpression",
          "left": {
            "type": "UpdateExpression",
            "operator": "++",
            "prefix": false,
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "temp",
              "optional": false,
              "typeAnnotation": null,
              "start": 393,
              "end": 397
            },
            "start": 393,
            "end": 399
          },
          "operator": "**",
          "right": {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 403,
            "end": 404
          },
          "start": 393,
          "end": 404
        },
        "start": 385,
        "end": 404
      },
      "directive": null,
      "start": 385,
      "end": 405
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "UnaryExpression",
          "operator": "+",
          "argument": {
            "type": "Literal",
            "value": 3,
            "raw": "3",
            "start": 408,
            "end": 409
          },
          "prefix": true,
          "start": 407,
          "end": 409
        },
        "operator": "**",
        "right": {
          "type": "BinaryExpression",
          "left": {
            "type": "UpdateExpression",
            "operator": "--",
            "prefix": false,
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "temp",
              "optional": false,
              "typeAnnotation": null,
              "start": 414,
              "end": 418
            },
            "start": 414,
            "end": 420
          },
          "operator": "**",
          "right": {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 424,
            "end": 425
          },
          "start": 414,
          "end": 425
        },
        "start": 406,
        "end": 425
      },
      "directive": null,
      "start": 406,
      "end": 426
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "UnaryExpression",
          "operator": "+",
          "argument": {
            "type": "Literal",
            "value": 3,
            "raw": "3",
            "start": 429,
            "end": 430
          },
          "prefix": true,
          "start": 428,
          "end": 430
        },
        "operator": "**",
        "right": {
          "type": "BinaryExpression",
          "left": {
            "type": "UpdateExpression",
            "operator": "++",
            "prefix": true,
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "temp",
              "optional": false,
              "typeAnnotation": null,
              "start": 437,
              "end": 441
            },
            "start": 435,
            "end": 441
          },
          "operator": "**",
          "right": {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 445,
            "end": 446
          },
          "start": 435,
          "end": 446
        },
        "start": 427,
        "end": 446
      },
      "directive": null,
      "start": 427,
      "end": 447
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "UnaryExpression",
          "operator": "+",
          "argument": {
            "type": "Literal",
            "value": 3,
            "raw": "3",
            "start": 450,
            "end": 451
          },
          "prefix": true,
          "start": 449,
          "end": 451
        },
        "operator": "**",
        "right": {
          "type": "BinaryExpression",
          "left": {
            "type": "UpdateExpression",
            "operator": "--",
            "prefix": true,
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "temp",
              "optional": false,
              "typeAnnotation": null,
              "start": 458,
              "end": 462
            },
            "start": 456,
            "end": 462
          },
          "operator": "**",
          "right": {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 466,
            "end": 467
          },
          "start": 456,
          "end": 467
        },
        "start": 448,
        "end": 467
      },
      "directive": null,
      "start": 448,
      "end": 468
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "Literal",
          "value": 3,
          "raw": "3",
          "start": 470,
          "end": 471
        },
        "operator": "**",
        "right": {
          "type": "UnaryExpression",
          "operator": "-",
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
              "start": 476,
              "end": 480
            },
            "start": 476,
            "end": 482
          },
          "prefix": true,
          "start": 475,
          "end": 482
        },
        "start": 470,
        "end": 482
      },
      "directive": null,
      "start": 470,
      "end": 483
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "Literal",
          "value": 3,
          "raw": "3",
          "start": 484,
          "end": 485
        },
        "operator": "**",
        "right": {
          "type": "UnaryExpression",
          "operator": "-",
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
              "start": 490,
              "end": 494
            },
            "start": 490,
            "end": 496
          },
          "prefix": true,
          "start": 489,
          "end": 496
        },
        "start": 484,
        "end": 496
      },
      "directive": null,
      "start": 484,
      "end": 497
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "Literal",
          "value": 3,
          "raw": "3",
          "start": 498,
          "end": 499
        },
        "operator": "**",
        "right": {
          "type": "UnaryExpression",
          "operator": "-",
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
              "start": 506,
              "end": 510
            },
            "start": 504,
            "end": 510
          },
          "prefix": true,
          "start": 503,
          "end": 510
        },
        "start": 498,
        "end": 510
      },
      "directive": null,
      "start": 498,
      "end": 511
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "Literal",
          "value": 3,
          "raw": "3",
          "start": 512,
          "end": 513
        },
        "operator": "**",
        "right": {
          "type": "UnaryExpression",
          "operator": "+",
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
              "start": 520,
              "end": 524
            },
            "start": 518,
            "end": 524
          },
          "prefix": true,
          "start": 517,
          "end": 524
        },
        "start": 512,
        "end": 524
      },
      "directive": null,
      "start": 512,
      "end": 525
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "Literal",
          "value": 3,
          "raw": "3",
          "start": 526,
          "end": 527
        },
        "operator": "**",
        "right": {
          "type": "BinaryExpression",
          "left": {
            "type": "UnaryExpression",
            "operator": "-",
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
                "start": 533,
                "end": 537
              },
              "start": 533,
              "end": 539
            },
            "prefix": true,
            "start": 532,
            "end": 539
          },
          "operator": "**",
          "right": {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 544,
            "end": 545
          },
          "start": 531,
          "end": 545
        },
        "start": 526,
        "end": 545
      },
      "directive": null,
      "start": 526,
      "end": 546
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "Literal",
          "value": 3,
          "raw": "3",
          "start": 547,
          "end": 548
        },
        "operator": "**",
        "right": {
          "type": "BinaryExpression",
          "left": {
            "type": "UnaryExpression",
            "operator": "-",
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
                "start": 554,
                "end": 558
              },
              "start": 554,
              "end": 560
            },
            "prefix": true,
            "start": 553,
            "end": 560
          },
          "operator": "**",
          "right": {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 565,
            "end": 566
          },
          "start": 552,
          "end": 566
        },
        "start": 547,
        "end": 566
      },
      "directive": null,
      "start": 547,
      "end": 567
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "Literal",
          "value": 3,
          "raw": "3",
          "start": 568,
          "end": 569
        },
        "operator": "**",
        "right": {
          "type": "BinaryExpression",
          "left": {
            "type": "UnaryExpression",
            "operator": "+",
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
                "start": 575,
                "end": 579
              },
              "start": 575,
              "end": 581
            },
            "prefix": true,
            "start": 574,
            "end": 581
          },
          "operator": "**",
          "right": {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 586,
            "end": 587
          },
          "start": 573,
          "end": 587
        },
        "start": 568,
        "end": 587
      },
      "directive": null,
      "start": 568,
      "end": 588
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "Literal",
          "value": 3,
          "raw": "3",
          "start": 589,
          "end": 590
        },
        "operator": "**",
        "right": {
          "type": "BinaryExpression",
          "left": {
            "type": "UnaryExpression",
            "operator": "+",
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
                "start": 596,
                "end": 600
              },
              "start": 596,
              "end": 602
            },
            "prefix": true,
            "start": 595,
            "end": 602
          },
          "operator": "**",
          "right": {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 607,
            "end": 608
          },
          "start": 594,
          "end": 608
        },
        "start": 589,
        "end": 608
      },
      "directive": null,
      "start": 589,
      "end": 609
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "Literal",
          "value": 3,
          "raw": "3",
          "start": 610,
          "end": 611
        },
        "operator": "**",
        "right": {
          "type": "BinaryExpression",
          "left": {
            "type": "UnaryExpression",
            "operator": "-",
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
                "start": 619,
                "end": 623
              },
              "start": 617,
              "end": 623
            },
            "prefix": true,
            "start": 616,
            "end": 623
          },
          "operator": "**",
          "right": {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 628,
            "end": 629
          },
          "start": 615,
          "end": 629
        },
        "start": 610,
        "end": 629
      },
      "directive": null,
      "start": 610,
      "end": 630
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "Literal",
          "value": 3,
          "raw": "3",
          "start": 631,
          "end": 632
        },
        "operator": "**",
        "right": {
          "type": "BinaryExpression",
          "left": {
            "type": "UnaryExpression",
            "operator": "+",
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
                "start": 640,
                "end": 644
              },
              "start": 638,
              "end": 644
            },
            "prefix": true,
            "start": 637,
            "end": 644
          },
          "operator": "**",
          "right": {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 649,
            "end": 650
          },
          "start": 636,
          "end": 650
        },
        "start": 631,
        "end": 650
      },
      "directive": null,
      "start": 631,
      "end": 651
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 651
}
```
