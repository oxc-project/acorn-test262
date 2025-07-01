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
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [],
                "start": 7,
                "end": 9
              },
              "start": 5,
              "end": 9
            },
            "start": 4,
            "end": 9
          },
          "init": null,
          "definite": false,
          "start": 4,
          "end": 9
        }
      ],
      "declare": false,
      "start": 0,
      "end": 10
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
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Object",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 18,
                  "end": 24
                },
                "typeArguments": null,
                "start": 18,
                "end": 24
              },
              "start": 16,
              "end": 24
            },
            "start": 15,
            "end": 24
          },
          "init": null,
          "definite": false,
          "start": 15,
          "end": 24
        }
      ],
      "declare": false,
      "start": 11,
      "end": 25
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 36,
        "end": 39
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
              "start": 40,
              "end": 41
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 40,
            "end": 41
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 43,
              "end": 44
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 43,
            "end": 44
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "V",
              "optional": false,
              "typeAnnotation": null,
              "start": 60,
              "end": 61
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 60,
            "end": 61
          }
        ],
        "start": 39,
        "end": 76
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
                "start": 80,
                "end": 81
              },
              "typeArguments": null,
              "start": 80,
              "end": 81
            },
            "start": 78,
            "end": 81
          },
          "start": 77,
          "end": 81
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "u",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 86,
                "end": 87
              },
              "typeArguments": null,
              "start": 86,
              "end": 87
            },
            "start": 84,
            "end": 87
          },
          "start": 83,
          "end": 87
        },
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
                "name": "V",
                "optional": false,
                "typeAnnotation": null,
                "start": 92,
                "end": 93
              },
              "typeArguments": null,
              "start": 92,
              "end": 93
            },
            "start": 90,
            "end": 93
          },
          "start": 89,
          "end": 93
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
                  "name": "ra1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 119,
                  "end": 122
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 125,
                    "end": 126
                  },
                  "operator": "<",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "u",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 129,
                    "end": 130
                  },
                  "start": 125,
                  "end": 130
                },
                "definite": false,
                "start": 119,
                "end": 130
              }
            ],
            "declare": false,
            "start": 115,
            "end": 131
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
                  "name": "ra2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 140,
                  "end": 143
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 146,
                    "end": 147
                  },
                  "operator": ">",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "u",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 150,
                    "end": 151
                  },
                  "start": 146,
                  "end": 151
                },
                "definite": false,
                "start": 140,
                "end": 151
              }
            ],
            "declare": false,
            "start": 136,
            "end": 152
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
                  "name": "ra3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 161,
                  "end": 164
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 167,
                    "end": 168
                  },
                  "operator": "<=",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "u",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 172,
                    "end": 173
                  },
                  "start": 167,
                  "end": 173
                },
                "definite": false,
                "start": 161,
                "end": 173
              }
            ],
            "declare": false,
            "start": 157,
            "end": 174
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
                  "name": "ra4",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 183,
                  "end": 186
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 189,
                    "end": 190
                  },
                  "operator": ">=",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "u",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 194,
                    "end": 195
                  },
                  "start": 189,
                  "end": 195
                },
                "definite": false,
                "start": 183,
                "end": 195
              }
            ],
            "declare": false,
            "start": 179,
            "end": 196
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
                  "name": "ra5",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 205,
                  "end": 208
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 211,
                    "end": 212
                  },
                  "operator": "==",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "u",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 216,
                    "end": 217
                  },
                  "start": 211,
                  "end": 217
                },
                "definite": false,
                "start": 205,
                "end": 217
              }
            ],
            "declare": false,
            "start": 201,
            "end": 218
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
                  "name": "ra6",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 227,
                  "end": 230
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 233,
                    "end": 234
                  },
                  "operator": "!=",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "u",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 238,
                    "end": 239
                  },
                  "start": 233,
                  "end": 239
                },
                "definite": false,
                "start": 227,
                "end": 239
              }
            ],
            "declare": false,
            "start": 223,
            "end": 240
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
                  "name": "ra7",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 249,
                  "end": 252
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 255,
                    "end": 256
                  },
                  "operator": "===",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "u",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 261,
                    "end": 262
                  },
                  "start": 255,
                  "end": 262
                },
                "definite": false,
                "start": 249,
                "end": 262
              }
            ],
            "declare": false,
            "start": 245,
            "end": 263
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
                  "name": "ra8",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 272,
                  "end": 275
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 278,
                    "end": 279
                  },
                  "operator": "!==",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "u",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 284,
                    "end": 285
                  },
                  "start": 278,
                  "end": 285
                },
                "definite": false,
                "start": 272,
                "end": 285
              }
            ],
            "declare": false,
            "start": 268,
            "end": 286
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
                  "name": "rb1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 296,
                  "end": 299
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "u",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 302,
                    "end": 303
                  },
                  "operator": "<",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 306,
                    "end": 307
                  },
                  "start": 302,
                  "end": 307
                },
                "definite": false,
                "start": 296,
                "end": 307
              }
            ],
            "declare": false,
            "start": 292,
            "end": 308
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
                  "name": "rb2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 317,
                  "end": 320
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "u",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 323,
                    "end": 324
                  },
                  "operator": ">",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 327,
                    "end": 328
                  },
                  "start": 323,
                  "end": 328
                },
                "definite": false,
                "start": 317,
                "end": 328
              }
            ],
            "declare": false,
            "start": 313,
            "end": 329
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
                  "name": "rb3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 338,
                  "end": 341
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "u",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 344,
                    "end": 345
                  },
                  "operator": "<=",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 349,
                    "end": 350
                  },
                  "start": 344,
                  "end": 350
                },
                "definite": false,
                "start": 338,
                "end": 350
              }
            ],
            "declare": false,
            "start": 334,
            "end": 351
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
                  "name": "rb4",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 360,
                  "end": 363
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "u",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 366,
                    "end": 367
                  },
                  "operator": ">=",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 371,
                    "end": 372
                  },
                  "start": 366,
                  "end": 372
                },
                "definite": false,
                "start": 360,
                "end": 372
              }
            ],
            "declare": false,
            "start": 356,
            "end": 373
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
                  "name": "rb5",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 382,
                  "end": 385
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "u",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 388,
                    "end": 389
                  },
                  "operator": "==",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 393,
                    "end": 394
                  },
                  "start": 388,
                  "end": 394
                },
                "definite": false,
                "start": 382,
                "end": 394
              }
            ],
            "declare": false,
            "start": 378,
            "end": 395
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
                  "name": "rb6",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 404,
                  "end": 407
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "u",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 410,
                    "end": 411
                  },
                  "operator": "!=",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 415,
                    "end": 416
                  },
                  "start": 410,
                  "end": 416
                },
                "definite": false,
                "start": 404,
                "end": 416
              }
            ],
            "declare": false,
            "start": 400,
            "end": 417
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
                  "name": "rb7",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 426,
                  "end": 429
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "u",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 432,
                    "end": 433
                  },
                  "operator": "===",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 438,
                    "end": 439
                  },
                  "start": 432,
                  "end": 439
                },
                "definite": false,
                "start": 426,
                "end": 439
              }
            ],
            "declare": false,
            "start": 422,
            "end": 440
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
                  "name": "rb8",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 449,
                  "end": 452
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "u",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 455,
                    "end": 456
                  },
                  "operator": "!==",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 461,
                    "end": 462
                  },
                  "start": 455,
                  "end": 462
                },
                "definite": false,
                "start": 449,
                "end": 462
              }
            ],
            "declare": false,
            "start": 445,
            "end": 463
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
                  "name": "rc1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 473,
                  "end": 476
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 479,
                    "end": 480
                  },
                  "operator": "<",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "v",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 483,
                    "end": 484
                  },
                  "start": 479,
                  "end": 484
                },
                "definite": false,
                "start": 473,
                "end": 484
              }
            ],
            "declare": false,
            "start": 469,
            "end": 485
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
                  "name": "rc2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 494,
                  "end": 497
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 500,
                    "end": 501
                  },
                  "operator": ">",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "v",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 504,
                    "end": 505
                  },
                  "start": 500,
                  "end": 505
                },
                "definite": false,
                "start": 494,
                "end": 505
              }
            ],
            "declare": false,
            "start": 490,
            "end": 506
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
                  "name": "rc3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 515,
                  "end": 518
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 521,
                    "end": 522
                  },
                  "operator": "<=",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "v",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 526,
                    "end": 527
                  },
                  "start": 521,
                  "end": 527
                },
                "definite": false,
                "start": 515,
                "end": 527
              }
            ],
            "declare": false,
            "start": 511,
            "end": 528
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
                  "name": "rc4",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 537,
                  "end": 540
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 543,
                    "end": 544
                  },
                  "operator": ">=",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "v",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 548,
                    "end": 549
                  },
                  "start": 543,
                  "end": 549
                },
                "definite": false,
                "start": 537,
                "end": 549
              }
            ],
            "declare": false,
            "start": 533,
            "end": 550
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
                  "name": "rc5",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 559,
                  "end": 562
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 565,
                    "end": 566
                  },
                  "operator": "==",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "v",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 570,
                    "end": 571
                  },
                  "start": 565,
                  "end": 571
                },
                "definite": false,
                "start": 559,
                "end": 571
              }
            ],
            "declare": false,
            "start": 555,
            "end": 572
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
                  "name": "rc6",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 581,
                  "end": 584
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 587,
                    "end": 588
                  },
                  "operator": "!=",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "v",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 592,
                    "end": 593
                  },
                  "start": 587,
                  "end": 593
                },
                "definite": false,
                "start": 581,
                "end": 593
              }
            ],
            "declare": false,
            "start": 577,
            "end": 594
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
                  "name": "rc7",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 603,
                  "end": 606
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 609,
                    "end": 610
                  },
                  "operator": "===",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "v",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 615,
                    "end": 616
                  },
                  "start": 609,
                  "end": 616
                },
                "definite": false,
                "start": 603,
                "end": 616
              }
            ],
            "declare": false,
            "start": 599,
            "end": 617
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
                  "name": "rc8",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 626,
                  "end": 629
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 632,
                    "end": 633
                  },
                  "operator": "!==",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "v",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 638,
                    "end": 639
                  },
                  "start": 632,
                  "end": 639
                },
                "definite": false,
                "start": 626,
                "end": 639
              }
            ],
            "declare": false,
            "start": 622,
            "end": 640
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
                  "name": "rd1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 650,
                  "end": 653
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "v",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 656,
                    "end": 657
                  },
                  "operator": "<",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 660,
                    "end": 661
                  },
                  "start": 656,
                  "end": 661
                },
                "definite": false,
                "start": 650,
                "end": 661
              }
            ],
            "declare": false,
            "start": 646,
            "end": 662
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
                  "name": "rd2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 671,
                  "end": 674
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "v",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 677,
                    "end": 678
                  },
                  "operator": ">",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 681,
                    "end": 682
                  },
                  "start": 677,
                  "end": 682
                },
                "definite": false,
                "start": 671,
                "end": 682
              }
            ],
            "declare": false,
            "start": 667,
            "end": 683
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
                  "name": "rd3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 692,
                  "end": 695
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "v",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 698,
                    "end": 699
                  },
                  "operator": "<=",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 703,
                    "end": 704
                  },
                  "start": 698,
                  "end": 704
                },
                "definite": false,
                "start": 692,
                "end": 704
              }
            ],
            "declare": false,
            "start": 688,
            "end": 705
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
                  "name": "rd4",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 714,
                  "end": 717
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "v",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 720,
                    "end": 721
                  },
                  "operator": ">=",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 725,
                    "end": 726
                  },
                  "start": 720,
                  "end": 726
                },
                "definite": false,
                "start": 714,
                "end": 726
              }
            ],
            "declare": false,
            "start": 710,
            "end": 727
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
                  "name": "rd5",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 736,
                  "end": 739
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "v",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 742,
                    "end": 743
                  },
                  "operator": "==",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 747,
                    "end": 748
                  },
                  "start": 742,
                  "end": 748
                },
                "definite": false,
                "start": 736,
                "end": 748
              }
            ],
            "declare": false,
            "start": 732,
            "end": 749
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
                  "name": "rd6",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 758,
                  "end": 761
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "v",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 764,
                    "end": 765
                  },
                  "operator": "!=",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 769,
                    "end": 770
                  },
                  "start": 764,
                  "end": 770
                },
                "definite": false,
                "start": 758,
                "end": 770
              }
            ],
            "declare": false,
            "start": 754,
            "end": 771
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
                  "name": "rd7",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 780,
                  "end": 783
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "v",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 786,
                    "end": 787
                  },
                  "operator": "===",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 792,
                    "end": 793
                  },
                  "start": 786,
                  "end": 793
                },
                "definite": false,
                "start": 780,
                "end": 793
              }
            ],
            "declare": false,
            "start": 776,
            "end": 794
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
                  "name": "rd8",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 803,
                  "end": 806
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "v",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 809,
                    "end": 810
                  },
                  "operator": "!==",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 815,
                    "end": 816
                  },
                  "start": 809,
                  "end": 816
                },
                "definite": false,
                "start": 803,
                "end": 816
              }
            ],
            "declare": false,
            "start": 799,
            "end": 817
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
                  "name": "re1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 837,
                  "end": 840
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 843,
                    "end": 844
                  },
                  "operator": "<",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 847,
                    "end": 848
                  },
                  "start": 843,
                  "end": 848
                },
                "definite": false,
                "start": 837,
                "end": 848
              }
            ],
            "declare": false,
            "start": 833,
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
                  "name": "re2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 858,
                  "end": 861
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 864,
                    "end": 865
                  },
                  "operator": ">",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 868,
                    "end": 869
                  },
                  "start": 864,
                  "end": 869
                },
                "definite": false,
                "start": 858,
                "end": 869
              }
            ],
            "declare": false,
            "start": 854,
            "end": 870
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
                  "name": "re3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 879,
                  "end": 882
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 885,
                    "end": 886
                  },
                  "operator": "<=",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 890,
                    "end": 891
                  },
                  "start": 885,
                  "end": 891
                },
                "definite": false,
                "start": 879,
                "end": 891
              }
            ],
            "declare": false,
            "start": 875,
            "end": 892
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
                  "name": "re4",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 901,
                  "end": 904
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 907,
                    "end": 908
                  },
                  "operator": ">=",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 912,
                    "end": 913
                  },
                  "start": 907,
                  "end": 913
                },
                "definite": false,
                "start": 901,
                "end": 913
              }
            ],
            "declare": false,
            "start": 897,
            "end": 914
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
                  "name": "re5",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 923,
                  "end": 926
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 929,
                    "end": 930
                  },
                  "operator": "==",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 934,
                    "end": 935
                  },
                  "start": 929,
                  "end": 935
                },
                "definite": false,
                "start": 923,
                "end": 935
              }
            ],
            "declare": false,
            "start": 919,
            "end": 936
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
                  "name": "re6",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 945,
                  "end": 948
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 951,
                    "end": 952
                  },
                  "operator": "!=",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 956,
                    "end": 957
                  },
                  "start": 951,
                  "end": 957
                },
                "definite": false,
                "start": 945,
                "end": 957
              }
            ],
            "declare": false,
            "start": 941,
            "end": 958
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
                  "name": "re7",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 967,
                  "end": 970
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 973,
                    "end": 974
                  },
                  "operator": "===",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 979,
                    "end": 980
                  },
                  "start": 973,
                  "end": 980
                },
                "definite": false,
                "start": 967,
                "end": 980
              }
            ],
            "declare": false,
            "start": 963,
            "end": 981
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
                  "name": "re8",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 990,
                  "end": 993
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 996,
                    "end": 997
                  },
                  "operator": "!==",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1002,
                    "end": 1003
                  },
                  "start": 996,
                  "end": 1003
                },
                "definite": false,
                "start": 990,
                "end": 1003
              }
            ],
            "declare": false,
            "start": 986,
            "end": 1004
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
                  "name": "rf1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1014,
                  "end": 1017
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1020,
                    "end": 1021
                  },
                  "operator": "<",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1024,
                    "end": 1025
                  },
                  "start": 1020,
                  "end": 1025
                },
                "definite": false,
                "start": 1014,
                "end": 1025
              }
            ],
            "declare": false,
            "start": 1010,
            "end": 1026
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
                  "name": "rf2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1035,
                  "end": 1038
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1041,
                    "end": 1042
                  },
                  "operator": ">",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1045,
                    "end": 1046
                  },
                  "start": 1041,
                  "end": 1046
                },
                "definite": false,
                "start": 1035,
                "end": 1046
              }
            ],
            "declare": false,
            "start": 1031,
            "end": 1047
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
                  "name": "rf3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1056,
                  "end": 1059
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1062,
                    "end": 1063
                  },
                  "operator": "<=",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1067,
                    "end": 1068
                  },
                  "start": 1062,
                  "end": 1068
                },
                "definite": false,
                "start": 1056,
                "end": 1068
              }
            ],
            "declare": false,
            "start": 1052,
            "end": 1069
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
                  "name": "rf4",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1078,
                  "end": 1081
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1084,
                    "end": 1085
                  },
                  "operator": ">=",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1089,
                    "end": 1090
                  },
                  "start": 1084,
                  "end": 1090
                },
                "definite": false,
                "start": 1078,
                "end": 1090
              }
            ],
            "declare": false,
            "start": 1074,
            "end": 1091
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
                  "name": "rf5",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1100,
                  "end": 1103
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1106,
                    "end": 1107
                  },
                  "operator": "==",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1111,
                    "end": 1112
                  },
                  "start": 1106,
                  "end": 1112
                },
                "definite": false,
                "start": 1100,
                "end": 1112
              }
            ],
            "declare": false,
            "start": 1096,
            "end": 1113
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
                  "name": "rf6",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1122,
                  "end": 1125
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1128,
                    "end": 1129
                  },
                  "operator": "!=",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1133,
                    "end": 1134
                  },
                  "start": 1128,
                  "end": 1134
                },
                "definite": false,
                "start": 1122,
                "end": 1134
              }
            ],
            "declare": false,
            "start": 1118,
            "end": 1135
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
                  "name": "rf7",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1144,
                  "end": 1147
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1150,
                    "end": 1151
                  },
                  "operator": "===",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1156,
                    "end": 1157
                  },
                  "start": 1150,
                  "end": 1157
                },
                "definite": false,
                "start": 1144,
                "end": 1157
              }
            ],
            "declare": false,
            "start": 1140,
            "end": 1158
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
                  "name": "rf8",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1167,
                  "end": 1170
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1173,
                    "end": 1174
                  },
                  "operator": "!==",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1179,
                    "end": 1180
                  },
                  "start": 1173,
                  "end": 1180
                },
                "definite": false,
                "start": 1167,
                "end": 1180
              }
            ],
            "declare": false,
            "start": 1163,
            "end": 1181
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
                  "name": "rg1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1191,
                  "end": 1194
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1197,
                    "end": 1198
                  },
                  "operator": "<",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1201,
                    "end": 1202
                  },
                  "start": 1197,
                  "end": 1202
                },
                "definite": false,
                "start": 1191,
                "end": 1202
              }
            ],
            "declare": false,
            "start": 1187,
            "end": 1203
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
                  "name": "rg2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1212,
                  "end": 1215
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1218,
                    "end": 1219
                  },
                  "operator": ">",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1222,
                    "end": 1223
                  },
                  "start": 1218,
                  "end": 1223
                },
                "definite": false,
                "start": 1212,
                "end": 1223
              }
            ],
            "declare": false,
            "start": 1208,
            "end": 1224
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
                  "name": "rg3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1233,
                  "end": 1236
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1239,
                    "end": 1240
                  },
                  "operator": "<=",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1244,
                    "end": 1245
                  },
                  "start": 1239,
                  "end": 1245
                },
                "definite": false,
                "start": 1233,
                "end": 1245
              }
            ],
            "declare": false,
            "start": 1229,
            "end": 1246
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
                  "name": "rg4",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1255,
                  "end": 1258
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1261,
                    "end": 1262
                  },
                  "operator": ">=",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1266,
                    "end": 1267
                  },
                  "start": 1261,
                  "end": 1267
                },
                "definite": false,
                "start": 1255,
                "end": 1267
              }
            ],
            "declare": false,
            "start": 1251,
            "end": 1268
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
                  "name": "rg5",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1277,
                  "end": 1280
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1283,
                    "end": 1284
                  },
                  "operator": "==",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1288,
                    "end": 1289
                  },
                  "start": 1283,
                  "end": 1289
                },
                "definite": false,
                "start": 1277,
                "end": 1289
              }
            ],
            "declare": false,
            "start": 1273,
            "end": 1290
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
                  "name": "rg6",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1299,
                  "end": 1302
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1305,
                    "end": 1306
                  },
                  "operator": "!=",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1310,
                    "end": 1311
                  },
                  "start": 1305,
                  "end": 1311
                },
                "definite": false,
                "start": 1299,
                "end": 1311
              }
            ],
            "declare": false,
            "start": 1295,
            "end": 1312
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
                  "name": "rg7",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1321,
                  "end": 1324
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1327,
                    "end": 1328
                  },
                  "operator": "===",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1333,
                    "end": 1334
                  },
                  "start": 1327,
                  "end": 1334
                },
                "definite": false,
                "start": 1321,
                "end": 1334
              }
            ],
            "declare": false,
            "start": 1317,
            "end": 1335
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
                  "name": "rg8",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1344,
                  "end": 1347
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1350,
                    "end": 1351
                  },
                  "operator": "!==",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1356,
                    "end": 1357
                  },
                  "start": 1350,
                  "end": 1357
                },
                "definite": false,
                "start": 1344,
                "end": 1357
              }
            ],
            "declare": false,
            "start": 1340,
            "end": 1358
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
                  "name": "rh1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1368,
                  "end": 1371
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1374,
                    "end": 1375
                  },
                  "operator": "<",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1378,
                    "end": 1379
                  },
                  "start": 1374,
                  "end": 1379
                },
                "definite": false,
                "start": 1368,
                "end": 1379
              }
            ],
            "declare": false,
            "start": 1364,
            "end": 1380
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
                  "name": "rh2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1389,
                  "end": 1392
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1395,
                    "end": 1396
                  },
                  "operator": ">",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1399,
                    "end": 1400
                  },
                  "start": 1395,
                  "end": 1400
                },
                "definite": false,
                "start": 1389,
                "end": 1400
              }
            ],
            "declare": false,
            "start": 1385,
            "end": 1401
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
                  "name": "rh3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1410,
                  "end": 1413
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1416,
                    "end": 1417
                  },
                  "operator": "<=",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1421,
                    "end": 1422
                  },
                  "start": 1416,
                  "end": 1422
                },
                "definite": false,
                "start": 1410,
                "end": 1422
              }
            ],
            "declare": false,
            "start": 1406,
            "end": 1423
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
                  "name": "rh4",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1432,
                  "end": 1435
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1438,
                    "end": 1439
                  },
                  "operator": ">=",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1443,
                    "end": 1444
                  },
                  "start": 1438,
                  "end": 1444
                },
                "definite": false,
                "start": 1432,
                "end": 1444
              }
            ],
            "declare": false,
            "start": 1428,
            "end": 1445
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
                  "name": "rh5",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1454,
                  "end": 1457
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1460,
                    "end": 1461
                  },
                  "operator": "==",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1465,
                    "end": 1466
                  },
                  "start": 1460,
                  "end": 1466
                },
                "definite": false,
                "start": 1454,
                "end": 1466
              }
            ],
            "declare": false,
            "start": 1450,
            "end": 1467
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
                  "name": "rh6",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1476,
                  "end": 1479
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1482,
                    "end": 1483
                  },
                  "operator": "!=",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1487,
                    "end": 1488
                  },
                  "start": 1482,
                  "end": 1488
                },
                "definite": false,
                "start": 1476,
                "end": 1488
              }
            ],
            "declare": false,
            "start": 1472,
            "end": 1489
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
                  "name": "rh7",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1498,
                  "end": 1501
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1504,
                    "end": 1505
                  },
                  "operator": "===",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1510,
                    "end": 1511
                  },
                  "start": 1504,
                  "end": 1511
                },
                "definite": false,
                "start": 1498,
                "end": 1511
              }
            ],
            "declare": false,
            "start": 1494,
            "end": 1512
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
                  "name": "rh8",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1521,
                  "end": 1524
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1527,
                    "end": 1528
                  },
                  "operator": "!==",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1533,
                    "end": 1534
                  },
                  "start": 1527,
                  "end": 1534
                },
                "definite": false,
                "start": 1521,
                "end": 1534
              }
            ],
            "declare": false,
            "start": 1517,
            "end": 1535
          }
        ],
        "start": 95,
        "end": 1537
      },
      "expression": false,
      "start": 27,
      "end": 1537
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1537
}
```
