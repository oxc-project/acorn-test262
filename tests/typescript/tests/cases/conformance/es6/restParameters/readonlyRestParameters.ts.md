__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f0",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 11
      },
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
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 15,
              "end": 21
            },
            "start": 13,
            "end": 21
          },
          "start": 12,
          "end": 21
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 26,
              "end": 32
            },
            "start": 24,
            "end": 32
          },
          "start": 23,
          "end": 32
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "f0",
                "optional": false,
                "typeAnnotation": null,
                "start": 40,
                "end": 42
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 43,
                  "end": 44
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 46,
                  "end": 47
                }
              ],
              "optional": false,
              "start": 40,
              "end": 48
            },
            "directive": null,
            "start": 40,
            "end": 49
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "f1",
                "optional": false,
                "typeAnnotation": null,
                "start": 54,
                "end": 56
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 57,
                  "end": 58
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 60,
                  "end": 61
                }
              ],
              "optional": false,
              "start": 54,
              "end": 62
            },
            "directive": null,
            "start": 54,
            "end": 63
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "f2",
                "optional": false,
                "typeAnnotation": null,
                "start": 68,
                "end": 70
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 71,
                  "end": 72
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 74,
                  "end": 75
                }
              ],
              "optional": false,
              "start": 68,
              "end": 76
            },
            "directive": null,
            "start": 68,
            "end": 77
          }
        ],
        "start": 34,
        "end": 79
      },
      "expression": false,
      "start": 0,
      "end": 79
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null,
        "start": 90,
        "end": 92
      },
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
            "name": "args",
            "optional": false,
            "typeAnnotation": null,
            "start": 96,
            "end": 100
          },
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeOperator",
              "operator": "readonly",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSStringKeyword",
                  "start": 111,
                  "end": 117
                },
                "start": 111,
                "end": 119
              },
              "start": 102,
              "end": 119
            },
            "start": 100,
            "end": 119
          },
          "value": null,
          "start": 93,
          "end": 119
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "f0",
                "optional": false,
                "typeAnnotation": null,
                "start": 127,
                "end": 129
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "SpreadElement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "args",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 133,
                    "end": 137
                  },
                  "start": 130,
                  "end": 137
                }
              ],
              "optional": false,
              "start": 127,
              "end": 138
            },
            "directive": null,
            "start": 127,
            "end": 139
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "f1",
                "optional": false,
                "typeAnnotation": null,
                "start": 154,
                "end": 156
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": "abc",
                  "raw": "'abc'",
                  "start": 157,
                  "end": 162
                },
                {
                  "type": "Literal",
                  "value": "def",
                  "raw": "'def'",
                  "start": 164,
                  "end": 169
                }
              ],
              "optional": false,
              "start": 154,
              "end": 170
            },
            "directive": null,
            "start": 154,
            "end": 171
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "f1",
                "optional": false,
                "typeAnnotation": null,
                "start": 176,
                "end": 178
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": "abc",
                  "raw": "'abc'",
                  "start": 179,
                  "end": 184
                },
                {
                  "type": "SpreadElement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "args",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 189,
                    "end": 193
                  },
                  "start": 186,
                  "end": 193
                }
              ],
              "optional": false,
              "start": 176,
              "end": 194
            },
            "directive": null,
            "start": 176,
            "end": 195
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "f1",
                "optional": false,
                "typeAnnotation": null,
                "start": 200,
                "end": 202
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "SpreadElement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "args",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 206,
                    "end": 210
                  },
                  "start": 203,
                  "end": 210
                }
              ],
              "optional": false,
              "start": 200,
              "end": 211
            },
            "directive": null,
            "start": 200,
            "end": 212
          }
        ],
        "start": 121,
        "end": 214
      },
      "expression": false,
      "start": 81,
      "end": 214
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null,
        "start": 225,
        "end": 227
      },
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
            "name": "args",
            "optional": false,
            "typeAnnotation": null,
            "start": 231,
            "end": 235
          },
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeOperator",
              "operator": "readonly",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSStringKeyword",
                    "start": 247,
                    "end": 253
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 255,
                    "end": 261
                  }
                ],
                "start": 246,
                "end": 262
              },
              "start": 237,
              "end": 262
            },
            "start": 235,
            "end": 262
          },
          "value": null,
          "start": 228,
          "end": 262
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "f0",
                "optional": false,
                "typeAnnotation": null,
                "start": 270,
                "end": 272
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "SpreadElement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "args",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 276,
                    "end": 280
                  },
                  "start": 273,
                  "end": 280
                }
              ],
              "optional": false,
              "start": 270,
              "end": 281
            },
            "directive": null,
            "start": 270,
            "end": 282
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "f1",
                "optional": false,
                "typeAnnotation": null,
                "start": 287,
                "end": 289
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": "abc",
                  "raw": "'abc'",
                  "start": 290,
                  "end": 295
                },
                {
                  "type": "Literal",
                  "value": "def",
                  "raw": "'def'",
                  "start": 297,
                  "end": 302
                }
              ],
              "optional": false,
              "start": 287,
              "end": 303
            },
            "directive": null,
            "start": 287,
            "end": 304
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "f1",
                "optional": false,
                "typeAnnotation": null,
                "start": 309,
                "end": 311
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": "abc",
                  "raw": "'abc'",
                  "start": 312,
                  "end": 317
                },
                {
                  "type": "SpreadElement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "args",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 322,
                    "end": 326
                  },
                  "start": 319,
                  "end": 326
                }
              ],
              "optional": false,
              "start": 309,
              "end": 327
            },
            "directive": null,
            "start": 309,
            "end": 328
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "f1",
                "optional": false,
                "typeAnnotation": null,
                "start": 333,
                "end": 335
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "SpreadElement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "args",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 339,
                    "end": 343
                  },
                  "start": 336,
                  "end": 343
                }
              ],
              "optional": false,
              "start": 333,
              "end": 344
            },
            "directive": null,
            "start": 333,
            "end": 345
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "f2",
                "optional": false,
                "typeAnnotation": null,
                "start": 350,
                "end": 352
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": "abc",
                  "raw": "'abc'",
                  "start": 353,
                  "end": 358
                },
                {
                  "type": "Literal",
                  "value": "def",
                  "raw": "'def'",
                  "start": 360,
                  "end": 365
                }
              ],
              "optional": false,
              "start": 350,
              "end": 366
            },
            "directive": null,
            "start": 350,
            "end": 367
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "f2",
                "optional": false,
                "typeAnnotation": null,
                "start": 372,
                "end": 374
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": "abc",
                  "raw": "'abc'",
                  "start": 375,
                  "end": 380
                },
                {
                  "type": "SpreadElement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "args",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 385,
                    "end": 389
                  },
                  "start": 382,
                  "end": 389
                }
              ],
              "optional": false,
              "start": 372,
              "end": 390
            },
            "directive": null,
            "start": 372,
            "end": 391
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "f2",
                "optional": false,
                "typeAnnotation": null,
                "start": 406,
                "end": 408
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "SpreadElement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "args",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 412,
                    "end": 416
                  },
                  "start": 409,
                  "end": 416
                }
              ],
              "optional": false,
              "start": 406,
              "end": 417
            },
            "directive": null,
            "start": 406,
            "end": 418
          }
        ],
        "start": 264,
        "end": 420
      },
      "expression": false,
      "start": 216,
      "end": 420
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f4",
        "optional": false,
        "typeAnnotation": null,
        "start": 431,
        "end": 433
      },
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
            "name": "args",
            "optional": false,
            "typeAnnotation": null,
            "start": 437,
            "end": 441
          },
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeOperator",
              "operator": "readonly",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSStringKeyword",
                  "start": 452,
                  "end": 458
                },
                "start": 452,
                "end": 460
              },
              "start": 443,
              "end": 460
            },
            "start": 441,
            "end": 460
          },
          "value": null,
          "start": 434,
          "end": 460
        }
      ],
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
                  "type": "Identifier",
                  "decorators": [],
                  "name": "args",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 468,
                  "end": 472
                },
                "property": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 473,
                  "end": 474
                },
                "optional": false,
                "computed": true,
                "start": 468,
                "end": 475
              },
              "right": {
                "type": "Literal",
                "value": "abc",
                "raw": "'abc'",
                "start": 478,
                "end": 483
              },
              "start": 468,
              "end": 483
            },
            "directive": null,
            "start": 468,
            "end": 484
          }
        ],
        "start": 462,
        "end": 496
      },
      "expression": false,
      "start": 422,
      "end": 496
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 496
}
```
