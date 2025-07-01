__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "BrandedNum",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 15
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSNumberKeyword",
            "start": 18,
            "end": 24
          },
          {
            "type": "TSTypeLiteral",
            "members": [
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "__numberBrand",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 29,
                  "end": 42
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 44,
                    "end": 47
                  },
                  "start": 42,
                  "end": 47
                },
                "accessibility": null,
                "static": false,
                "start": 29,
                "end": 47
              }
            ],
            "start": 27,
            "end": 49
          }
        ],
        "start": 18,
        "end": 49
      },
      "declare": false,
      "start": 0,
      "end": 50
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
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "BrandedNum",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 59,
                  "end": 69
                },
                "typeArguments": null,
                "start": 59,
                "end": 69
              },
              "start": 57,
              "end": 69
            },
            "start": 55,
            "end": 69
          },
          "init": null,
          "definite": false,
          "start": 55,
          "end": 69
        }
      ],
      "declare": false,
      "start": 51,
      "end": 70
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 86,
          "end": 87
        },
        "operator": ">",
        "right": {
          "type": "Literal",
          "value": 0,
          "raw": "0",
          "start": 90,
          "end": 91
        },
        "start": 86,
        "end": 91
      },
      "directive": null,
      "start": 86,
      "end": 92
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 93,
          "end": 94
        },
        "operator": ">",
        "right": {
          "type": "TSTypeAssertion",
          "typeAnnotation": {
            "type": "TSNumberKeyword",
            "start": 98,
            "end": 104
          },
          "expression": {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 105,
            "end": 106
          },
          "start": 97,
          "end": 106
        },
        "start": 93,
        "end": 106
      },
      "directive": null,
      "start": 93,
      "end": 107
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 108,
          "end": 109
        },
        "operator": ">",
        "right": {
          "type": "TSTypeAssertion",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "BrandedNum",
              "optional": false,
              "typeAnnotation": null,
              "start": 113,
              "end": 123
            },
            "typeArguments": null,
            "start": 113,
            "end": 123
          },
          "expression": {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 124,
            "end": 125
          },
          "start": 112,
          "end": 125
        },
        "start": 108,
        "end": 125
      },
      "directive": null,
      "start": 108,
      "end": 126
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 142,
          "end": 143
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 0,
          "raw": "0",
          "start": 146,
          "end": 147
        },
        "start": 142,
        "end": 147
      },
      "directive": null,
      "start": 142,
      "end": 148
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 149,
          "end": 150
        },
        "operator": "<",
        "right": {
          "type": "TSTypeAssertion",
          "typeAnnotation": {
            "type": "TSNumberKeyword",
            "start": 154,
            "end": 160
          },
          "expression": {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 161,
            "end": 162
          },
          "start": 153,
          "end": 162
        },
        "start": 149,
        "end": 162
      },
      "directive": null,
      "start": 149,
      "end": 163
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 164,
          "end": 165
        },
        "operator": "<",
        "right": {
          "type": "TSTypeAssertion",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "BrandedNum",
              "optional": false,
              "typeAnnotation": null,
              "start": 169,
              "end": 179
            },
            "typeArguments": null,
            "start": 169,
            "end": 179
          },
          "expression": {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 180,
            "end": 181
          },
          "start": 168,
          "end": 181
        },
        "start": 164,
        "end": 181
      },
      "directive": null,
      "start": 164,
      "end": 182
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 199,
          "end": 200
        },
        "operator": ">=",
        "right": {
          "type": "Literal",
          "value": 0,
          "raw": "0",
          "start": 204,
          "end": 205
        },
        "start": 199,
        "end": 205
      },
      "directive": null,
      "start": 199,
      "end": 206
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 207,
          "end": 208
        },
        "operator": ">=",
        "right": {
          "type": "TSTypeAssertion",
          "typeAnnotation": {
            "type": "TSNumberKeyword",
            "start": 213,
            "end": 219
          },
          "expression": {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 220,
            "end": 221
          },
          "start": 212,
          "end": 221
        },
        "start": 207,
        "end": 221
      },
      "directive": null,
      "start": 207,
      "end": 222
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 223,
          "end": 224
        },
        "operator": ">=",
        "right": {
          "type": "TSTypeAssertion",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "BrandedNum",
              "optional": false,
              "typeAnnotation": null,
              "start": 229,
              "end": 239
            },
            "typeArguments": null,
            "start": 229,
            "end": 239
          },
          "expression": {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 240,
            "end": 241
          },
          "start": 228,
          "end": 241
        },
        "start": 223,
        "end": 241
      },
      "directive": null,
      "start": 223,
      "end": 242
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 259,
          "end": 260
        },
        "operator": "<=",
        "right": {
          "type": "Literal",
          "value": 0,
          "raw": "0",
          "start": 264,
          "end": 265
        },
        "start": 259,
        "end": 265
      },
      "directive": null,
      "start": 259,
      "end": 266
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 267,
          "end": 268
        },
        "operator": "<=",
        "right": {
          "type": "TSTypeAssertion",
          "typeAnnotation": {
            "type": "TSNumberKeyword",
            "start": 273,
            "end": 279
          },
          "expression": {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 280,
            "end": 281
          },
          "start": 272,
          "end": 281
        },
        "start": 267,
        "end": 281
      },
      "directive": null,
      "start": 267,
      "end": 282
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 283,
          "end": 284
        },
        "operator": "<=",
        "right": {
          "type": "TSTypeAssertion",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "BrandedNum",
              "optional": false,
              "typeAnnotation": null,
              "start": 289,
              "end": 299
            },
            "typeArguments": null,
            "start": 289,
            "end": 299
          },
          "expression": {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 300,
            "end": 301
          },
          "start": 288,
          "end": 301
        },
        "start": 283,
        "end": 301
      },
      "directive": null,
      "start": 283,
      "end": 302
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 319,
          "end": 320
        },
        "operator": "==",
        "right": {
          "type": "Literal",
          "value": 0,
          "raw": "0",
          "start": 324,
          "end": 325
        },
        "start": 319,
        "end": 325
      },
      "directive": null,
      "start": 319,
      "end": 326
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 327,
          "end": 328
        },
        "operator": "==",
        "right": {
          "type": "TSTypeAssertion",
          "typeAnnotation": {
            "type": "TSNumberKeyword",
            "start": 333,
            "end": 339
          },
          "expression": {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 340,
            "end": 341
          },
          "start": 332,
          "end": 341
        },
        "start": 327,
        "end": 341
      },
      "directive": null,
      "start": 327,
      "end": 342
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 343,
          "end": 344
        },
        "operator": "==",
        "right": {
          "type": "TSTypeAssertion",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "BrandedNum",
              "optional": false,
              "typeAnnotation": null,
              "start": 349,
              "end": 359
            },
            "typeArguments": null,
            "start": 349,
            "end": 359
          },
          "expression": {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 360,
            "end": 361
          },
          "start": 348,
          "end": 361
        },
        "start": 343,
        "end": 361
      },
      "directive": null,
      "start": 343,
      "end": 362
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 379,
          "end": 380
        },
        "operator": "!=",
        "right": {
          "type": "Literal",
          "value": 0,
          "raw": "0",
          "start": 384,
          "end": 385
        },
        "start": 379,
        "end": 385
      },
      "directive": null,
      "start": 379,
      "end": 386
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 387,
          "end": 388
        },
        "operator": "!=",
        "right": {
          "type": "TSTypeAssertion",
          "typeAnnotation": {
            "type": "TSNumberKeyword",
            "start": 393,
            "end": 399
          },
          "expression": {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 400,
            "end": 401
          },
          "start": 392,
          "end": 401
        },
        "start": 387,
        "end": 401
      },
      "directive": null,
      "start": 387,
      "end": 402
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 403,
          "end": 404
        },
        "operator": "!=",
        "right": {
          "type": "TSTypeAssertion",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "BrandedNum",
              "optional": false,
              "typeAnnotation": null,
              "start": 409,
              "end": 419
            },
            "typeArguments": null,
            "start": 409,
            "end": 419
          },
          "expression": {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 420,
            "end": 421
          },
          "start": 408,
          "end": 421
        },
        "start": 403,
        "end": 421
      },
      "directive": null,
      "start": 403,
      "end": 422
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 440,
          "end": 441
        },
        "operator": "===",
        "right": {
          "type": "Literal",
          "value": 0,
          "raw": "0",
          "start": 446,
          "end": 447
        },
        "start": 440,
        "end": 447
      },
      "directive": null,
      "start": 440,
      "end": 448
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 449,
          "end": 450
        },
        "operator": "===",
        "right": {
          "type": "TSTypeAssertion",
          "typeAnnotation": {
            "type": "TSNumberKeyword",
            "start": 456,
            "end": 462
          },
          "expression": {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 463,
            "end": 464
          },
          "start": 455,
          "end": 464
        },
        "start": 449,
        "end": 464
      },
      "directive": null,
      "start": 449,
      "end": 465
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 466,
          "end": 467
        },
        "operator": "===",
        "right": {
          "type": "TSTypeAssertion",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "BrandedNum",
              "optional": false,
              "typeAnnotation": null,
              "start": 473,
              "end": 483
            },
            "typeArguments": null,
            "start": 473,
            "end": 483
          },
          "expression": {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 484,
            "end": 485
          },
          "start": 472,
          "end": 485
        },
        "start": 466,
        "end": 485
      },
      "directive": null,
      "start": 466,
      "end": 486
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 504,
          "end": 505
        },
        "operator": "!==",
        "right": {
          "type": "Literal",
          "value": 0,
          "raw": "0",
          "start": 510,
          "end": 511
        },
        "start": 504,
        "end": 511
      },
      "directive": null,
      "start": 504,
      "end": 512
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 513,
          "end": 514
        },
        "operator": "!==",
        "right": {
          "type": "TSTypeAssertion",
          "typeAnnotation": {
            "type": "TSNumberKeyword",
            "start": 520,
            "end": 526
          },
          "expression": {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 527,
            "end": 528
          },
          "start": 519,
          "end": 528
        },
        "start": 513,
        "end": 528
      },
      "directive": null,
      "start": 513,
      "end": 529
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 530,
          "end": 531
        },
        "operator": "!==",
        "right": {
          "type": "TSTypeAssertion",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "BrandedNum",
              "optional": false,
              "typeAnnotation": null,
              "start": 537,
              "end": 547
            },
            "typeArguments": null,
            "start": 537,
            "end": 547
          },
          "expression": {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 548,
            "end": 549
          },
          "start": 536,
          "end": 549
        },
        "start": 530,
        "end": 549
      },
      "directive": null,
      "start": 530,
      "end": 550
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 550
}
```
