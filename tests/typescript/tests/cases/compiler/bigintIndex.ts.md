__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "BigIntIndex",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 21
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "E",
              "optional": false,
              "typeAnnotation": null,
              "start": 22,
              "end": 23
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 22,
            "end": 23
          }
        ],
        "start": 21,
        "end": 24
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "index",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSBigIntKeyword",
                    "start": 39,
                    "end": 45
                  },
                  "start": 37,
                  "end": 45
                },
                "start": 32,
                "end": 45
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "E",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 48,
                  "end": 49
                },
                "typeArguments": null,
                "start": 48,
                "end": 49
              },
              "start": 46,
              "end": 49
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 31,
            "end": 50
          }
        ],
        "start": 25,
        "end": 68
      },
      "declare": false,
      "start": 0,
      "end": 68
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
            "name": "arr",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSNumberKeyword",
                  "start": 81,
                  "end": 87
                },
                "start": 81,
                "end": 89
              },
              "start": 79,
              "end": 89
            },
            "start": 76,
            "end": 89
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 93,
                "end": 94
              },
              {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 96,
                "end": 97
              },
              {
                "type": "Literal",
                "value": 3,
                "raw": "3",
                "start": 99,
                "end": 100
              }
            ],
            "start": 92,
            "end": 101
          },
          "definite": false,
          "start": 76,
          "end": 101
        }
      ],
      "declare": false,
      "start": 70,
      "end": 102
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
            "name": "num",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 112,
                "end": 118
              },
              "start": 110,
              "end": 118
            },
            "start": 107,
            "end": 118
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "arr",
              "optional": false,
              "typeAnnotation": null,
              "start": 121,
              "end": 124
            },
            "property": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 125,
              "end": 126
            },
            "optional": false,
            "computed": true,
            "start": 121,
            "end": 127
          },
          "definite": false,
          "start": 107,
          "end": 127
        }
      ],
      "declare": false,
      "start": 103,
      "end": 128
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "num",
          "optional": false,
          "typeAnnotation": null,
          "start": 129,
          "end": 132
        },
        "right": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "arr",
            "optional": false,
            "typeAnnotation": null,
            "start": 135,
            "end": 138
          },
          "property": {
            "type": "Literal",
            "value": "1",
            "raw": "\"1\"",
            "start": 139,
            "end": 142
          },
          "optional": false,
          "computed": true,
          "start": 135,
          "end": 143
        },
        "start": 129,
        "end": 143
      },
      "directive": null,
      "start": 129,
      "end": 144
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "num",
          "optional": false,
          "typeAnnotation": null,
          "start": 145,
          "end": 148
        },
        "right": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "arr",
            "optional": false,
            "typeAnnotation": null,
            "start": 151,
            "end": 154
          },
          "property": {
            "type": "Literal",
            "value": null,
            "raw": "1n",
            "bigint": "1",
            "start": 155,
            "end": 157
          },
          "optional": false,
          "computed": true,
          "start": 151,
          "end": 158
        },
        "start": 145,
        "end": 158
      },
      "directive": null,
      "start": 145,
      "end": 159
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "num",
          "optional": false,
          "typeAnnotation": null,
          "start": 176,
          "end": 179
        },
        "right": {
          "type": "MemberExpression",
          "object": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 183,
                "end": 184
              },
              {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 186,
                "end": 187
              },
              {
                "type": "Literal",
                "value": 3,
                "raw": "3",
                "start": 189,
                "end": 190
              }
            ],
            "start": 182,
            "end": 191
          },
          "property": {
            "type": "Literal",
            "value": null,
            "raw": "1n",
            "bigint": "1",
            "start": 192,
            "end": 194
          },
          "optional": false,
          "computed": true,
          "start": 182,
          "end": 195
        },
        "start": 176,
        "end": 195
      },
      "directive": null,
      "start": 176,
      "end": 196
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
            "name": "key",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 229,
                  "end": 232
                },
                "start": 223,
                "end": 232
              },
              "start": 221,
              "end": 232
            },
            "start": 218,
            "end": 232
          },
          "init": null,
          "definite": false,
          "start": 218,
          "end": 232
        }
      ],
      "declare": false,
      "start": 214,
      "end": 233
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "key",
          "optional": false,
          "typeAnnotation": null,
          "start": 279,
          "end": 282
        },
        "right": {
          "type": "Literal",
          "value": 123,
          "raw": "123",
          "start": 285,
          "end": 288
        },
        "start": 279,
        "end": 288
      },
      "directive": null,
      "start": 279,
      "end": 289
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "key",
          "optional": false,
          "typeAnnotation": null,
          "start": 290,
          "end": 293
        },
        "right": {
          "type": "Literal",
          "value": "abc",
          "raw": "\"abc\"",
          "start": 296,
          "end": 301
        },
        "start": 290,
        "end": 301
      },
      "directive": null,
      "start": 290,
      "end": 302
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "key",
          "optional": false,
          "typeAnnotation": null,
          "start": 303,
          "end": 306
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "Symbol",
            "optional": false,
            "typeAnnotation": null,
            "start": 309,
            "end": 315
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false,
          "start": 309,
          "end": 317
        },
        "start": 303,
        "end": 317
      },
      "directive": null,
      "start": 303,
      "end": 318
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "key",
          "optional": false,
          "typeAnnotation": null,
          "start": 319,
          "end": 322
        },
        "right": {
          "type": "Literal",
          "value": null,
          "raw": "123n",
          "bigint": "123",
          "start": 325,
          "end": 329
        },
        "start": 319,
        "end": 329
      },
      "directive": null,
      "start": 319,
      "end": 330
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
            "name": "bigNum",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBigIntKeyword",
                "start": 430,
                "end": 436
              },
              "start": 428,
              "end": 436
            },
            "start": 422,
            "end": 436
          },
          "init": {
            "type": "Literal",
            "value": null,
            "raw": "0n",
            "bigint": "0",
            "start": 439,
            "end": 441
          },
          "definite": false,
          "start": 422,
          "end": 441
        }
      ],
      "declare": false,
      "start": 416,
      "end": 442
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
            "name": "typedArray",
            "optional": false,
            "typeAnnotation": null,
            "start": 449,
            "end": 459
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Uint8Array",
              "optional": false,
              "typeAnnotation": null,
              "start": 466,
              "end": 476
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 3,
                "raw": "3",
                "start": 477,
                "end": 478
              }
            ],
            "start": 462,
            "end": 479
          },
          "definite": false,
          "start": 449,
          "end": 479
        }
      ],
      "declare": false,
      "start": 443,
      "end": 480
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "typedArray",
            "optional": false,
            "typeAnnotation": null,
            "start": 481,
            "end": 491
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "bigNum",
            "optional": false,
            "typeAnnotation": null,
            "start": 492,
            "end": 498
          },
          "optional": false,
          "computed": true,
          "start": 481,
          "end": 499
        },
        "right": {
          "type": "Literal",
          "value": 170,
          "raw": "0xAA",
          "start": 502,
          "end": 506
        },
        "start": 481,
        "end": 506
      },
      "directive": null,
      "start": 481,
      "end": 507
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "typedArray",
            "optional": false,
            "typeAnnotation": null,
            "start": 524,
            "end": 534
          },
          "property": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "String",
              "optional": false,
              "typeAnnotation": null,
              "start": 535,
              "end": 541
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "bigNum",
                "optional": false,
                "typeAnnotation": null,
                "start": 542,
                "end": 548
              }
            ],
            "optional": false,
            "start": 535,
            "end": 549
          },
          "optional": false,
          "computed": true,
          "start": 524,
          "end": 550
        },
        "right": {
          "type": "Literal",
          "value": 170,
          "raw": "0xAA",
          "start": 553,
          "end": 557
        },
        "start": 524,
        "end": 557
      },
      "directive": null,
      "start": 524,
      "end": 558
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "typedArray",
            "optional": false,
            "typeAnnotation": null,
            "start": 559,
            "end": 569
          },
          "property": {
            "type": "Literal",
            "value": "1",
            "raw": "\"1\"",
            "start": 570,
            "end": 573
          },
          "optional": false,
          "computed": true,
          "start": 559,
          "end": 574
        },
        "right": {
          "type": "Literal",
          "value": 187,
          "raw": "0xBB",
          "start": 577,
          "end": 581
        },
        "start": 559,
        "end": 581
      },
      "directive": null,
      "start": 559,
      "end": 582
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "typedArray",
            "optional": false,
            "typeAnnotation": null,
            "start": 583,
            "end": 593
          },
          "property": {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 594,
            "end": 595
          },
          "optional": false,
          "computed": true,
          "start": 583,
          "end": 596
        },
        "right": {
          "type": "Literal",
          "value": 204,
          "raw": "0xCC",
          "start": 599,
          "end": 603
        },
        "start": 583,
        "end": 603
      },
      "directive": null,
      "start": 583,
      "end": 604
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 604
}
```
