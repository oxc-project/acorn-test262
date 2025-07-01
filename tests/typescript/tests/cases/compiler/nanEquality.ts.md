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
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 17,
                "end": 23
              },
              "start": 15,
              "end": 23
            },
            "start": 14,
            "end": 23
          },
          "init": null,
          "definite": false,
          "start": 14,
          "end": 23
        }
      ],
      "declare": true,
      "start": 0,
      "end": 24
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 30,
          "end": 31
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "NaN",
          "optional": false,
          "typeAnnotation": null,
          "start": 36,
          "end": 39
        },
        "start": 30,
        "end": 39
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 41,
        "end": 43
      },
      "alternate": null,
      "start": 26,
      "end": 43
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "NaN",
          "optional": false,
          "typeAnnotation": null,
          "start": 48,
          "end": 51
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 56,
          "end": 57
        },
        "start": 48,
        "end": 57
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 59,
        "end": 61
      },
      "alternate": null,
      "start": 44,
      "end": 61
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 67,
          "end": 68
        },
        "operator": "==",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "NaN",
          "optional": false,
          "typeAnnotation": null,
          "start": 72,
          "end": 75
        },
        "start": 67,
        "end": 75
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 77,
        "end": 79
      },
      "alternate": null,
      "start": 63,
      "end": 79
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "NaN",
          "optional": false,
          "typeAnnotation": null,
          "start": 84,
          "end": 87
        },
        "operator": "==",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 91,
          "end": 92
        },
        "start": 84,
        "end": 92
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 94,
        "end": 96
      },
      "alternate": null,
      "start": 80,
      "end": 96
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 102,
          "end": 103
        },
        "operator": "!==",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "NaN",
          "optional": false,
          "typeAnnotation": null,
          "start": 108,
          "end": 111
        },
        "start": 102,
        "end": 111
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 113,
        "end": 115
      },
      "alternate": null,
      "start": 98,
      "end": 115
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "NaN",
          "optional": false,
          "typeAnnotation": null,
          "start": 120,
          "end": 123
        },
        "operator": "!==",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 128,
          "end": 129
        },
        "start": 120,
        "end": 129
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 131,
        "end": 133
      },
      "alternate": null,
      "start": 116,
      "end": 133
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 139,
          "end": 140
        },
        "operator": "!=",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "NaN",
          "optional": false,
          "typeAnnotation": null,
          "start": 144,
          "end": 147
        },
        "start": 139,
        "end": 147
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 149,
        "end": 151
      },
      "alternate": null,
      "start": 135,
      "end": 151
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "NaN",
          "optional": false,
          "typeAnnotation": null,
          "start": 156,
          "end": 159
        },
        "operator": "!=",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 163,
          "end": 164
        },
        "start": 156,
        "end": 164
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 166,
        "end": 168
      },
      "alternate": null,
      "start": 152,
      "end": 168
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 174,
          "end": 175
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "NaN",
          "optional": false,
          "typeAnnotation": null,
          "start": 182,
          "end": 185
        },
        "start": 174,
        "end": 187
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 189,
        "end": 191
      },
      "alternate": null,
      "start": 170,
      "end": 191
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "NaN",
          "optional": false,
          "typeAnnotation": null,
          "start": 198,
          "end": 201
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 208,
          "end": 209
        },
        "start": 196,
        "end": 209
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 211,
        "end": 213
      },
      "alternate": null,
      "start": 192,
      "end": 213
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 219,
          "end": 220
        },
        "operator": "!==",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "NaN",
          "optional": false,
          "typeAnnotation": null,
          "start": 227,
          "end": 230
        },
        "start": 219,
        "end": 232
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 234,
        "end": 236
      },
      "alternate": null,
      "start": 215,
      "end": 236
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "NaN",
          "optional": false,
          "typeAnnotation": null,
          "start": 243,
          "end": 246
        },
        "operator": "!==",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 253,
          "end": 254
        },
        "start": 241,
        "end": 254
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 256,
        "end": 258
      },
      "alternate": null,
      "start": 237,
      "end": 258
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "NaN",
          "optional": false,
          "typeAnnotation": null,
          "start": 264,
          "end": 267
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "NaN",
          "optional": false,
          "typeAnnotation": null,
          "start": 272,
          "end": 275
        },
        "start": 264,
        "end": 275
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 277,
        "end": 279
      },
      "alternate": null,
      "start": 260,
      "end": 279
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "NaN",
          "optional": false,
          "typeAnnotation": null,
          "start": 284,
          "end": 287
        },
        "operator": "!==",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "NaN",
          "optional": false,
          "typeAnnotation": null,
          "start": 292,
          "end": 295
        },
        "start": 284,
        "end": 295
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 297,
        "end": 299
      },
      "alternate": null,
      "start": 280,
      "end": 299
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "NaN",
          "optional": false,
          "typeAnnotation": null,
          "start": 305,
          "end": 308
        },
        "operator": "==",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "NaN",
          "optional": false,
          "typeAnnotation": null,
          "start": 312,
          "end": 315
        },
        "start": 305,
        "end": 315
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 317,
        "end": 319
      },
      "alternate": null,
      "start": 301,
      "end": 319
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "NaN",
          "optional": false,
          "typeAnnotation": null,
          "start": 324,
          "end": 327
        },
        "operator": "!=",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "NaN",
          "optional": false,
          "typeAnnotation": null,
          "start": 331,
          "end": 334
        },
        "start": 324,
        "end": 334
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 336,
        "end": 338
      },
      "alternate": null,
      "start": 320,
      "end": 338
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 362,
                "end": 365
              },
              "start": 360,
              "end": 365
            },
            "start": 359,
            "end": 365
          },
          "init": null,
          "definite": false,
          "start": 359,
          "end": 365
        }
      ],
      "declare": true,
      "start": 347,
      "end": 366
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "NaN",
          "optional": false,
          "typeAnnotation": null,
          "start": 371,
          "end": 374
        },
        "operator": "===",
        "right": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 379,
              "end": 380
            },
            "property": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 381,
              "end": 382
            },
            "optional": false,
            "computed": true,
            "start": 379,
            "end": 383
          },
          "property": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 384,
            "end": 385
          },
          "optional": false,
          "computed": true,
          "start": 379,
          "end": 386
        },
        "start": 371,
        "end": 386
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 388,
        "end": 390
      },
      "alternate": null,
      "start": 367,
      "end": 390
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "t1",
        "optional": false,
        "typeAnnotation": null,
        "start": 401,
        "end": 403
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 411,
              "end": 417
            },
            "start": 409,
            "end": 417
          },
          "start": 404,
          "end": 417
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "NaN",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 424,
              "end": 430
            },
            "start": 422,
            "end": 430
          },
          "start": 419,
          "end": 430
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": null,
                "start": 445,
                "end": 450
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "NaN",
                "optional": false,
                "typeAnnotation": null,
                "start": 455,
                "end": 458
              },
              "start": 445,
              "end": 458
            },
            "start": 438,
            "end": 459
          }
        ],
        "start": 432,
        "end": 467
      },
      "expression": false,
      "start": 392,
      "end": 467
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "t2",
        "optional": false,
        "typeAnnotation": null,
        "start": 478,
        "end": 480
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 488,
              "end": 494
            },
            "start": 486,
            "end": 494
          },
          "start": 481,
          "end": 494
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "NaN",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 501,
              "end": 507
            },
            "start": 499,
            "end": 507
          },
          "start": 496,
          "end": 507
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "NaN",
                "optional": false,
                "typeAnnotation": null,
                "start": 522,
                "end": 525
              },
              "operator": "==",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": null,
                "start": 529,
                "end": 534
              },
              "start": 522,
              "end": 534
            },
            "start": 515,
            "end": 535
          }
        ],
        "start": 509,
        "end": 543
      },
      "expression": false,
      "start": 469,
      "end": 543
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "t3",
        "optional": false,
        "typeAnnotation": null,
        "start": 554,
        "end": 556
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "NaN",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 562,
              "end": 568
            },
            "start": 560,
            "end": 568
          },
          "start": 557,
          "end": 568
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "NaN",
                "optional": false,
                "typeAnnotation": null,
                "start": 583,
                "end": 586
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "NaN",
                "optional": false,
                "typeAnnotation": null,
                "start": 591,
                "end": 594
              },
              "start": 583,
              "end": 594
            },
            "start": 576,
            "end": 595
          }
        ],
        "start": 570,
        "end": 603
      },
      "expression": false,
      "start": 545,
      "end": 603
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 603
}
```
