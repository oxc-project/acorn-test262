__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "E1",
        "optional": false,
        "typeAnnotation": null,
        "start": 26,
        "end": 28
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 35,
              "end": 36
            },
            "initializer": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 39,
              "end": 40
            },
            "computed": false,
            "start": 35,
            "end": 40
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 46,
              "end": 47
            },
            "initializer": {
              "type": "Literal",
              "value": 2,
              "raw": "2",
              "start": 50,
              "end": 51
            },
            "computed": false,
            "start": 46,
            "end": 51
          }
        ],
        "start": 29,
        "end": 54
      },
      "const": false,
      "declare": false,
      "start": 21,
      "end": 54
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "E2",
        "optional": false,
        "typeAnnotation": null,
        "start": 82,
        "end": 84
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 91,
              "end": 92
            },
            "initializer": {
              "type": "BinaryExpression",
              "left": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 95,
                "end": 96
              },
              "operator": "<<",
              "right": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 100,
                "end": 101
              },
              "start": 95,
              "end": 101
            },
            "computed": false,
            "start": 91,
            "end": 101
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 107,
              "end": 108
            },
            "initializer": {
              "type": "BinaryExpression",
              "left": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 111,
                "end": 112
              },
              "operator": "<<",
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 116,
                "end": 117
              },
              "start": 111,
              "end": 117
            },
            "computed": false,
            "start": 107,
            "end": 117
          }
        ],
        "start": 85,
        "end": 119
      },
      "const": false,
      "declare": false,
      "start": 77,
      "end": 119
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null,
        "start": 130,
        "end": 132
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "v",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "E1",
                "optional": false,
                "typeAnnotation": null,
                "start": 136,
                "end": 138
              },
              "typeArguments": null,
              "start": 136,
              "end": 138
            },
            "start": 134,
            "end": 138
          },
          "start": 133,
          "end": 138
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "v",
                "optional": false,
                "typeAnnotation": null,
                "start": 150,
                "end": 151
              },
              "operator": "!==",
              "right": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 156,
                "end": 157
              },
              "start": 150,
              "end": 157
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "v",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 179,
                    "end": 180
                  },
                  "directive": null,
                  "start": 179,
                  "end": 181
                }
              ],
              "start": 159,
              "end": 187
            },
            "alternate": null,
            "start": 146,
            "end": 187
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "v",
                "optional": false,
                "typeAnnotation": null,
                "start": 196,
                "end": 197
              },
              "operator": "!==",
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 202,
                "end": 203
              },
              "start": 196,
              "end": 203
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "v",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 215,
                    "end": 216
                  },
                  "directive": null,
                  "start": 215,
                  "end": 217
                }
              ],
              "start": 205,
              "end": 223
            },
            "alternate": null,
            "start": 192,
            "end": 223
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "v",
                "optional": false,
                "typeAnnotation": null,
                "start": 232,
                "end": 233
              },
              "operator": "!==",
              "right": {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 238,
                "end": 239
              },
              "start": 232,
              "end": 239
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "v",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 251,
                    "end": 252
                  },
                  "directive": null,
                  "start": 251,
                  "end": 253
                }
              ],
              "start": 241,
              "end": 259
            },
            "alternate": null,
            "start": 228,
            "end": 259
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "v",
                "optional": false,
                "typeAnnotation": null,
                "start": 268,
                "end": 269
              },
              "operator": "!==",
              "right": {
                "type": "Literal",
                "value": 3,
                "raw": "3",
                "start": 274,
                "end": 275
              },
              "start": 268,
              "end": 275
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "v",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 297,
                    "end": 298
                  },
                  "directive": null,
                  "start": 297,
                  "end": 299
                }
              ],
              "start": 277,
              "end": 305
            },
            "alternate": null,
            "start": 264,
            "end": 305
          }
        ],
        "start": 140,
        "end": 307
      },
      "expression": false,
      "start": 121,
      "end": 307
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null,
        "start": 318,
        "end": 320
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "v",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "E2",
                "optional": false,
                "typeAnnotation": null,
                "start": 324,
                "end": 326
              },
              "typeArguments": null,
              "start": 324,
              "end": 326
            },
            "start": 322,
            "end": 326
          },
          "start": 321,
          "end": 326
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "v",
                "optional": false,
                "typeAnnotation": null,
                "start": 338,
                "end": 339
              },
              "operator": "!==",
              "right": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 344,
                "end": 345
              },
              "start": 338,
              "end": 345
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "v",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 357,
                    "end": 358
                  },
                  "directive": null,
                  "start": 357,
                  "end": 359
                }
              ],
              "start": 347,
              "end": 365
            },
            "alternate": null,
            "start": 334,
            "end": 365
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "v",
                "optional": false,
                "typeAnnotation": null,
                "start": 374,
                "end": 375
              },
              "operator": "!==",
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 380,
                "end": 381
              },
              "start": 374,
              "end": 381
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "v",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 393,
                    "end": 394
                  },
                  "directive": null,
                  "start": 393,
                  "end": 395
                }
              ],
              "start": 383,
              "end": 401
            },
            "alternate": null,
            "start": 370,
            "end": 401
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "v",
                "optional": false,
                "typeAnnotation": null,
                "start": 410,
                "end": 411
              },
              "operator": "!==",
              "right": {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 416,
                "end": 417
              },
              "start": 410,
              "end": 417
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "v",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 429,
                    "end": 430
                  },
                  "directive": null,
                  "start": 429,
                  "end": 431
                }
              ],
              "start": 419,
              "end": 437
            },
            "alternate": null,
            "start": 406,
            "end": 437
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "v",
                "optional": false,
                "typeAnnotation": null,
                "start": 446,
                "end": 447
              },
              "operator": "!==",
              "right": {
                "type": "Literal",
                "value": 3,
                "raw": "3",
                "start": 452,
                "end": 453
              },
              "start": 446,
              "end": 453
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "v",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 465,
                    "end": 466
                  },
                  "directive": null,
                  "start": 465,
                  "end": 467
                }
              ],
              "start": 455,
              "end": 473
            },
            "alternate": null,
            "start": 442,
            "end": 473
          }
        ],
        "start": 328,
        "end": 475
      },
      "expression": false,
      "start": 309,
      "end": 475
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 21,
  "end": 475
}
```
