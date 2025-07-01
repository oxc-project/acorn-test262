__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "v1",
            "optional": false,
            "typeAnnotation": null,
            "start": 4,
            "end": 6
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "Literal",
              "value": "abc",
              "raw": "'abc'",
              "start": 9,
              "end": 14
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "const",
                "optional": false,
                "typeAnnotation": null,
                "start": 18,
                "end": 23
              },
              "typeArguments": null,
              "start": 18,
              "end": 23
            },
            "start": 9,
            "end": 23
          },
          "definite": false,
          "start": 4,
          "end": 23
        }
      ],
      "declare": false,
      "start": 0,
      "end": 24
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
            "name": "v2",
            "optional": false,
            "typeAnnotation": null,
            "start": 29,
            "end": 31
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "TemplateLiteral",
              "quasis": [
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "abc",
                    "cooked": "abc"
                  },
                  "tail": true,
                  "start": 34,
                  "end": 39
                }
              ],
              "expressions": [],
              "start": 34,
              "end": 39
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "const",
                "optional": false,
                "typeAnnotation": null,
                "start": 43,
                "end": 48
              },
              "typeArguments": null,
              "start": 43,
              "end": 48
            },
            "start": 34,
            "end": 48
          },
          "definite": false,
          "start": 29,
          "end": 48
        }
      ],
      "declare": false,
      "start": 25,
      "end": 49
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
            "name": "v3",
            "optional": false,
            "typeAnnotation": null,
            "start": 54,
            "end": 56
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "Literal",
              "value": 10,
              "raw": "10",
              "start": 59,
              "end": 61
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "const",
                "optional": false,
                "typeAnnotation": null,
                "start": 65,
                "end": 70
              },
              "typeArguments": null,
              "start": 65,
              "end": 70
            },
            "start": 59,
            "end": 70
          },
          "definite": false,
          "start": 54,
          "end": 70
        }
      ],
      "declare": false,
      "start": 50,
      "end": 71
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
            "name": "v4",
            "optional": false,
            "typeAnnotation": null,
            "start": 76,
            "end": 78
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "UnaryExpression",
              "operator": "-",
              "argument": {
                "type": "Literal",
                "value": 10,
                "raw": "10",
                "start": 82,
                "end": 84
              },
              "prefix": true,
              "start": 81,
              "end": 84
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "const",
                "optional": false,
                "typeAnnotation": null,
                "start": 88,
                "end": 93
              },
              "typeArguments": null,
              "start": 88,
              "end": 93
            },
            "start": 81,
            "end": 93
          },
          "definite": false,
          "start": 76,
          "end": 93
        }
      ],
      "declare": false,
      "start": 72,
      "end": 94
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
            "name": "v5",
            "optional": false,
            "typeAnnotation": null,
            "start": 99,
            "end": 101
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "UnaryExpression",
              "operator": "+",
              "argument": {
                "type": "Literal",
                "value": 10,
                "raw": "10",
                "start": 105,
                "end": 107
              },
              "prefix": true,
              "start": 104,
              "end": 107
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "const",
                "optional": false,
                "typeAnnotation": null,
                "start": 111,
                "end": 116
              },
              "typeArguments": null,
              "start": 111,
              "end": 116
            },
            "start": 104,
            "end": 116
          },
          "definite": false,
          "start": 99,
          "end": 116
        }
      ],
      "declare": false,
      "start": 95,
      "end": 117
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
            "name": "v6",
            "optional": false,
            "typeAnnotation": null,
            "start": 122,
            "end": 124
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "Literal",
              "value": null,
              "raw": "10n",
              "bigint": "10",
              "start": 127,
              "end": 130
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "const",
                "optional": false,
                "typeAnnotation": null,
                "start": 134,
                "end": 139
              },
              "typeArguments": null,
              "start": 134,
              "end": 139
            },
            "start": 127,
            "end": 139
          },
          "definite": false,
          "start": 122,
          "end": 139
        }
      ],
      "declare": false,
      "start": 118,
      "end": 140
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
            "name": "v7",
            "optional": false,
            "typeAnnotation": null,
            "start": 145,
            "end": 147
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "UnaryExpression",
              "operator": "-",
              "argument": {
                "type": "Literal",
                "value": null,
                "raw": "10n",
                "bigint": "10",
                "start": 151,
                "end": 154
              },
              "prefix": true,
              "start": 150,
              "end": 154
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "const",
                "optional": false,
                "typeAnnotation": null,
                "start": 158,
                "end": 163
              },
              "typeArguments": null,
              "start": 158,
              "end": 163
            },
            "start": 150,
            "end": 163
          },
          "definite": false,
          "start": 145,
          "end": 163
        }
      ],
      "declare": false,
      "start": 141,
      "end": 164
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
            "name": "v8",
            "optional": false,
            "typeAnnotation": null,
            "start": 169,
            "end": 171
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 174,
              "end": 178
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "const",
                "optional": false,
                "typeAnnotation": null,
                "start": 182,
                "end": 187
              },
              "typeArguments": null,
              "start": 182,
              "end": 187
            },
            "start": 174,
            "end": 187
          },
          "definite": false,
          "start": 169,
          "end": 187
        }
      ],
      "declare": false,
      "start": 165,
      "end": 188
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
            "name": "v9",
            "optional": false,
            "typeAnnotation": null,
            "start": 193,
            "end": 195
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "Literal",
              "value": false,
              "raw": "false",
              "start": 198,
              "end": 203
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "const",
                "optional": false,
                "typeAnnotation": null,
                "start": 207,
                "end": 212
              },
              "typeArguments": null,
              "start": 207,
              "end": 212
            },
            "start": 198,
            "end": 212
          },
          "definite": false,
          "start": 193,
          "end": 212
        }
      ],
      "declare": false,
      "start": 189,
      "end": 213
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
            "name": "c1",
            "optional": false,
            "typeAnnotation": null,
            "start": 219,
            "end": 221
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "Literal",
              "value": "abc",
              "raw": "'abc'",
              "start": 224,
              "end": 229
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "const",
                "optional": false,
                "typeAnnotation": null,
                "start": 233,
                "end": 238
              },
              "typeArguments": null,
              "start": 233,
              "end": 238
            },
            "start": 224,
            "end": 238
          },
          "definite": false,
          "start": 219,
          "end": 238
        }
      ],
      "declare": false,
      "start": 215,
      "end": 239
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
            "name": "c2",
            "optional": false,
            "typeAnnotation": null,
            "start": 244,
            "end": 246
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "TemplateLiteral",
              "quasis": [
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "abc",
                    "cooked": "abc"
                  },
                  "tail": true,
                  "start": 249,
                  "end": 254
                }
              ],
              "expressions": [],
              "start": 249,
              "end": 254
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "const",
                "optional": false,
                "typeAnnotation": null,
                "start": 258,
                "end": 263
              },
              "typeArguments": null,
              "start": 258,
              "end": 263
            },
            "start": 249,
            "end": 263
          },
          "definite": false,
          "start": 244,
          "end": 263
        }
      ],
      "declare": false,
      "start": 240,
      "end": 264
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
            "name": "c3",
            "optional": false,
            "typeAnnotation": null,
            "start": 269,
            "end": 271
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "Literal",
              "value": 10,
              "raw": "10",
              "start": 274,
              "end": 276
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "const",
                "optional": false,
                "typeAnnotation": null,
                "start": 280,
                "end": 285
              },
              "typeArguments": null,
              "start": 280,
              "end": 285
            },
            "start": 274,
            "end": 285
          },
          "definite": false,
          "start": 269,
          "end": 285
        }
      ],
      "declare": false,
      "start": 265,
      "end": 286
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
            "name": "c4",
            "optional": false,
            "typeAnnotation": null,
            "start": 291,
            "end": 293
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "UnaryExpression",
              "operator": "-",
              "argument": {
                "type": "Literal",
                "value": 10,
                "raw": "10",
                "start": 297,
                "end": 299
              },
              "prefix": true,
              "start": 296,
              "end": 299
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "const",
                "optional": false,
                "typeAnnotation": null,
                "start": 303,
                "end": 308
              },
              "typeArguments": null,
              "start": 303,
              "end": 308
            },
            "start": 296,
            "end": 308
          },
          "definite": false,
          "start": 291,
          "end": 308
        }
      ],
      "declare": false,
      "start": 287,
      "end": 309
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
            "name": "c5",
            "optional": false,
            "typeAnnotation": null,
            "start": 314,
            "end": 316
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "UnaryExpression",
              "operator": "+",
              "argument": {
                "type": "Literal",
                "value": 10,
                "raw": "10",
                "start": 320,
                "end": 322
              },
              "prefix": true,
              "start": 319,
              "end": 322
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "const",
                "optional": false,
                "typeAnnotation": null,
                "start": 326,
                "end": 331
              },
              "typeArguments": null,
              "start": 326,
              "end": 331
            },
            "start": 319,
            "end": 331
          },
          "definite": false,
          "start": 314,
          "end": 331
        }
      ],
      "declare": false,
      "start": 310,
      "end": 332
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
            "name": "c6",
            "optional": false,
            "typeAnnotation": null,
            "start": 337,
            "end": 339
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "Literal",
              "value": null,
              "raw": "10n",
              "bigint": "10",
              "start": 342,
              "end": 345
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "const",
                "optional": false,
                "typeAnnotation": null,
                "start": 349,
                "end": 354
              },
              "typeArguments": null,
              "start": 349,
              "end": 354
            },
            "start": 342,
            "end": 354
          },
          "definite": false,
          "start": 337,
          "end": 354
        }
      ],
      "declare": false,
      "start": 333,
      "end": 355
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
            "name": "c7",
            "optional": false,
            "typeAnnotation": null,
            "start": 360,
            "end": 362
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "UnaryExpression",
              "operator": "-",
              "argument": {
                "type": "Literal",
                "value": null,
                "raw": "10n",
                "bigint": "10",
                "start": 366,
                "end": 369
              },
              "prefix": true,
              "start": 365,
              "end": 369
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "const",
                "optional": false,
                "typeAnnotation": null,
                "start": 373,
                "end": 378
              },
              "typeArguments": null,
              "start": 373,
              "end": 378
            },
            "start": 365,
            "end": 378
          },
          "definite": false,
          "start": 360,
          "end": 378
        }
      ],
      "declare": false,
      "start": 356,
      "end": 379
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
            "name": "c8",
            "optional": false,
            "typeAnnotation": null,
            "start": 384,
            "end": 386
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 389,
              "end": 393
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "const",
                "optional": false,
                "typeAnnotation": null,
                "start": 397,
                "end": 402
              },
              "typeArguments": null,
              "start": 397,
              "end": 402
            },
            "start": 389,
            "end": 402
          },
          "definite": false,
          "start": 384,
          "end": 402
        }
      ],
      "declare": false,
      "start": 380,
      "end": 403
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
            "name": "c9",
            "optional": false,
            "typeAnnotation": null,
            "start": 408,
            "end": 410
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "Literal",
              "value": false,
              "raw": "false",
              "start": 413,
              "end": 418
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "const",
                "optional": false,
                "typeAnnotation": null,
                "start": 422,
                "end": 427
              },
              "typeArguments": null,
              "start": 422,
              "end": 427
            },
            "start": 413,
            "end": 427
          },
          "definite": false,
          "start": 408,
          "end": 427
        }
      ],
      "declare": false,
      "start": 404,
      "end": 428
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
            "name": "vv1",
            "optional": false,
            "typeAnnotation": null,
            "start": 434,
            "end": 437
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "v1",
            "optional": false,
            "typeAnnotation": null,
            "start": 440,
            "end": 442
          },
          "definite": false,
          "start": 434,
          "end": 442
        }
      ],
      "declare": false,
      "start": 430,
      "end": 443
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
            "name": "vc1",
            "optional": false,
            "typeAnnotation": null,
            "start": 448,
            "end": 451
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "c1",
            "optional": false,
            "typeAnnotation": null,
            "start": 454,
            "end": 456
          },
          "definite": false,
          "start": 448,
          "end": 456
        }
      ],
      "declare": false,
      "start": 444,
      "end": 457
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
            "name": "a1",
            "optional": false,
            "typeAnnotation": null,
            "start": 463,
            "end": 465
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "ArrayExpression",
              "elements": [],
              "start": 468,
              "end": 470
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "const",
                "optional": false,
                "typeAnnotation": null,
                "start": 474,
                "end": 479
              },
              "typeArguments": null,
              "start": 474,
              "end": 479
            },
            "start": 468,
            "end": 479
          },
          "definite": false,
          "start": 463,
          "end": 479
        }
      ],
      "declare": false,
      "start": 459,
      "end": 480
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
            "name": "a2",
            "optional": false,
            "typeAnnotation": null,
            "start": 485,
            "end": 487
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 491,
                  "end": 492
                },
                {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 494,
                  "end": 495
                },
                {
                  "type": "Literal",
                  "value": 3,
                  "raw": "3",
                  "start": 497,
                  "end": 498
                }
              ],
              "start": 490,
              "end": 499
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "const",
                "optional": false,
                "typeAnnotation": null,
                "start": 503,
                "end": 508
              },
              "typeArguments": null,
              "start": 503,
              "end": 508
            },
            "start": 490,
            "end": 508
          },
          "definite": false,
          "start": 485,
          "end": 508
        }
      ],
      "declare": false,
      "start": 481,
      "end": 509
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
            "name": "a3",
            "optional": false,
            "typeAnnotation": null,
            "start": 514,
            "end": 516
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "Literal",
                  "value": 10,
                  "raw": "10",
                  "start": 520,
                  "end": 522
                },
                {
                  "type": "Literal",
                  "value": "hello",
                  "raw": "'hello'",
                  "start": 524,
                  "end": 531
                },
                {
                  "type": "Literal",
                  "value": true,
                  "raw": "true",
                  "start": 533,
                  "end": 537
                }
              ],
              "start": 519,
              "end": 538
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "const",
                "optional": false,
                "typeAnnotation": null,
                "start": 542,
                "end": 547
              },
              "typeArguments": null,
              "start": 542,
              "end": 547
            },
            "start": 519,
            "end": 547
          },
          "definite": false,
          "start": 514,
          "end": 547
        }
      ],
      "declare": false,
      "start": 510,
      "end": 548
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
            "name": "a4",
            "optional": false,
            "typeAnnotation": null,
            "start": 553,
            "end": 555
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "SpreadElement",
                  "argument": {
                    "type": "ArrayExpression",
                    "elements": [
                      {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 563,
                        "end": 564
                      },
                      {
                        "type": "Literal",
                        "value": 2,
                        "raw": "2",
                        "start": 566,
                        "end": 567
                      },
                      {
                        "type": "Literal",
                        "value": 3,
                        "raw": "3",
                        "start": 569,
                        "end": 570
                      }
                    ],
                    "start": 562,
                    "end": 571
                  },
                  "start": 559,
                  "end": 571
                }
              ],
              "start": 558,
              "end": 572
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "const",
                "optional": false,
                "typeAnnotation": null,
                "start": 576,
                "end": 581
              },
              "typeArguments": null,
              "start": 576,
              "end": 581
            },
            "start": 558,
            "end": 581
          },
          "definite": false,
          "start": 553,
          "end": 581
        }
      ],
      "declare": false,
      "start": 549,
      "end": 582
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
            "name": "a5",
            "optional": false,
            "typeAnnotation": null,
            "start": 587,
            "end": 589
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 593,
                "end": 594
              },
              {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 596,
                "end": 597
              },
              {
                "type": "Literal",
                "value": 3,
                "raw": "3",
                "start": 599,
                "end": 600
              }
            ],
            "start": 592,
            "end": 601
          },
          "definite": false,
          "start": 587,
          "end": 601
        }
      ],
      "declare": false,
      "start": 583,
      "end": 602
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
            "name": "a6",
            "optional": false,
            "typeAnnotation": null,
            "start": 607,
            "end": 609
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "SpreadElement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a5",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 616,
                    "end": 618
                  },
                  "start": 613,
                  "end": 618
                }
              ],
              "start": 612,
              "end": 619
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "const",
                "optional": false,
                "typeAnnotation": null,
                "start": 623,
                "end": 628
              },
              "typeArguments": null,
              "start": 623,
              "end": 628
            },
            "start": 612,
            "end": 628
          },
          "definite": false,
          "start": 607,
          "end": 628
        }
      ],
      "declare": false,
      "start": 603,
      "end": 629
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
            "name": "a7",
            "optional": false,
            "typeAnnotation": null,
            "start": 634,
            "end": 636
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a6",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 643,
                  "end": 645
                },
                "start": 640,
                "end": 645
              }
            ],
            "start": 639,
            "end": 646
          },
          "definite": false,
          "start": 634,
          "end": 646
        }
      ],
      "declare": false,
      "start": 630,
      "end": 647
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
            "name": "a8",
            "optional": false,
            "typeAnnotation": null,
            "start": 652,
            "end": 654
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "Literal",
                  "value": "abc",
                  "raw": "'abc'",
                  "start": 658,
                  "end": 663
                },
                {
                  "type": "SpreadElement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a7",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 668,
                    "end": 670
                  },
                  "start": 665,
                  "end": 670
                }
              ],
              "start": 657,
              "end": 671
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "const",
                "optional": false,
                "typeAnnotation": null,
                "start": 675,
                "end": 680
              },
              "typeArguments": null,
              "start": 675,
              "end": 680
            },
            "start": 657,
            "end": 680
          },
          "definite": false,
          "start": 652,
          "end": 680
        }
      ],
      "declare": false,
      "start": 648,
      "end": 681
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
            "name": "a9",
            "optional": false,
            "typeAnnotation": null,
            "start": 686,
            "end": 688
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a8",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 695,
                  "end": 697
                },
                "start": 692,
                "end": 697
              }
            ],
            "start": 691,
            "end": 698
          },
          "definite": false,
          "start": 686,
          "end": 698
        }
      ],
      "declare": false,
      "start": 682,
      "end": 699
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
            "name": "d",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "parameters": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 722,
                            "end": 728
                          },
                          "start": 720,
                          "end": 728
                        },
                        "start": 719,
                        "end": 728
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 731,
                        "end": 737
                      },
                      "start": 729,
                      "end": 737
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null,
                    "start": 718,
                    "end": 737
                  }
                ],
                "start": 716,
                "end": 739
              },
              "start": 714,
              "end": 739
            },
            "start": 713,
            "end": 739
          },
          "init": null,
          "definite": false,
          "start": 713,
          "end": 739
        }
      ],
      "declare": true,
      "start": 701,
      "end": 740
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
            "name": "o1",
            "optional": false,
            "typeAnnotation": null,
            "start": 746,
            "end": 748
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 753,
                    "end": 754
                  },
                  "value": {
                    "type": "Literal",
                    "value": 10,
                    "raw": "10",
                    "start": 756,
                    "end": 758
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 753,
                  "end": 758
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 760,
                    "end": 761
                  },
                  "value": {
                    "type": "Literal",
                    "value": 20,
                    "raw": "20",
                    "start": 763,
                    "end": 765
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 760,
                  "end": 765
                }
              ],
              "start": 751,
              "end": 767
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "const",
                "optional": false,
                "typeAnnotation": null,
                "start": 771,
                "end": 776
              },
              "typeArguments": null,
              "start": 771,
              "end": 776
            },
            "start": 751,
            "end": 776
          },
          "definite": false,
          "start": 746,
          "end": 776
        }
      ],
      "declare": false,
      "start": 742,
      "end": 777
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
            "name": "o2",
            "optional": false,
            "typeAnnotation": null,
            "start": 782,
            "end": 784
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
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
                    "start": 789,
                    "end": 790
                  },
                  "value": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 792,
                    "end": 793
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 789,
                  "end": 793
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Literal",
                    "value": "b",
                    "raw": "'b'",
                    "start": 795,
                    "end": 798
                  },
                  "value": {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2",
                    "start": 800,
                    "end": 801
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 795,
                  "end": 801
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Literal",
                    "value": "c",
                    "raw": "'c'",
                    "start": 804,
                    "end": 807
                  },
                  "value": {
                    "type": "Literal",
                    "value": 3,
                    "raw": "3",
                    "start": 810,
                    "end": 811
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": true,
                  "optional": false,
                  "start": 803,
                  "end": 811
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "d",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 813,
                    "end": 814
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 817,
                      "end": 819
                    },
                    "expression": false,
                    "start": 814,
                    "end": 819
                  },
                  "method": true,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 813,
                  "end": 819
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "Literal",
                      "value": "e",
                      "raw": "'e'",
                      "start": 822,
                      "end": 825
                    },
                    "operator": "+",
                    "right": {
                      "type": "Literal",
                      "value": "",
                      "raw": "''",
                      "start": 828,
                      "end": 830
                    },
                    "start": 822,
                    "end": 830
                  },
                  "value": {
                    "type": "Literal",
                    "value": 4,
                    "raw": "4",
                    "start": 833,
                    "end": 834
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": true,
                  "optional": false,
                  "start": 821,
                  "end": 834
                }
              ],
              "start": 787,
              "end": 836
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "const",
                "optional": false,
                "typeAnnotation": null,
                "start": 840,
                "end": 845
              },
              "typeArguments": null,
              "start": 840,
              "end": 845
            },
            "start": 787,
            "end": 845
          },
          "definite": false,
          "start": 782,
          "end": 845
        }
      ],
      "declare": false,
      "start": 778,
      "end": 846
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
            "name": "o3",
            "optional": false,
            "typeAnnotation": null,
            "start": 851,
            "end": 853
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "SpreadElement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "o1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 861,
                    "end": 863
                  },
                  "start": 858,
                  "end": 863
                },
                {
                  "type": "SpreadElement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "o2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 868,
                    "end": 870
                  },
                  "start": 865,
                  "end": 870
                }
              ],
              "start": 856,
              "end": 872
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "const",
                "optional": false,
                "typeAnnotation": null,
                "start": 876,
                "end": 881
              },
              "typeArguments": null,
              "start": 876,
              "end": 881
            },
            "start": 856,
            "end": 881
          },
          "definite": false,
          "start": 851,
          "end": 881
        }
      ],
      "declare": false,
      "start": 847,
      "end": 882
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
            "name": "o4",
            "optional": false,
            "typeAnnotation": null,
            "start": 887,
            "end": 889
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
                  "start": 894,
                  "end": 895
                },
                "value": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 897,
                  "end": 898
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 894,
                "end": 898
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 900,
                  "end": 901
                },
                "value": {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 903,
                  "end": 904
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 900,
                "end": 904
              }
            ],
            "start": 892,
            "end": 906
          },
          "definite": false,
          "start": 887,
          "end": 906
        }
      ],
      "declare": false,
      "start": 883,
      "end": 907
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
            "name": "o5",
            "optional": false,
            "typeAnnotation": null,
            "start": 912,
            "end": 914
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "SpreadElement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "o4",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 922,
                    "end": 924
                  },
                  "start": 919,
                  "end": 924
                }
              ],
              "start": 917,
              "end": 926
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "const",
                "optional": false,
                "typeAnnotation": null,
                "start": 930,
                "end": 935
              },
              "typeArguments": null,
              "start": 930,
              "end": 935
            },
            "start": 917,
            "end": 935
          },
          "definite": false,
          "start": 912,
          "end": 935
        }
      ],
      "declare": false,
      "start": 908,
      "end": 936
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
            "name": "o6",
            "optional": false,
            "typeAnnotation": null,
            "start": 941,
            "end": 943
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "o5",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 951,
                  "end": 953
                },
                "start": 948,
                "end": 953
              }
            ],
            "start": 946,
            "end": 955
          },
          "definite": false,
          "start": 941,
          "end": 955
        }
      ],
      "declare": false,
      "start": 937,
      "end": 956
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
            "name": "o7",
            "optional": false,
            "typeAnnotation": null,
            "start": 961,
            "end": 963
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "SpreadElement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "d",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 971,
                    "end": 972
                  },
                  "start": 968,
                  "end": 972
                }
              ],
              "start": 966,
              "end": 974
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "const",
                "optional": false,
                "typeAnnotation": null,
                "start": 978,
                "end": 983
              },
              "typeArguments": null,
              "start": 978,
              "end": 983
            },
            "start": 966,
            "end": 983
          },
          "definite": false,
          "start": 961,
          "end": 983
        }
      ],
      "declare": false,
      "start": 957,
      "end": 984
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
            "name": "o8",
            "optional": false,
            "typeAnnotation": null,
            "start": 989,
            "end": 991
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "o7",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 999,
                  "end": 1001
                },
                "start": 996,
                "end": 1001
              }
            ],
            "start": 994,
            "end": 1003
          },
          "definite": false,
          "start": 989,
          "end": 1003
        }
      ],
      "declare": false,
      "start": 985,
      "end": 1004
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
            "name": "o9",
            "optional": false,
            "typeAnnotation": null,
            "start": 1009,
            "end": 1011
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1016,
                    "end": 1017
                  },
                  "value": {
                    "type": "Literal",
                    "value": 10,
                    "raw": "10",
                    "start": 1019,
                    "end": 1021
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 1016,
                  "end": 1021
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1023,
                    "end": 1026
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "AssignmentExpression",
                            "operator": "=",
                            "left": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "ThisExpression",
                                "start": 1031,
                                "end": 1035
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1036,
                                "end": 1037
                              },
                              "optional": false,
                              "computed": false,
                              "start": 1031,
                              "end": 1037
                            },
                            "right": {
                              "type": "Literal",
                              "value": 20,
                              "raw": "20",
                              "start": 1040,
                              "end": 1042
                            },
                            "start": 1031,
                            "end": 1042
                          },
                          "directive": null,
                          "start": 1031,
                          "end": 1042
                        }
                      ],
                      "start": 1029,
                      "end": 1044
                    },
                    "expression": false,
                    "start": 1026,
                    "end": 1044
                  },
                  "method": true,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 1023,
                  "end": 1044
                }
              ],
              "start": 1014,
              "end": 1046
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "const",
                "optional": false,
                "typeAnnotation": null,
                "start": 1050,
                "end": 1055
              },
              "typeArguments": null,
              "start": 1050,
              "end": 1055
            },
            "start": 1014,
            "end": 1055
          },
          "definite": false,
          "start": 1009,
          "end": 1055
        }
      ],
      "declare": false,
      "start": 1005,
      "end": 1056
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
            "name": "p1",
            "optional": false,
            "typeAnnotation": null,
            "start": 1072,
            "end": 1074
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "Literal",
              "value": 10,
              "raw": "10",
              "start": 1078,
              "end": 1080
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "const",
                "optional": false,
                "typeAnnotation": null,
                "start": 1085,
                "end": 1090
              },
              "typeArguments": null,
              "start": 1085,
              "end": 1090
            },
            "start": 1077,
            "end": 1090
          },
          "definite": false,
          "start": 1072,
          "end": 1090
        }
      ],
      "declare": false,
      "start": 1068,
      "end": 1091
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
            "name": "p2",
            "optional": false,
            "typeAnnotation": null,
            "start": 1096,
            "end": 1098
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "UnaryExpression",
              "operator": "-",
              "argument": {
                "type": "Literal",
                "value": 10,
                "raw": "10",
                "start": 1104,
                "end": 1106
              },
              "prefix": true,
              "start": 1103,
              "end": 1106
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "const",
                "optional": false,
                "typeAnnotation": null,
                "start": 1112,
                "end": 1117
              },
              "typeArguments": null,
              "start": 1112,
              "end": 1117
            },
            "start": 1101,
            "end": 1117
          },
          "definite": false,
          "start": 1096,
          "end": 1117
        }
      ],
      "declare": false,
      "start": 1092,
      "end": 1118
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
            "name": "p3",
            "optional": false,
            "typeAnnotation": null,
            "start": 1123,
            "end": 1125
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "Literal",
                  "value": 10,
                  "raw": "10",
                  "start": 1131,
                  "end": 1133
                }
              ],
              "start": 1129,
              "end": 1135
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "const",
                "optional": false,
                "typeAnnotation": null,
                "start": 1140,
                "end": 1145
              },
              "typeArguments": null,
              "start": 1140,
              "end": 1145
            },
            "start": 1128,
            "end": 1145
          },
          "definite": false,
          "start": 1123,
          "end": 1145
        }
      ],
      "declare": false,
      "start": 1119,
      "end": 1146
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
            "name": "p4",
            "optional": false,
            "typeAnnotation": null,
            "start": 1151,
            "end": 1153
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "ArrayExpression",
                      "elements": [
                        {
                          "type": "ArrayExpression",
                          "elements": [
                            {
                              "type": "Literal",
                              "value": 10,
                              "raw": "10",
                              "start": 1160,
                              "end": 1162
                            }
                          ],
                          "start": 1159,
                          "end": 1163
                        }
                      ],
                      "start": 1158,
                      "end": 1164
                    }
                  ],
                  "start": 1157,
                  "end": 1165
                }
              ],
              "start": 1156,
              "end": 1166
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "const",
                "optional": false,
                "typeAnnotation": null,
                "start": 1170,
                "end": 1175
              },
              "typeArguments": null,
              "start": 1170,
              "end": 1175
            },
            "start": 1156,
            "end": 1175
          },
          "definite": false,
          "start": 1151,
          "end": 1175
        }
      ],
      "declare": false,
      "start": 1147,
      "end": 1176
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
            "name": "x1",
            "optional": false,
            "typeAnnotation": null,
            "start": 1182,
            "end": 1184
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1189,
                    "end": 1190
                  },
                  "value": {
                    "type": "Literal",
                    "value": 10,
                    "raw": "10",
                    "start": 1192,
                    "end": 1194
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 1189,
                  "end": 1194
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1196,
                    "end": 1197
                  },
                  "value": {
                    "type": "ArrayExpression",
                    "elements": [
                      {
                        "type": "Literal",
                        "value": 20,
                        "raw": "20",
                        "start": 1200,
                        "end": 1202
                      },
                      {
                        "type": "Literal",
                        "value": 30,
                        "raw": "30",
                        "start": 1204,
                        "end": 1206
                      }
                    ],
                    "start": 1199,
                    "end": 1207
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 1196,
                  "end": 1207
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "z",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1209,
                    "end": 1210
                  },
                  "value": {
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
                          "start": 1214,
                          "end": 1215
                        },
                        "value": {
                          "type": "ObjectExpression",
                          "properties": [
                            {
                              "type": "Property",
                              "kind": "init",
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "b",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1219,
                                "end": 1220
                              },
                              "value": {
                                "type": "Literal",
                                "value": 42,
                                "raw": "42",
                                "start": 1222,
                                "end": 1224
                              },
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "optional": false,
                              "start": 1219,
                              "end": 1224
                            }
                          ],
                          "start": 1217,
                          "end": 1226
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 1214,
                        "end": 1226
                      }
                    ],
                    "start": 1212,
                    "end": 1228
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 1209,
                  "end": 1228
                }
              ],
              "start": 1187,
              "end": 1230
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "const",
                "optional": false,
                "typeAnnotation": null,
                "start": 1234,
                "end": 1239
              },
              "typeArguments": null,
              "start": 1234,
              "end": 1239
            },
            "start": 1187,
            "end": 1239
          },
          "definite": false,
          "start": 1182,
          "end": 1239
        }
      ],
      "declare": false,
      "start": 1178,
      "end": 1240
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
            "name": "q1",
            "optional": false,
            "typeAnnotation": null,
            "start": 1246,
            "end": 1248
          },
          "init": {
            "type": "TSTypeAssertion",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "const",
                "optional": false,
                "typeAnnotation": null,
                "start": 1252,
                "end": 1257
              },
              "typeArguments": null,
              "start": 1252,
              "end": 1257
            },
            "expression": {
              "type": "Literal",
              "value": 10,
              "raw": "10",
              "start": 1259,
              "end": 1261
            },
            "start": 1251,
            "end": 1261
          },
          "definite": false,
          "start": 1246,
          "end": 1261
        }
      ],
      "declare": false,
      "start": 1242,
      "end": 1262
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
            "name": "q2",
            "optional": false,
            "typeAnnotation": null,
            "start": 1267,
            "end": 1269
          },
          "init": {
            "type": "TSTypeAssertion",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "const",
                "optional": false,
                "typeAnnotation": null,
                "start": 1273,
                "end": 1278
              },
              "typeArguments": null,
              "start": 1273,
              "end": 1278
            },
            "expression": {
              "type": "Literal",
              "value": "abc",
              "raw": "'abc'",
              "start": 1280,
              "end": 1285
            },
            "start": 1272,
            "end": 1285
          },
          "definite": false,
          "start": 1267,
          "end": 1285
        }
      ],
      "declare": false,
      "start": 1263,
      "end": 1286
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
            "name": "q3",
            "optional": false,
            "typeAnnotation": null,
            "start": 1291,
            "end": 1293
          },
          "init": {
            "type": "TSTypeAssertion",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "const",
                "optional": false,
                "typeAnnotation": null,
                "start": 1297,
                "end": 1302
              },
              "typeArguments": null,
              "start": 1297,
              "end": 1302
            },
            "expression": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 1304,
              "end": 1308
            },
            "start": 1296,
            "end": 1308
          },
          "definite": false,
          "start": 1291,
          "end": 1308
        }
      ],
      "declare": false,
      "start": 1287,
      "end": 1309
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
            "name": "q4",
            "optional": false,
            "typeAnnotation": null,
            "start": 1314,
            "end": 1316
          },
          "init": {
            "type": "TSTypeAssertion",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "const",
                "optional": false,
                "typeAnnotation": null,
                "start": 1320,
                "end": 1325
              },
              "typeArguments": null,
              "start": 1320,
              "end": 1325
            },
            "expression": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 1328,
                  "end": 1329
                },
                {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 1331,
                  "end": 1332
                },
                {
                  "type": "Literal",
                  "value": 3,
                  "raw": "3",
                  "start": 1334,
                  "end": 1335
                }
              ],
              "start": 1327,
              "end": 1336
            },
            "start": 1319,
            "end": 1336
          },
          "definite": false,
          "start": 1314,
          "end": 1336
        }
      ],
      "declare": false,
      "start": 1310,
      "end": 1337
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
            "name": "q5",
            "optional": false,
            "typeAnnotation": null,
            "start": 1342,
            "end": 1344
          },
          "init": {
            "type": "TSTypeAssertion",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "const",
                "optional": false,
                "typeAnnotation": null,
                "start": 1348,
                "end": 1353
              },
              "typeArguments": null,
              "start": 1348,
              "end": 1353
            },
            "expression": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1357,
                    "end": 1358
                  },
                  "value": {
                    "type": "Literal",
                    "value": 10,
                    "raw": "10",
                    "start": 1360,
                    "end": 1362
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 1357,
                  "end": 1362
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1364,
                    "end": 1365
                  },
                  "value": {
                    "type": "Literal",
                    "value": 20,
                    "raw": "20",
                    "start": 1367,
                    "end": 1369
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 1364,
                  "end": 1369
                }
              ],
              "start": 1355,
              "end": 1371
            },
            "start": 1347,
            "end": 1371
          },
          "definite": false,
          "start": 1342,
          "end": 1371
        }
      ],
      "declare": false,
      "start": 1338,
      "end": 1372
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "id",
        "optional": false,
        "typeAnnotation": null,
        "start": 1391,
        "end": 1393
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "start": 1394,
              "end": 1395
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1394,
            "end": 1395
          }
        ],
        "start": 1393,
        "end": 1396
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
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
                "start": 1400,
                "end": 1401
              },
              "typeArguments": null,
              "start": 1400,
              "end": 1401
            },
            "start": 1398,
            "end": 1401
          },
          "start": 1397,
          "end": 1401
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 1404,
            "end": 1405
          },
          "typeArguments": null,
          "start": 1404,
          "end": 1405
        },
        "start": 1402,
        "end": 1405
      },
      "body": null,
      "expression": false,
      "start": 1374,
      "end": 1406
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
            "name": "e1",
            "optional": false,
            "typeAnnotation": null,
            "start": 1412,
            "end": 1414
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "v1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1417,
              "end": 1419
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "const",
                "optional": false,
                "typeAnnotation": null,
                "start": 1423,
                "end": 1428
              },
              "typeArguments": null,
              "start": 1423,
              "end": 1428
            },
            "start": 1417,
            "end": 1428
          },
          "definite": false,
          "start": 1412,
          "end": 1428
        }
      ],
      "declare": false,
      "start": 1408,
      "end": 1429
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
            "name": "e2",
            "optional": false,
            "typeAnnotation": null,
            "start": 1444,
            "end": 1446
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "ConditionalExpression",
              "test": {
                "type": "Literal",
                "value": true,
                "raw": "true",
                "start": 1450,
                "end": 1454
              },
              "consequent": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 1457,
                "end": 1458
              },
              "alternate": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 1461,
                "end": 1462
              },
              "start": 1450,
              "end": 1462
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "const",
                "optional": false,
                "typeAnnotation": null,
                "start": 1467,
                "end": 1472
              },
              "typeArguments": null,
              "start": 1467,
              "end": 1472
            },
            "start": 1449,
            "end": 1472
          },
          "definite": false,
          "start": 1444,
          "end": 1472
        }
      ],
      "declare": false,
      "start": 1440,
      "end": 1473
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
            "name": "e3",
            "optional": false,
            "typeAnnotation": null,
            "start": 1488,
            "end": 1490
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "id",
                "optional": false,
                "typeAnnotation": null,
                "start": 1493,
                "end": 1495
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 1496,
                  "end": 1497
                }
              ],
              "optional": false,
              "start": 1493,
              "end": 1498
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "const",
                "optional": false,
                "typeAnnotation": null,
                "start": 1502,
                "end": 1507
              },
              "typeArguments": null,
              "start": 1502,
              "end": 1507
            },
            "start": 1493,
            "end": 1507
          },
          "definite": false,
          "start": 1488,
          "end": 1507
        }
      ],
      "declare": false,
      "start": 1484,
      "end": 1508
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
            "name": "t1",
            "optional": false,
            "typeAnnotation": null,
            "start": 1524,
            "end": 1526
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "Literal",
              "value": "foo",
              "raw": "'foo'",
              "start": 1529,
              "end": 1534
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "const",
                "optional": false,
                "typeAnnotation": null,
                "start": 1538,
                "end": 1543
              },
              "typeArguments": null,
              "start": 1538,
              "end": 1543
            },
            "start": 1529,
            "end": 1543
          },
          "definite": false,
          "start": 1524,
          "end": 1543
        }
      ],
      "declare": false,
      "start": 1520,
      "end": 1544
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
            "name": "t2",
            "optional": false,
            "typeAnnotation": null,
            "start": 1549,
            "end": 1551
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "Literal",
              "value": "bar",
              "raw": "'bar'",
              "start": 1554,
              "end": 1559
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "const",
                "optional": false,
                "typeAnnotation": null,
                "start": 1563,
                "end": 1568
              },
              "typeArguments": null,
              "start": 1563,
              "end": 1568
            },
            "start": 1554,
            "end": 1568
          },
          "definite": false,
          "start": 1549,
          "end": 1568
        }
      ],
      "declare": false,
      "start": 1545,
      "end": 1569
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
            "name": "t3",
            "optional": false,
            "typeAnnotation": null,
            "start": 1574,
            "end": 1576
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "TemplateLiteral",
              "quasis": [
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": false,
                  "start": 1579,
                  "end": 1582
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "-",
                    "cooked": "-"
                  },
                  "tail": false,
                  "start": 1584,
                  "end": 1588
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": true,
                  "start": 1590,
                  "end": 1592
                }
              ],
              "expressions": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1582,
                  "end": 1584
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1588,
                  "end": 1590
                }
              ],
              "start": 1579,
              "end": 1592
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "const",
                "optional": false,
                "typeAnnotation": null,
                "start": 1596,
                "end": 1601
              },
              "typeArguments": null,
              "start": 1596,
              "end": 1601
            },
            "start": 1579,
            "end": 1601
          },
          "definite": false,
          "start": 1574,
          "end": 1601
        }
      ],
      "declare": false,
      "start": 1570,
      "end": 1602
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
            "name": "t4",
            "optional": false,
            "typeAnnotation": null,
            "start": 1607,
            "end": 1609
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "TemplateLiteral",
              "quasis": [
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": false,
                  "start": 1612,
                  "end": 1615
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "-",
                    "cooked": "-"
                  },
                  "tail": false,
                  "start": 1624,
                  "end": 1628
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": true,
                  "start": 1637,
                  "end": 1639
                }
              ],
              "expressions": [
                {
                  "type": "TemplateLiteral",
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "value": {
                        "raw": "(",
                        "cooked": "("
                      },
                      "tail": false,
                      "start": 1615,
                      "end": 1619
                    },
                    {
                      "type": "TemplateElement",
                      "value": {
                        "raw": ")",
                        "cooked": ")"
                      },
                      "tail": true,
                      "start": 1621,
                      "end": 1624
                    }
                  ],
                  "expressions": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "t1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1619,
                      "end": 1621
                    }
                  ],
                  "start": 1615,
                  "end": 1624
                },
                {
                  "type": "TemplateLiteral",
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "value": {
                        "raw": "(",
                        "cooked": "("
                      },
                      "tail": false,
                      "start": 1628,
                      "end": 1632
                    },
                    {
                      "type": "TemplateElement",
                      "value": {
                        "raw": ")",
                        "cooked": ")"
                      },
                      "tail": true,
                      "start": 1634,
                      "end": 1637
                    }
                  ],
                  "expressions": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "t2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1632,
                      "end": 1634
                    }
                  ],
                  "start": 1628,
                  "end": 1637
                }
              ],
              "start": 1612,
              "end": 1639
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "const",
                "optional": false,
                "typeAnnotation": null,
                "start": 1643,
                "end": 1648
              },
              "typeArguments": null,
              "start": 1643,
              "end": 1648
            },
            "start": 1612,
            "end": 1648
          },
          "definite": false,
          "start": 1607,
          "end": 1648
        }
      ],
      "declare": false,
      "start": 1603,
      "end": 1649
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ff1",
        "optional": false,
        "typeAnnotation": null,
        "start": 1660,
        "end": 1663
      },
      "generator": false,
      "async": false,
      "declare": false,
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
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "foo",
                    "raw": "'foo'",
                    "start": 1667,
                    "end": 1672
                  },
                  "start": 1667,
                  "end": 1672
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "bar",
                    "raw": "'bar'",
                    "start": 1675,
                    "end": 1680
                  },
                  "start": 1675,
                  "end": 1680
                }
              ],
              "start": 1667,
              "end": 1680
            },
            "start": 1665,
            "end": 1680
          },
          "start": 1664,
          "end": 1680
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 1685,
                    "end": 1686
                  },
                  "start": 1685,
                  "end": 1686
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2",
                    "start": 1689,
                    "end": 1690
                  },
                  "start": 1689,
                  "end": 1690
                }
              ],
              "start": 1685,
              "end": 1690
            },
            "start": 1683,
            "end": 1690
          },
          "start": 1682,
          "end": 1690
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "TSAsExpression",
              "expression": {
                "type": "TemplateLiteral",
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": "",
                      "cooked": ""
                    },
                    "tail": false,
                    "start": 1705,
                    "end": 1708
                  },
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": "-",
                      "cooked": "-"
                    },
                    "tail": false,
                    "start": 1709,
                    "end": 1713
                  },
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": "",
                      "cooked": ""
                    },
                    "tail": true,
                    "start": 1714,
                    "end": 1716
                  }
                ],
                "expressions": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1708,
                    "end": 1709
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1713,
                    "end": 1714
                  }
                ],
                "start": 1705,
                "end": 1716
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "const",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1720,
                  "end": 1725
                },
                "typeArguments": null,
                "start": 1720,
                "end": 1725
              },
              "start": 1705,
              "end": 1725
            },
            "start": 1698,
            "end": 1726
          }
        ],
        "start": 1692,
        "end": 1728
      },
      "expression": false,
      "start": 1651,
      "end": 1728
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ff2",
        "optional": false,
        "typeAnnotation": null,
        "start": 1739,
        "end": 1742
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
              "start": 1743,
              "end": 1744
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 1753,
              "end": 1759
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1743,
            "end": 1759
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 1761,
              "end": 1762
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 1771,
              "end": 1777
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1761,
            "end": 1777
          }
        ],
        "start": 1742,
        "end": 1778
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
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
                "start": 1782,
                "end": 1783
              },
              "typeArguments": null,
              "start": 1782,
              "end": 1783
            },
            "start": 1780,
            "end": 1783
          },
          "start": 1779,
          "end": 1783
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
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
                "start": 1788,
                "end": 1789
              },
              "typeArguments": null,
              "start": 1788,
              "end": 1789
            },
            "start": 1786,
            "end": 1789
          },
          "start": 1785,
          "end": 1789
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "TSAsExpression",
              "expression": {
                "type": "TemplateLiteral",
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": "",
                      "cooked": ""
                    },
                    "tail": false,
                    "start": 1804,
                    "end": 1807
                  },
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": "-",
                      "cooked": "-"
                    },
                    "tail": false,
                    "start": 1808,
                    "end": 1812
                  },
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": "",
                      "cooked": ""
                    },
                    "tail": true,
                    "start": 1813,
                    "end": 1815
                  }
                ],
                "expressions": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1807,
                    "end": 1808
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1812,
                    "end": 1813
                  }
                ],
                "start": 1804,
                "end": 1815
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "const",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1819,
                  "end": 1824
                },
                "typeArguments": null,
                "start": 1819,
                "end": 1824
              },
              "start": 1804,
              "end": 1824
            },
            "start": 1797,
            "end": 1825
          }
        ],
        "start": 1791,
        "end": 1827
      },
      "expression": false,
      "start": 1730,
      "end": 1827
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
            "name": "ts1",
            "optional": false,
            "typeAnnotation": null,
            "start": 1835,
            "end": 1838
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "ff2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1841,
              "end": 1844
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "foo",
                "raw": "'foo'",
                "start": 1845,
                "end": 1850
              },
              {
                "type": "Literal",
                "value": "bar",
                "raw": "'bar'",
                "start": 1852,
                "end": 1857
              }
            ],
            "optional": false,
            "start": 1841,
            "end": 1858
          },
          "definite": false,
          "start": 1835,
          "end": 1858
        }
      ],
      "declare": false,
      "start": 1829,
      "end": 1859
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
            "name": "ts2",
            "optional": false,
            "typeAnnotation": null,
            "start": 1866,
            "end": 1869
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "ff2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1872,
              "end": 1875
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "foo",
                "raw": "'foo'",
                "start": 1876,
                "end": 1881
              },
              {
                "type": "ConditionalExpression",
                "test": {
                  "type": "UnaryExpression",
                  "operator": "!",
                  "argument": {
                    "type": "UnaryExpression",
                    "operator": "!",
                    "argument": {
                      "type": "Literal",
                      "value": true,
                      "raw": "true",
                      "start": 1885,
                      "end": 1889
                    },
                    "prefix": true,
                    "start": 1884,
                    "end": 1889
                  },
                  "prefix": true,
                  "start": 1883,
                  "end": 1889
                },
                "consequent": {
                  "type": "Literal",
                  "value": "0",
                  "raw": "'0'",
                  "start": 1892,
                  "end": 1895
                },
                "alternate": {
                  "type": "Literal",
                  "value": "1",
                  "raw": "'1'",
                  "start": 1898,
                  "end": 1901
                },
                "start": 1883,
                "end": 1901
              }
            ],
            "optional": false,
            "start": 1872,
            "end": 1902
          },
          "definite": false,
          "start": 1866,
          "end": 1902
        }
      ],
      "declare": false,
      "start": 1860,
      "end": 1903
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
            "name": "ts3",
            "optional": false,
            "typeAnnotation": null,
            "start": 1910,
            "end": 1913
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "ff2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1916,
              "end": 1919
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ConditionalExpression",
                "test": {
                  "type": "UnaryExpression",
                  "operator": "!",
                  "argument": {
                    "type": "UnaryExpression",
                    "operator": "!",
                    "argument": {
                      "type": "Literal",
                      "value": true,
                      "raw": "true",
                      "start": 1922,
                      "end": 1926
                    },
                    "prefix": true,
                    "start": 1921,
                    "end": 1926
                  },
                  "prefix": true,
                  "start": 1920,
                  "end": 1926
                },
                "consequent": {
                  "type": "Literal",
                  "value": "top",
                  "raw": "'top'",
                  "start": 1929,
                  "end": 1934
                },
                "alternate": {
                  "type": "Literal",
                  "value": "bottom",
                  "raw": "'bottom'",
                  "start": 1937,
                  "end": 1945
                },
                "start": 1920,
                "end": 1945
              },
              {
                "type": "ConditionalExpression",
                "test": {
                  "type": "UnaryExpression",
                  "operator": "!",
                  "argument": {
                    "type": "UnaryExpression",
                    "operator": "!",
                    "argument": {
                      "type": "Literal",
                      "value": true,
                      "raw": "true",
                      "start": 1949,
                      "end": 1953
                    },
                    "prefix": true,
                    "start": 1948,
                    "end": 1953
                  },
                  "prefix": true,
                  "start": 1947,
                  "end": 1953
                },
                "consequent": {
                  "type": "Literal",
                  "value": "left",
                  "raw": "'left'",
                  "start": 1956,
                  "end": 1962
                },
                "alternate": {
                  "type": "Literal",
                  "value": "right",
                  "raw": "'right'",
                  "start": 1965,
                  "end": 1972
                },
                "start": 1947,
                "end": 1972
              }
            ],
            "optional": false,
            "start": 1916,
            "end": 1973
          },
          "definite": false,
          "start": 1910,
          "end": 1973
        }
      ],
      "declare": false,
      "start": 1904,
      "end": 1974
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ff3",
        "optional": false,
        "typeAnnotation": null,
        "start": 1985,
        "end": 1988
      },
      "generator": false,
      "async": false,
      "declare": false,
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
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "foo",
                    "raw": "'foo'",
                    "start": 1992,
                    "end": 1997
                  },
                  "start": 1992,
                  "end": 1997
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "bar",
                    "raw": "'bar'",
                    "start": 2000,
                    "end": 2005
                  },
                  "start": 2000,
                  "end": 2005
                }
              ],
              "start": 1992,
              "end": 2005
            },
            "start": 1990,
            "end": 2005
          },
          "start": 1989,
          "end": 2005
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSObjectKeyword",
              "start": 2010,
              "end": 2016
            },
            "start": 2008,
            "end": 2016
          },
          "start": 2007,
          "end": 2016
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "TSAsExpression",
              "expression": {
                "type": "TemplateLiteral",
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": "",
                      "cooked": ""
                    },
                    "tail": false,
                    "start": 2031,
                    "end": 2034
                  },
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": "",
                      "cooked": ""
                    },
                    "tail": false,
                    "start": 2035,
                    "end": 2038
                  },
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": "",
                      "cooked": ""
                    },
                    "tail": true,
                    "start": 2039,
                    "end": 2041
                  }
                ],
                "expressions": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2034,
                    "end": 2035
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2038,
                    "end": 2039
                  }
                ],
                "start": 2031,
                "end": 2041
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "const",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2045,
                  "end": 2050
                },
                "typeArguments": null,
                "start": 2045,
                "end": 2050
              },
              "start": 2031,
              "end": 2050
            },
            "start": 2024,
            "end": 2051
          }
        ],
        "start": 2018,
        "end": 2053
      },
      "expression": false,
      "start": 1976,
      "end": 2053
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Action",
        "optional": false,
        "typeAnnotation": null,
        "start": 2060,
        "end": 2066
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "verify",
              "raw": "\"verify\"",
              "start": 2069,
              "end": 2077
            },
            "start": 2069,
            "end": 2077
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "write",
              "raw": "\"write\"",
              "start": 2080,
              "end": 2087
            },
            "start": 2080,
            "end": 2087
          }
        ],
        "start": 2069,
        "end": 2087
      },
      "declare": false,
      "start": 2055,
      "end": 2088
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ContentMatch",
        "optional": false,
        "typeAnnotation": null,
        "start": 2094,
        "end": 2106
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "match",
              "raw": "\"match\"",
              "start": 2109,
              "end": 2116
            },
            "start": 2109,
            "end": 2116
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "nonMatch",
              "raw": "\"nonMatch\"",
              "start": 2119,
              "end": 2129
            },
            "start": 2119,
            "end": 2129
          }
        ],
        "start": 2109,
        "end": 2129
      },
      "declare": false,
      "start": 2089,
      "end": 2130
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Outcome",
        "optional": false,
        "typeAnnotation": null,
        "start": 2136,
        "end": 2143
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTemplateLiteralType",
        "quasis": [
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": false,
            "start": 2146,
            "end": 2149
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": "_",
              "cooked": "_"
            },
            "tail": false,
            "start": 2155,
            "end": 2159
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": true,
            "start": 2171,
            "end": 2173
          }
        ],
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Action",
              "optional": false,
              "typeAnnotation": null,
              "start": 2149,
              "end": 2155
            },
            "typeArguments": null,
            "start": 2149,
            "end": 2155
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "ContentMatch",
              "optional": false,
              "typeAnnotation": null,
              "start": 2159,
              "end": 2171
            },
            "typeArguments": null,
            "start": 2159,
            "end": 2171
          }
        ],
        "start": 2146,
        "end": 2173
      },
      "declare": false,
      "start": 2131,
      "end": 2174
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ff4",
        "optional": false,
        "typeAnnotation": null,
        "start": 2185,
        "end": 2188
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "verify",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSBooleanKeyword",
              "start": 2197,
              "end": 2204
            },
            "start": 2195,
            "end": 2204
          },
          "start": 2189,
          "end": 2204
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "contentMatches",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSBooleanKeyword",
              "start": 2222,
              "end": 2229
            },
            "start": 2220,
            "end": 2229
          },
          "start": 2206,
          "end": 2229
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
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
                  "name": "action",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Action",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2252,
                        "end": 2258
                      },
                      "typeArguments": null,
                      "start": 2252,
                      "end": 2258
                    },
                    "start": 2250,
                    "end": 2258
                  },
                  "start": 2243,
                  "end": 2258
                },
                "init": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "verify",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2261,
                    "end": 2267
                  },
                  "consequent": {
                    "type": "TemplateLiteral",
                    "quasis": [
                      {
                        "type": "TemplateElement",
                        "value": {
                          "raw": "verify",
                          "cooked": "verify"
                        },
                        "tail": true,
                        "start": 2270,
                        "end": 2278
                      }
                    ],
                    "expressions": [],
                    "start": 2270,
                    "end": 2278
                  },
                  "alternate": {
                    "type": "TemplateLiteral",
                    "quasis": [
                      {
                        "type": "TemplateElement",
                        "value": {
                          "raw": "write",
                          "cooked": "write"
                        },
                        "tail": true,
                        "start": 2281,
                        "end": 2288
                      }
                    ],
                    "expressions": [],
                    "start": 2281,
                    "end": 2288
                  },
                  "start": 2261,
                  "end": 2288
                },
                "definite": false,
                "start": 2243,
                "end": 2288
              }
            ],
            "declare": false,
            "start": 2237,
            "end": 2289
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
                  "name": "contentMatch",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ContentMatch",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2314,
                        "end": 2326
                      },
                      "typeArguments": null,
                      "start": 2314,
                      "end": 2326
                    },
                    "start": 2312,
                    "end": 2326
                  },
                  "start": 2300,
                  "end": 2326
                },
                "init": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "contentMatches",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2329,
                    "end": 2343
                  },
                  "consequent": {
                    "type": "TemplateLiteral",
                    "quasis": [
                      {
                        "type": "TemplateElement",
                        "value": {
                          "raw": "match",
                          "cooked": "match"
                        },
                        "tail": true,
                        "start": 2346,
                        "end": 2353
                      }
                    ],
                    "expressions": [],
                    "start": 2346,
                    "end": 2353
                  },
                  "alternate": {
                    "type": "TemplateLiteral",
                    "quasis": [
                      {
                        "type": "TemplateElement",
                        "value": {
                          "raw": "nonMatch",
                          "cooked": "nonMatch"
                        },
                        "tail": true,
                        "start": 2356,
                        "end": 2366
                      }
                    ],
                    "expressions": [],
                    "start": 2356,
                    "end": 2366
                  },
                  "start": 2329,
                  "end": 2366
                },
                "definite": false,
                "start": 2300,
                "end": 2366
              }
            ],
            "declare": false,
            "start": 2294,
            "end": 2367
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
                  "name": "outcome",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Outcome",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2387,
                        "end": 2394
                      },
                      "typeArguments": null,
                      "start": 2387,
                      "end": 2394
                    },
                    "start": 2385,
                    "end": 2394
                  },
                  "start": 2378,
                  "end": 2394
                },
                "init": {
                  "type": "TSAsExpression",
                  "expression": {
                    "type": "TemplateLiteral",
                    "quasis": [
                      {
                        "type": "TemplateElement",
                        "value": {
                          "raw": "",
                          "cooked": ""
                        },
                        "tail": false,
                        "start": 2397,
                        "end": 2400
                      },
                      {
                        "type": "TemplateElement",
                        "value": {
                          "raw": "_",
                          "cooked": "_"
                        },
                        "tail": false,
                        "start": 2406,
                        "end": 2410
                      },
                      {
                        "type": "TemplateElement",
                        "value": {
                          "raw": "",
                          "cooked": ""
                        },
                        "tail": true,
                        "start": 2422,
                        "end": 2424
                      }
                    ],
                    "expressions": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "action",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2400,
                        "end": 2406
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "contentMatch",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2410,
                        "end": 2422
                      }
                    ],
                    "start": 2397,
                    "end": 2424
                  },
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "const",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2428,
                      "end": 2433
                    },
                    "typeArguments": null,
                    "start": 2428,
                    "end": 2433
                  },
                  "start": 2397,
                  "end": 2433
                },
                "definite": false,
                "start": 2378,
                "end": 2433
              }
            ],
            "declare": false,
            "start": 2372,
            "end": 2434
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "outcome",
              "optional": false,
              "typeAnnotation": null,
              "start": 2446,
              "end": 2453
            },
            "start": 2439,
            "end": 2454
          }
        ],
        "start": 2231,
        "end": 2456
      },
      "expression": false,
      "start": 2176,
      "end": 2456
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ff5",
        "optional": false,
        "typeAnnotation": null,
        "start": 2467,
        "end": 2470
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "verify",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSBooleanKeyword",
              "start": 2479,
              "end": 2486
            },
            "start": 2477,
            "end": 2486
          },
          "start": 2471,
          "end": 2486
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "contentMatches",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSBooleanKeyword",
              "start": 2504,
              "end": 2511
            },
            "start": 2502,
            "end": 2511
          },
          "start": 2488,
          "end": 2511
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
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
                  "name": "action",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2525,
                  "end": 2531
                },
                "init": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "verify",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2534,
                    "end": 2540
                  },
                  "consequent": {
                    "type": "TemplateLiteral",
                    "quasis": [
                      {
                        "type": "TemplateElement",
                        "value": {
                          "raw": "verify",
                          "cooked": "verify"
                        },
                        "tail": true,
                        "start": 2543,
                        "end": 2551
                      }
                    ],
                    "expressions": [],
                    "start": 2543,
                    "end": 2551
                  },
                  "alternate": {
                    "type": "TemplateLiteral",
                    "quasis": [
                      {
                        "type": "TemplateElement",
                        "value": {
                          "raw": "write",
                          "cooked": "write"
                        },
                        "tail": true,
                        "start": 2554,
                        "end": 2561
                      }
                    ],
                    "expressions": [],
                    "start": 2554,
                    "end": 2561
                  },
                  "start": 2534,
                  "end": 2561
                },
                "definite": false,
                "start": 2525,
                "end": 2561
              }
            ],
            "declare": false,
            "start": 2519,
            "end": 2562
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
                  "name": "contentMatch",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2573,
                  "end": 2585
                },
                "init": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "contentMatches",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2588,
                    "end": 2602
                  },
                  "consequent": {
                    "type": "TemplateLiteral",
                    "quasis": [
                      {
                        "type": "TemplateElement",
                        "value": {
                          "raw": "match",
                          "cooked": "match"
                        },
                        "tail": true,
                        "start": 2605,
                        "end": 2612
                      }
                    ],
                    "expressions": [],
                    "start": 2605,
                    "end": 2612
                  },
                  "alternate": {
                    "type": "TemplateLiteral",
                    "quasis": [
                      {
                        "type": "TemplateElement",
                        "value": {
                          "raw": "nonMatch",
                          "cooked": "nonMatch"
                        },
                        "tail": true,
                        "start": 2615,
                        "end": 2625
                      }
                    ],
                    "expressions": [],
                    "start": 2615,
                    "end": 2625
                  },
                  "start": 2588,
                  "end": 2625
                },
                "definite": false,
                "start": 2573,
                "end": 2625
              }
            ],
            "declare": false,
            "start": 2567,
            "end": 2626
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
                  "name": "outcome",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2637,
                  "end": 2644
                },
                "init": {
                  "type": "TSAsExpression",
                  "expression": {
                    "type": "TemplateLiteral",
                    "quasis": [
                      {
                        "type": "TemplateElement",
                        "value": {
                          "raw": "",
                          "cooked": ""
                        },
                        "tail": false,
                        "start": 2647,
                        "end": 2650
                      },
                      {
                        "type": "TemplateElement",
                        "value": {
                          "raw": "_",
                          "cooked": "_"
                        },
                        "tail": false,
                        "start": 2656,
                        "end": 2660
                      },
                      {
                        "type": "TemplateElement",
                        "value": {
                          "raw": "",
                          "cooked": ""
                        },
                        "tail": true,
                        "start": 2672,
                        "end": 2674
                      }
                    ],
                    "expressions": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "action",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2650,
                        "end": 2656
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "contentMatch",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2660,
                        "end": 2672
                      }
                    ],
                    "start": 2647,
                    "end": 2674
                  },
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "const",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2678,
                      "end": 2683
                    },
                    "typeArguments": null,
                    "start": 2678,
                    "end": 2683
                  },
                  "start": 2647,
                  "end": 2683
                },
                "definite": false,
                "start": 2637,
                "end": 2683
              }
            ],
            "declare": false,
            "start": 2631,
            "end": 2684
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "outcome",
              "optional": false,
              "typeAnnotation": null,
              "start": 2696,
              "end": 2703
            },
            "start": 2689,
            "end": 2704
          }
        ],
        "start": 2513,
        "end": 2706
      },
      "expression": false,
      "start": 2458,
      "end": 2706
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "accessorNames",
        "optional": false,
        "typeAnnotation": null,
        "start": 2717,
        "end": 2730
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
              "name": "S",
              "optional": false,
              "typeAnnotation": null,
              "start": 2731,
              "end": 2732
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 2741,
              "end": 2747
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2731,
            "end": 2747
          }
        ],
        "start": 2730,
        "end": 2748
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "propName",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "S",
                "optional": false,
                "typeAnnotation": null,
                "start": 2759,
                "end": 2760
              },
              "typeArguments": null,
              "start": 2759,
              "end": 2760
            },
            "start": 2757,
            "end": 2760
          },
          "start": 2749,
          "end": 2760
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "TSAsExpression",
              "expression": {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "TemplateLiteral",
                    "quasis": [
                      {
                        "type": "TemplateElement",
                        "value": {
                          "raw": "get-",
                          "cooked": "get-"
                        },
                        "tail": false,
                        "start": 2776,
                        "end": 2783
                      },
                      {
                        "type": "TemplateElement",
                        "value": {
                          "raw": "",
                          "cooked": ""
                        },
                        "tail": true,
                        "start": 2791,
                        "end": 2793
                      }
                    ],
                    "expressions": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "propName",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2783,
                        "end": 2791
                      }
                    ],
                    "start": 2776,
                    "end": 2793
                  },
                  {
                    "type": "TemplateLiteral",
                    "quasis": [
                      {
                        "type": "TemplateElement",
                        "value": {
                          "raw": "set-",
                          "cooked": "set-"
                        },
                        "tail": false,
                        "start": 2795,
                        "end": 2802
                      },
                      {
                        "type": "TemplateElement",
                        "value": {
                          "raw": "",
                          "cooked": ""
                        },
                        "tail": true,
                        "start": 2810,
                        "end": 2812
                      }
                    ],
                    "expressions": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "propName",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2802,
                        "end": 2810
                      }
                    ],
                    "start": 2795,
                    "end": 2812
                  }
                ],
                "start": 2775,
                "end": 2813
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "const",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2817,
                  "end": 2822
                },
                "typeArguments": null,
                "start": 2817,
                "end": 2822
              },
              "start": 2775,
              "end": 2822
            },
            "start": 2768,
            "end": 2823
          }
        ],
        "start": 2762,
        "end": 2825
      },
      "expression": false,
      "start": 2708,
      "end": 2825
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
            "name": "ns1",
            "optional": false,
            "typeAnnotation": null,
            "start": 2833,
            "end": 2836
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "accessorNames",
              "optional": false,
              "typeAnnotation": null,
              "start": 2839,
              "end": 2852
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "foo",
                "raw": "'foo'",
                "start": 2853,
                "end": 2858
              }
            ],
            "optional": false,
            "start": 2839,
            "end": 2859
          },
          "definite": false,
          "start": 2833,
          "end": 2859
        }
      ],
      "declare": false,
      "start": 2827,
      "end": 2860
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo54374",
        "optional": false,
        "typeAnnotation": null,
        "start": 2939,
        "end": 2947
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 2952,
              "end": 2953
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 2955,
                  "end": 2956
                },
                "start": 2955,
                "end": 2956
              },
              "start": 2953,
              "end": 2956
            },
            "accessibility": null,
            "static": false,
            "start": 2952,
            "end": 2957
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 2960,
              "end": 2961
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 2963,
                  "end": 2964
                },
                "start": 2963,
                "end": 2964
              },
              "start": 2961,
              "end": 2964
            },
            "accessibility": null,
            "static": false,
            "start": 2960,
            "end": 2965
          }
        ],
        "start": 2948,
        "end": 2967
      },
      "declare": false,
      "start": 2929,
      "end": 2967
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
            "name": "fooConst54374",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Foo54374",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2990,
                  "end": 2998
                },
                "typeArguments": null,
                "start": 2990,
                "end": 2998
              },
              "start": 2988,
              "end": 2998
            },
            "start": 2975,
            "end": 2998
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
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
                    "start": 3005,
                    "end": 3006
                  },
                  "value": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 3008,
                    "end": 3009
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 3005,
                  "end": 3009
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3013,
                    "end": 3014
                  },
                  "value": {
                    "type": "Literal",
                    "value": 3,
                    "raw": "3",
                    "start": 3016,
                    "end": 3017
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 3013,
                  "end": 3017
                }
              ],
              "start": 3001,
              "end": 3019
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "const",
                "optional": false,
                "typeAnnotation": null,
                "start": 3023,
                "end": 3028
              },
              "typeArguments": null,
              "start": 3023,
              "end": 3028
            },
            "start": 3001,
            "end": 3028
          },
          "definite": false,
          "start": 2975,
          "end": 3028
        }
      ],
      "declare": false,
      "start": 2969,
      "end": 3028
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 3028
}
```
