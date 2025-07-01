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
            "typeAnnotation": null,
            "start": 6,
            "end": 7
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 12,
                  "end": 13
                },
                "value": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 15,
                  "end": 16
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 12,
                "end": 16
              }
            ],
            "start": 10,
            "end": 18
          },
          "definite": false,
          "start": 6,
          "end": 18
        }
      ],
      "declare": false,
      "start": 0,
      "end": 18
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
            "typeAnnotation": null,
            "start": 25,
            "end": 26
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 30,
                "end": 31
              }
            ],
            "start": 29,
            "end": 32
          },
          "definite": false,
          "start": 25,
          "end": 32
        }
      ],
      "declare": false,
      "start": 19,
      "end": 32
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "ObjectExpression",
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 40,
                "end": 41
              },
              "value": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 43,
                "end": 44
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 40,
              "end": 44
            }
          ],
          "start": 38,
          "end": 46
        },
        "operator": "===",
        "right": {
          "type": "ObjectExpression",
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 53,
                "end": 54
              },
              "value": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 56,
                "end": 57
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 53,
              "end": 57
            }
          ],
          "start": 51,
          "end": 59
        },
        "start": 38,
        "end": 59
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 61,
        "end": 64
      },
      "alternate": null,
      "start": 34,
      "end": 64
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "ArrayExpression",
          "elements": [
            {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 70,
              "end": 71
            }
          ],
          "start": 69,
          "end": 72
        },
        "operator": "===",
        "right": {
          "type": "ArrayExpression",
          "elements": [
            {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 78,
              "end": 79
            }
          ],
          "start": 77,
          "end": 80
        },
        "start": 69,
        "end": 80
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 82,
        "end": 85
      },
      "alternate": null,
      "start": 65,
      "end": 85
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 90,
          "end": 91
        },
        "operator": "===",
        "right": {
          "type": "ObjectExpression",
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 98,
                "end": 99
              },
              "value": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 101,
                "end": 102
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 98,
              "end": 102
            }
          ],
          "start": 96,
          "end": 104
        },
        "start": 90,
        "end": 104
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 106,
        "end": 109
      },
      "alternate": null,
      "start": 86,
      "end": 109
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null,
          "start": 114,
          "end": 115
        },
        "operator": "===",
        "right": {
          "type": "ArrayExpression",
          "elements": [
            {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 121,
              "end": 122
            }
          ],
          "start": 120,
          "end": 123
        },
        "start": 114,
        "end": 123
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 125,
        "end": 128
      },
      "alternate": null,
      "start": 110,
      "end": 128
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "ObjectExpression",
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 135,
                "end": 136
              },
              "value": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 138,
                "end": 139
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 135,
              "end": 139
            }
          ],
          "start": 133,
          "end": 141
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 146,
          "end": 147
        },
        "start": 133,
        "end": 147
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 149,
        "end": 152
      },
      "alternate": null,
      "start": 129,
      "end": 152
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "ArrayExpression",
          "elements": [
            {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 158,
              "end": 159
            }
          ],
          "start": 157,
          "end": 160
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null,
          "start": 165,
          "end": 166
        },
        "start": 157,
        "end": 166
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 168,
        "end": 171
      },
      "alternate": null,
      "start": 153,
      "end": 171
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "ObjectExpression",
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 179,
                "end": 180
              },
              "value": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 182,
                "end": 183
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 179,
              "end": 183
            }
          ],
          "start": 177,
          "end": 185
        },
        "operator": "!==",
        "right": {
          "type": "ObjectExpression",
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 192,
                "end": 193
              },
              "value": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 195,
                "end": 196
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 192,
              "end": 196
            }
          ],
          "start": 190,
          "end": 198
        },
        "start": 177,
        "end": 198
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 200,
        "end": 203
      },
      "alternate": null,
      "start": 173,
      "end": 203
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "ArrayExpression",
          "elements": [
            {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 209,
              "end": 210
            }
          ],
          "start": 208,
          "end": 211
        },
        "operator": "!==",
        "right": {
          "type": "ArrayExpression",
          "elements": [
            {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 217,
              "end": 218
            }
          ],
          "start": 216,
          "end": 219
        },
        "start": 208,
        "end": 219
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 221,
        "end": 224
      },
      "alternate": null,
      "start": 204,
      "end": 224
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 229,
          "end": 230
        },
        "operator": "!==",
        "right": {
          "type": "ObjectExpression",
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 237,
                "end": 238
              },
              "value": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 240,
                "end": 241
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 237,
              "end": 241
            }
          ],
          "start": 235,
          "end": 243
        },
        "start": 229,
        "end": 243
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 245,
        "end": 248
      },
      "alternate": null,
      "start": 225,
      "end": 248
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null,
          "start": 253,
          "end": 254
        },
        "operator": "!==",
        "right": {
          "type": "ArrayExpression",
          "elements": [
            {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 260,
              "end": 261
            }
          ],
          "start": 259,
          "end": 262
        },
        "start": 253,
        "end": 262
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 264,
        "end": 267
      },
      "alternate": null,
      "start": 249,
      "end": 267
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "ObjectExpression",
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 274,
                "end": 275
              },
              "value": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 277,
                "end": 278
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 274,
              "end": 278
            }
          ],
          "start": 272,
          "end": 280
        },
        "operator": "!==",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 285,
          "end": 286
        },
        "start": 272,
        "end": 286
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 288,
        "end": 291
      },
      "alternate": null,
      "start": 268,
      "end": 291
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "ArrayExpression",
          "elements": [
            {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 297,
              "end": 298
            }
          ],
          "start": 296,
          "end": 299
        },
        "operator": "!==",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null,
          "start": 304,
          "end": 305
        },
        "start": 296,
        "end": 305
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 307,
        "end": 310
      },
      "alternate": null,
      "start": 292,
      "end": 310
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "ObjectExpression",
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 318,
                "end": 319
              },
              "value": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 321,
                "end": 322
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 318,
              "end": 322
            }
          ],
          "start": 316,
          "end": 324
        },
        "operator": "==",
        "right": {
          "type": "ObjectExpression",
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 330,
                "end": 331
              },
              "value": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 333,
                "end": 334
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 330,
              "end": 334
            }
          ],
          "start": 328,
          "end": 336
        },
        "start": 316,
        "end": 336
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 338,
        "end": 341
      },
      "alternate": null,
      "start": 312,
      "end": 341
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "ArrayExpression",
          "elements": [
            {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 347,
              "end": 348
            }
          ],
          "start": 346,
          "end": 349
        },
        "operator": "==",
        "right": {
          "type": "ArrayExpression",
          "elements": [
            {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 354,
              "end": 355
            }
          ],
          "start": 353,
          "end": 356
        },
        "start": 346,
        "end": 356
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 358,
        "end": 361
      },
      "alternate": null,
      "start": 342,
      "end": 361
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 366,
          "end": 367
        },
        "operator": "==",
        "right": {
          "type": "ObjectExpression",
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 373,
                "end": 374
              },
              "value": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 376,
                "end": 377
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 373,
              "end": 377
            }
          ],
          "start": 371,
          "end": 379
        },
        "start": 366,
        "end": 379
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 381,
        "end": 384
      },
      "alternate": null,
      "start": 362,
      "end": 384
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null,
          "start": 389,
          "end": 390
        },
        "operator": "==",
        "right": {
          "type": "ArrayExpression",
          "elements": [
            {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 395,
              "end": 396
            }
          ],
          "start": 394,
          "end": 397
        },
        "start": 389,
        "end": 397
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 399,
        "end": 402
      },
      "alternate": null,
      "start": 385,
      "end": 402
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "ObjectExpression",
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 409,
                "end": 410
              },
              "value": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 412,
                "end": 413
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 409,
              "end": 413
            }
          ],
          "start": 407,
          "end": 415
        },
        "operator": "==",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 419,
          "end": 420
        },
        "start": 407,
        "end": 420
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 422,
        "end": 425
      },
      "alternate": null,
      "start": 403,
      "end": 425
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "ArrayExpression",
          "elements": [
            {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 431,
              "end": 432
            }
          ],
          "start": 430,
          "end": 433
        },
        "operator": "==",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null,
          "start": 437,
          "end": 438
        },
        "start": 430,
        "end": 438
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 440,
        "end": 443
      },
      "alternate": null,
      "start": 426,
      "end": 443
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "ObjectExpression",
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 451,
                "end": 452
              },
              "value": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 454,
                "end": 455
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 451,
              "end": 455
            }
          ],
          "start": 449,
          "end": 457
        },
        "operator": "!=",
        "right": {
          "type": "ObjectExpression",
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 463,
                "end": 464
              },
              "value": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 466,
                "end": 467
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 463,
              "end": 467
            }
          ],
          "start": 461,
          "end": 469
        },
        "start": 449,
        "end": 469
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 471,
        "end": 474
      },
      "alternate": null,
      "start": 445,
      "end": 474
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "ArrayExpression",
          "elements": [
            {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 480,
              "end": 481
            }
          ],
          "start": 479,
          "end": 482
        },
        "operator": "!=",
        "right": {
          "type": "ArrayExpression",
          "elements": [
            {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 487,
              "end": 488
            }
          ],
          "start": 486,
          "end": 489
        },
        "start": 479,
        "end": 489
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 491,
        "end": 494
      },
      "alternate": null,
      "start": 475,
      "end": 494
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 499,
          "end": 500
        },
        "operator": "!=",
        "right": {
          "type": "ObjectExpression",
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 506,
                "end": 507
              },
              "value": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 509,
                "end": 510
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 506,
              "end": 510
            }
          ],
          "start": 504,
          "end": 512
        },
        "start": 499,
        "end": 512
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 514,
        "end": 517
      },
      "alternate": null,
      "start": 495,
      "end": 517
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null,
          "start": 522,
          "end": 523
        },
        "operator": "!=",
        "right": {
          "type": "ArrayExpression",
          "elements": [
            {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 528,
              "end": 529
            }
          ],
          "start": 527,
          "end": 530
        },
        "start": 522,
        "end": 530
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 532,
        "end": 535
      },
      "alternate": null,
      "start": 518,
      "end": 535
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "ObjectExpression",
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 542,
                "end": 543
              },
              "value": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 545,
                "end": 546
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 542,
              "end": 546
            }
          ],
          "start": 540,
          "end": 548
        },
        "operator": "!=",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 552,
          "end": 553
        },
        "start": 540,
        "end": 553
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 555,
        "end": 558
      },
      "alternate": null,
      "start": 536,
      "end": 558
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "ArrayExpression",
          "elements": [
            {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 564,
              "end": 565
            }
          ],
          "start": 563,
          "end": 566
        },
        "operator": "!=",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null,
          "start": 570,
          "end": 571
        },
        "start": 563,
        "end": 571
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 573,
        "end": 576
      },
      "alternate": null,
      "start": 559,
      "end": 576
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 576
}
```
