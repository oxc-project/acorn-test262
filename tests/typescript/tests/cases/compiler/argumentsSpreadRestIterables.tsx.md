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
            "name": "itNum",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Iterable",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 21,
                  "end": 29
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 30,
                      "end": 36
                    }
                  ],
                  "start": 29,
                  "end": 37
                },
                "start": 21,
                "end": 37
              },
              "start": 19,
              "end": 37
            },
            "start": 14,
            "end": 37
          },
          "init": null,
          "definite": false,
          "start": 14,
          "end": 37
        }
      ],
      "declare": true,
      "start": 0,
      "end": 40
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "FunctionExpression",
          "id": null,
          "generator": false,
          "async": false,
          "declare": false,
          "typeParameters": null,
          "params": [
            {
              "type": "RestElement",
              "decorators": [],
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "rest",
                "optional": false,
                "typeAnnotation": null,
                "start": 53,
                "end": 57
              },
              "optional": false,
              "typeAnnotation": null,
              "value": null,
              "start": 50,
              "end": 57
            }
          ],
          "returnType": null,
          "body": {
            "type": "BlockStatement",
            "body": [],
            "start": 59,
            "end": 61
          },
          "expression": false,
          "start": 41,
          "end": 61
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "SpreadElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "itNum",
              "optional": false,
              "typeAnnotation": null,
              "start": 66,
              "end": 71
            },
            "start": 63,
            "end": 71
          }
        ],
        "optional": false,
        "start": 40,
        "end": 72
      },
      "directive": null,
      "start": 40,
      "end": 74
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "FunctionExpression",
          "id": null,
          "generator": false,
          "async": false,
          "declare": false,
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 84,
              "end": 85
            },
            {
              "type": "RestElement",
              "decorators": [],
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "rest",
                "optional": false,
                "typeAnnotation": null,
                "start": 90,
                "end": 94
              },
              "optional": false,
              "typeAnnotation": null,
              "value": null,
              "start": 87,
              "end": 94
            }
          ],
          "returnType": null,
          "body": {
            "type": "BlockStatement",
            "body": [],
            "start": 96,
            "end": 98
          },
          "expression": false,
          "start": 75,
          "end": 98
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "",
            "raw": "''",
            "start": 100,
            "end": 102
          },
          {
            "type": "SpreadElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "itNum",
              "optional": false,
              "typeAnnotation": null,
              "start": 107,
              "end": 112
            },
            "start": 104,
            "end": 112
          }
        ],
        "optional": false,
        "start": 74,
        "end": 113
      },
      "directive": null,
      "start": 74,
      "end": 115
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "FunctionExpression",
          "id": null,
          "generator": false,
          "async": false,
          "declare": false,
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 125,
              "end": 126
            },
            {
              "type": "RestElement",
              "decorators": [],
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "rest",
                "optional": false,
                "typeAnnotation": null,
                "start": 131,
                "end": 135
              },
              "optional": false,
              "typeAnnotation": null,
              "value": null,
              "start": 128,
              "end": 135
            }
          ],
          "returnType": null,
          "body": {
            "type": "BlockStatement",
            "body": [],
            "start": 137,
            "end": 139
          },
          "expression": false,
          "start": 116,
          "end": 139
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "",
            "raw": "''",
            "start": 141,
            "end": 143
          },
          {
            "type": "Literal",
            "value": true,
            "raw": "true",
            "start": 145,
            "end": 149
          },
          {
            "type": "SpreadElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "itNum",
              "optional": false,
              "typeAnnotation": null,
              "start": 154,
              "end": 159
            },
            "start": 151,
            "end": 159
          }
        ],
        "optional": false,
        "start": 115,
        "end": 160
      },
      "directive": null,
      "start": 115,
      "end": 160
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn1",
        "optional": false,
        "typeAnnotation": null,
        "start": 179,
        "end": 182
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
              "start": 189,
              "end": 190
            },
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "readonly",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSUnknownKeyword",
                  "start": 208,
                  "end": 215
                },
                "start": 208,
                "end": 217
              },
              "start": 199,
              "end": 217
            },
            "default": null,
            "in": false,
            "out": false,
            "const": true,
            "start": 183,
            "end": 217
          }
        ],
        "start": 182,
        "end": 218
      },
      "params": [
        {
          "type": "RestElement",
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "args",
            "optional": false,
            "typeAnnotation": null,
            "start": 222,
            "end": 226
          },
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
                "start": 228,
                "end": 229
              },
              "typeArguments": null,
              "start": 228,
              "end": 229
            },
            "start": 226,
            "end": 229
          },
          "value": null,
          "start": 219,
          "end": 229
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
            "start": 232,
            "end": 233
          },
          "typeArguments": null,
          "start": 232,
          "end": 233
        },
        "start": 230,
        "end": 233
      },
      "body": null,
      "expression": false,
      "start": 162,
      "end": 234
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
            "name": "res1",
            "optional": false,
            "typeAnnotation": null,
            "start": 241,
            "end": 245
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "fn1",
              "optional": false,
              "typeAnnotation": null,
              "start": 248,
              "end": 251
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Literal",
                  "value": "hello",
                  "raw": "\"hello\"",
                  "start": 255,
                  "end": 262
                },
                "start": 252,
                "end": 262
              }
            ],
            "optional": false,
            "start": 248,
            "end": 263
          },
          "definite": false,
          "start": 241,
          "end": 263
        }
      ],
      "declare": false,
      "start": 235,
      "end": 264
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
            "name": "res2",
            "optional": false,
            "typeAnnotation": null,
            "start": 271,
            "end": 275
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "fn1",
              "optional": false,
              "typeAnnotation": null,
              "start": 278,
              "end": 281
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "itNum",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 285,
                  "end": 290
                },
                "start": 282,
                "end": 290
              }
            ],
            "optional": false,
            "start": 278,
            "end": 291
          },
          "definite": false,
          "start": 271,
          "end": 291
        }
      ],
      "declare": false,
      "start": 265,
      "end": 292
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
            "name": "res3",
            "optional": false,
            "typeAnnotation": null,
            "start": 299,
            "end": 303
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "fn1",
              "optional": false,
              "typeAnnotation": null,
              "start": 306,
              "end": 309
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": true,
                "raw": "true",
                "start": 310,
                "end": 314
              },
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Literal",
                  "value": "hello",
                  "raw": "\"hello\"",
                  "start": 319,
                  "end": 326
                },
                "start": 316,
                "end": 326
              }
            ],
            "optional": false,
            "start": 306,
            "end": 327
          },
          "definite": false,
          "start": 299,
          "end": 327
        }
      ],
      "declare": false,
      "start": 293,
      "end": 328
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
            "name": "res4",
            "optional": false,
            "typeAnnotation": null,
            "start": 335,
            "end": 339
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "fn1",
              "optional": false,
              "typeAnnotation": null,
              "start": 342,
              "end": 345
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": true,
                "raw": "true",
                "start": 346,
                "end": 350
              },
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "itNum",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 355,
                  "end": 360
                },
                "start": 352,
                "end": 360
              }
            ],
            "optional": false,
            "start": 342,
            "end": 361
          },
          "definite": false,
          "start": 335,
          "end": 361
        }
      ],
      "declare": false,
      "start": 329,
      "end": 362
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 402,
        "end": 405
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
              "start": 406,
              "end": 407
            },
            "constraint": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSUnknownKeyword",
                "start": 416,
                "end": 423
              },
              "start": 416,
              "end": 425
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 406,
            "end": 425
          }
        ],
        "start": 405,
        "end": 426
      },
      "params": [
        {
          "type": "RestElement",
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "args",
            "optional": false,
            "typeAnnotation": null,
            "start": 430,
            "end": 434
          },
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
                "start": 436,
                "end": 437
              },
              "typeArguments": null,
              "start": 436,
              "end": 437
            },
            "start": 434,
            "end": 437
          },
          "value": null,
          "start": 427,
          "end": 437
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
            "start": 440,
            "end": 441
          },
          "typeArguments": null,
          "start": 440,
          "end": 441
        },
        "start": 438,
        "end": 441
      },
      "body": null,
      "expression": false,
      "start": 385,
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
            "name": "p1",
            "optional": false,
            "typeAnnotation": null,
            "start": 449,
            "end": 451
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 454,
              "end": 457
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Literal",
                  "value": "hello",
                  "raw": "\"hello\"",
                  "start": 461,
                  "end": 468
                },
                "start": 458,
                "end": 468
              }
            ],
            "optional": false,
            "start": 454,
            "end": 469
          },
          "definite": false,
          "start": 449,
          "end": 469
        }
      ],
      "declare": false,
      "start": 443,
      "end": 470
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
            "name": "p2",
            "optional": false,
            "typeAnnotation": null,
            "start": 477,
            "end": 479
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 482,
              "end": 485
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "itNum",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 489,
                  "end": 494
                },
                "start": 486,
                "end": 494
              }
            ],
            "optional": false,
            "start": 482,
            "end": 495
          },
          "definite": false,
          "start": 477,
          "end": 495
        }
      ],
      "declare": false,
      "start": 471,
      "end": 496
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
            "name": "p3",
            "optional": false,
            "typeAnnotation": null,
            "start": 503,
            "end": 505
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 508,
              "end": 511
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": true,
                "raw": "true",
                "start": 512,
                "end": 516
              },
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Literal",
                  "value": "hello",
                  "raw": "\"hello\"",
                  "start": 521,
                  "end": 528
                },
                "start": 518,
                "end": 528
              }
            ],
            "optional": false,
            "start": 508,
            "end": 529
          },
          "definite": false,
          "start": 503,
          "end": 529
        }
      ],
      "declare": false,
      "start": 497,
      "end": 530
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
            "name": "p4",
            "optional": false,
            "typeAnnotation": null,
            "start": 537,
            "end": 539
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 542,
              "end": 545
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": true,
                "raw": "true",
                "start": 546,
                "end": 550
              },
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "itNum",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 555,
                  "end": 560
                },
                "start": 552,
                "end": 560
              }
            ],
            "optional": false,
            "start": 542,
            "end": 561
          },
          "definite": false,
          "start": 537,
          "end": 561
        }
      ],
      "declare": false,
      "start": 531,
      "end": 562
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 562
}
```
