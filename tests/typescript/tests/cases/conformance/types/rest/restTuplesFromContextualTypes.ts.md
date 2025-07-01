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
            "name": "t1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 19,
                    "end": 25
                  },
                  {
                    "type": "TSBooleanKeyword",
                    "start": 27,
                    "end": 34
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 36,
                    "end": 42
                  }
                ],
                "start": 18,
                "end": 43
              },
              "start": 16,
              "end": 43
            },
            "start": 14,
            "end": 43
          },
          "init": null,
          "definite": false,
          "start": 14,
          "end": 43
        }
      ],
      "declare": true,
      "start": 0,
      "end": 44
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
            },
            {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 63,
              "end": 64
            }
          ],
          "returnType": null,
          "body": {
            "type": "BlockStatement",
            "body": [],
            "start": 65,
            "end": 67
          },
          "expression": false,
          "start": 47,
          "end": 67
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "SpreadElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "t1",
              "optional": false,
              "typeAnnotation": null,
              "start": 72,
              "end": 74
            },
            "start": 69,
            "end": 74
          }
        ],
        "optional": false,
        "start": 46,
        "end": 75
      },
      "directive": null,
      "start": 46,
      "end": 76
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
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 91,
                "end": 92
              },
              "optional": false,
              "typeAnnotation": null,
              "value": null,
              "start": 88,
              "end": 92
            }
          ],
          "returnType": null,
          "body": {
            "type": "BlockStatement",
            "body": [],
            "start": 93,
            "end": 95
          },
          "expression": false,
          "start": 78,
          "end": 95
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "SpreadElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "t1",
              "optional": false,
              "typeAnnotation": null,
              "start": 100,
              "end": 102
            },
            "start": 97,
            "end": 102
          }
        ],
        "optional": false,
        "start": 77,
        "end": 103
      },
      "directive": null,
      "start": 77,
      "end": 104
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
              "start": 116,
              "end": 117
            },
            {
              "type": "RestElement",
              "decorators": [],
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 122,
                "end": 123
              },
              "optional": false,
              "typeAnnotation": null,
              "value": null,
              "start": 119,
              "end": 123
            }
          ],
          "returnType": null,
          "body": {
            "type": "BlockStatement",
            "body": [],
            "start": 124,
            "end": 126
          },
          "expression": false,
          "start": 106,
          "end": 126
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "SpreadElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "t1",
              "optional": false,
              "typeAnnotation": null,
              "start": 131,
              "end": 133
            },
            "start": 128,
            "end": 133
          }
        ],
        "optional": false,
        "start": 105,
        "end": 134
      },
      "directive": null,
      "start": 105,
      "end": 135
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
              "start": 147,
              "end": 148
            },
            {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 150,
              "end": 151
            },
            {
              "type": "RestElement",
              "decorators": [],
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 156,
                "end": 157
              },
              "optional": false,
              "typeAnnotation": null,
              "value": null,
              "start": 153,
              "end": 157
            }
          ],
          "returnType": null,
          "body": {
            "type": "BlockStatement",
            "body": [],
            "start": 158,
            "end": 160
          },
          "expression": false,
          "start": 137,
          "end": 160
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "SpreadElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "t1",
              "optional": false,
              "typeAnnotation": null,
              "start": 165,
              "end": 167
            },
            "start": 162,
            "end": 167
          }
        ],
        "optional": false,
        "start": 136,
        "end": 168
      },
      "directive": null,
      "start": 136,
      "end": 169
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
              "start": 181,
              "end": 182
            },
            {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 184,
              "end": 185
            },
            {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 187,
              "end": 188
            },
            {
              "type": "RestElement",
              "decorators": [],
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 193,
                "end": 194
              },
              "optional": false,
              "typeAnnotation": null,
              "value": null,
              "start": 190,
              "end": 194
            }
          ],
          "returnType": null,
          "body": {
            "type": "BlockStatement",
            "body": [],
            "start": 195,
            "end": 197
          },
          "expression": false,
          "start": 171,
          "end": 197
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "SpreadElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "t1",
              "optional": false,
              "typeAnnotation": null,
              "start": 202,
              "end": 204
            },
            "start": 199,
            "end": 204
          }
        ],
        "optional": false,
        "start": 170,
        "end": 205
      },
      "directive": null,
      "start": 170,
      "end": 206
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null,
        "start": 225,
        "end": 227
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "cb",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSFunctionType",
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
                    "start": 236,
                    "end": 240
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "exprName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "t1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 249,
                        "end": 251
                      },
                      "typeArguments": null,
                      "start": 242,
                      "end": 251
                    },
                    "start": 240,
                    "end": 251
                  },
                  "value": null,
                  "start": 233,
                  "end": 251
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 256,
                  "end": 260
                },
                "start": 253,
                "end": 260
              },
              "start": 232,
              "end": 260
            },
            "start": 230,
            "end": 260
          },
          "start": 228,
          "end": 260
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 263,
          "end": 267
        },
        "start": 261,
        "end": 267
      },
      "body": null,
      "expression": false,
      "start": 208,
      "end": 268
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
          "start": 270,
          "end": 272
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 274,
                "end": 275
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 277,
                "end": 278
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 280,
                "end": 281
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 286,
              "end": 288
            },
            "id": null,
            "generator": false,
            "start": 273,
            "end": 288
          }
        ],
        "optional": false,
        "start": 270,
        "end": 289
      },
      "directive": null,
      "start": 270,
      "end": 289
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
          "start": 290,
          "end": 292
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "RestElement",
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 297,
                  "end": 298
                },
                "optional": false,
                "typeAnnotation": null,
                "value": null,
                "start": 294,
                "end": 298
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 303,
              "end": 305
            },
            "id": null,
            "generator": false,
            "start": 293,
            "end": 305
          }
        ],
        "optional": false,
        "start": 290,
        "end": 306
      },
      "directive": null,
      "start": 290,
      "end": 306
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
          "start": 307,
          "end": 309
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 311,
                "end": 312
              },
              {
                "type": "RestElement",
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 317,
                  "end": 318
                },
                "optional": false,
                "typeAnnotation": null,
                "value": null,
                "start": 314,
                "end": 318
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 323,
              "end": 325
            },
            "id": null,
            "generator": false,
            "start": 310,
            "end": 325
          }
        ],
        "optional": false,
        "start": 307,
        "end": 326
      },
      "directive": null,
      "start": 307,
      "end": 326
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
          "start": 327,
          "end": 329
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 331,
                "end": 332
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 334,
                "end": 335
              },
              {
                "type": "RestElement",
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 340,
                  "end": 341
                },
                "optional": false,
                "typeAnnotation": null,
                "value": null,
                "start": 337,
                "end": 341
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 346,
              "end": 348
            },
            "id": null,
            "generator": false,
            "start": 330,
            "end": 348
          }
        ],
        "optional": false,
        "start": 327,
        "end": 349
      },
      "directive": null,
      "start": 327,
      "end": 349
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
          "start": 350,
          "end": 352
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 354,
                "end": 355
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 357,
                "end": 358
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 360,
                "end": 361
              },
              {
                "type": "RestElement",
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 366,
                  "end": 367
                },
                "optional": false,
                "typeAnnotation": null,
                "value": null,
                "start": 363,
                "end": 367
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 372,
              "end": 374
            },
            "id": null,
            "generator": false,
            "start": 353,
            "end": 374
          }
        ],
        "optional": false,
        "start": 350,
        "end": 375
      },
      "directive": null,
      "start": 350,
      "end": 375
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
            "name": "t2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 396,
                    "end": 402
                  },
                  {
                    "type": "TSBooleanKeyword",
                    "start": 404,
                    "end": 411
                  },
                  {
                    "type": "TSRestType",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSStringKeyword",
                        "start": 416,
                        "end": 422
                      },
                      "start": 416,
                      "end": 424
                    },
                    "start": 413,
                    "end": 424
                  }
                ],
                "start": 395,
                "end": 425
              },
              "start": 393,
              "end": 425
            },
            "start": 391,
            "end": 425
          },
          "init": null,
          "definite": false,
          "start": 391,
          "end": 425
        }
      ],
      "declare": true,
      "start": 377,
      "end": 426
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
              "start": 439,
              "end": 440
            },
            {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 442,
              "end": 443
            },
            {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 445,
              "end": 446
            }
          ],
          "returnType": null,
          "body": {
            "type": "BlockStatement",
            "body": [],
            "start": 447,
            "end": 449
          },
          "expression": false,
          "start": 429,
          "end": 449
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "SpreadElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "t2",
              "optional": false,
              "typeAnnotation": null,
              "start": 454,
              "end": 456
            },
            "start": 451,
            "end": 456
          }
        ],
        "optional": false,
        "start": 428,
        "end": 457
      },
      "directive": null,
      "start": 428,
      "end": 458
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
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 473,
                "end": 474
              },
              "optional": false,
              "typeAnnotation": null,
              "value": null,
              "start": 470,
              "end": 474
            }
          ],
          "returnType": null,
          "body": {
            "type": "BlockStatement",
            "body": [],
            "start": 475,
            "end": 477
          },
          "expression": false,
          "start": 460,
          "end": 477
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "SpreadElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "t2",
              "optional": false,
              "typeAnnotation": null,
              "start": 482,
              "end": 484
            },
            "start": 479,
            "end": 484
          }
        ],
        "optional": false,
        "start": 459,
        "end": 485
      },
      "directive": null,
      "start": 459,
      "end": 486
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
              "start": 498,
              "end": 499
            },
            {
              "type": "RestElement",
              "decorators": [],
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 504,
                "end": 505
              },
              "optional": false,
              "typeAnnotation": null,
              "value": null,
              "start": 501,
              "end": 505
            }
          ],
          "returnType": null,
          "body": {
            "type": "BlockStatement",
            "body": [],
            "start": 506,
            "end": 508
          },
          "expression": false,
          "start": 488,
          "end": 508
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "SpreadElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "t2",
              "optional": false,
              "typeAnnotation": null,
              "start": 513,
              "end": 515
            },
            "start": 510,
            "end": 515
          }
        ],
        "optional": false,
        "start": 487,
        "end": 516
      },
      "directive": null,
      "start": 487,
      "end": 517
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
              "start": 529,
              "end": 530
            },
            {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 532,
              "end": 533
            },
            {
              "type": "RestElement",
              "decorators": [],
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 538,
                "end": 539
              },
              "optional": false,
              "typeAnnotation": null,
              "value": null,
              "start": 535,
              "end": 539
            }
          ],
          "returnType": null,
          "body": {
            "type": "BlockStatement",
            "body": [],
            "start": 540,
            "end": 542
          },
          "expression": false,
          "start": 519,
          "end": 542
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "SpreadElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "t2",
              "optional": false,
              "typeAnnotation": null,
              "start": 547,
              "end": 549
            },
            "start": 544,
            "end": 549
          }
        ],
        "optional": false,
        "start": 518,
        "end": 550
      },
      "directive": null,
      "start": 518,
      "end": 551
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
              "start": 563,
              "end": 564
            },
            {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 566,
              "end": 567
            },
            {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 569,
              "end": 570
            },
            {
              "type": "RestElement",
              "decorators": [],
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 575,
                "end": 576
              },
              "optional": false,
              "typeAnnotation": null,
              "value": null,
              "start": 572,
              "end": 576
            }
          ],
          "returnType": null,
          "body": {
            "type": "BlockStatement",
            "body": [],
            "start": 577,
            "end": 579
          },
          "expression": false,
          "start": 553,
          "end": 579
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "SpreadElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "t2",
              "optional": false,
              "typeAnnotation": null,
              "start": 584,
              "end": 586
            },
            "start": 581,
            "end": 586
          }
        ],
        "optional": false,
        "start": 552,
        "end": 587
      },
      "directive": null,
      "start": 552,
      "end": 588
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null,
        "start": 607,
        "end": 609
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "cb",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSFunctionType",
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
                    "start": 618,
                    "end": 622
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "exprName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "t2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 631,
                        "end": 633
                      },
                      "typeArguments": null,
                      "start": 624,
                      "end": 633
                    },
                    "start": 622,
                    "end": 633
                  },
                  "value": null,
                  "start": 615,
                  "end": 633
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 638,
                  "end": 642
                },
                "start": 635,
                "end": 642
              },
              "start": 614,
              "end": 642
            },
            "start": 612,
            "end": 642
          },
          "start": 610,
          "end": 642
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 645,
          "end": 649
        },
        "start": 643,
        "end": 649
      },
      "body": null,
      "expression": false,
      "start": 590,
      "end": 650
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
          "start": 652,
          "end": 654
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 656,
                "end": 657
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 659,
                "end": 660
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 662,
                "end": 663
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 668,
              "end": 670
            },
            "id": null,
            "generator": false,
            "start": 655,
            "end": 670
          }
        ],
        "optional": false,
        "start": 652,
        "end": 671
      },
      "directive": null,
      "start": 652,
      "end": 671
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
          "start": 672,
          "end": 674
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "RestElement",
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 679,
                  "end": 680
                },
                "optional": false,
                "typeAnnotation": null,
                "value": null,
                "start": 676,
                "end": 680
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 685,
              "end": 687
            },
            "id": null,
            "generator": false,
            "start": 675,
            "end": 687
          }
        ],
        "optional": false,
        "start": 672,
        "end": 688
      },
      "directive": null,
      "start": 672,
      "end": 688
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
          "start": 689,
          "end": 691
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 693,
                "end": 694
              },
              {
                "type": "RestElement",
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 699,
                  "end": 700
                },
                "optional": false,
                "typeAnnotation": null,
                "value": null,
                "start": 696,
                "end": 700
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 705,
              "end": 707
            },
            "id": null,
            "generator": false,
            "start": 692,
            "end": 707
          }
        ],
        "optional": false,
        "start": 689,
        "end": 708
      },
      "directive": null,
      "start": 689,
      "end": 708
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
          "start": 709,
          "end": 711
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 713,
                "end": 714
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 716,
                "end": 717
              },
              {
                "type": "RestElement",
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 722,
                  "end": 723
                },
                "optional": false,
                "typeAnnotation": null,
                "value": null,
                "start": 719,
                "end": 723
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 728,
              "end": 730
            },
            "id": null,
            "generator": false,
            "start": 712,
            "end": 730
          }
        ],
        "optional": false,
        "start": 709,
        "end": 731
      },
      "directive": null,
      "start": 709,
      "end": 731
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
          "start": 732,
          "end": 734
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 736,
                "end": 737
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 739,
                "end": 740
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 742,
                "end": 743
              },
              {
                "type": "RestElement",
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 748,
                  "end": 749
                },
                "optional": false,
                "typeAnnotation": null,
                "value": null,
                "start": 745,
                "end": 749
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 754,
              "end": 756
            },
            "id": null,
            "generator": false,
            "start": 735,
            "end": 756
          }
        ],
        "optional": false,
        "start": 732,
        "end": 757
      },
      "directive": null,
      "start": 732,
      "end": 757
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
            "name": "t3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSBooleanKeyword",
                    "start": 778,
                    "end": 785
                  },
                  {
                    "type": "TSRestType",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSStringKeyword",
                        "start": 790,
                        "end": 796
                      },
                      "start": 790,
                      "end": 798
                    },
                    "start": 787,
                    "end": 798
                  }
                ],
                "start": 777,
                "end": 799
              },
              "start": 775,
              "end": 799
            },
            "start": 773,
            "end": 799
          },
          "init": null,
          "definite": false,
          "start": 773,
          "end": 799
        }
      ],
      "declare": true,
      "start": 759,
      "end": 800
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
              "start": 813,
              "end": 814
            },
            {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 816,
              "end": 817
            },
            {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 819,
              "end": 820
            }
          ],
          "returnType": null,
          "body": {
            "type": "BlockStatement",
            "body": [],
            "start": 821,
            "end": 823
          },
          "expression": false,
          "start": 803,
          "end": 823
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 825,
            "end": 826
          },
          {
            "type": "SpreadElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "t3",
              "optional": false,
              "typeAnnotation": null,
              "start": 831,
              "end": 833
            },
            "start": 828,
            "end": 833
          }
        ],
        "optional": false,
        "start": 802,
        "end": 834
      },
      "directive": null,
      "start": 802,
      "end": 835
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
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 850,
                "end": 851
              },
              "optional": false,
              "typeAnnotation": null,
              "value": null,
              "start": 847,
              "end": 851
            }
          ],
          "returnType": null,
          "body": {
            "type": "BlockStatement",
            "body": [],
            "start": 852,
            "end": 854
          },
          "expression": false,
          "start": 837,
          "end": 854
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 856,
            "end": 857
          },
          {
            "type": "SpreadElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "t3",
              "optional": false,
              "typeAnnotation": null,
              "start": 862,
              "end": 864
            },
            "start": 859,
            "end": 864
          }
        ],
        "optional": false,
        "start": 836,
        "end": 865
      },
      "directive": null,
      "start": 836,
      "end": 866
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
              "start": 878,
              "end": 879
            },
            {
              "type": "RestElement",
              "decorators": [],
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 884,
                "end": 885
              },
              "optional": false,
              "typeAnnotation": null,
              "value": null,
              "start": 881,
              "end": 885
            }
          ],
          "returnType": null,
          "body": {
            "type": "BlockStatement",
            "body": [],
            "start": 886,
            "end": 888
          },
          "expression": false,
          "start": 868,
          "end": 888
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 890,
            "end": 891
          },
          {
            "type": "SpreadElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "t3",
              "optional": false,
              "typeAnnotation": null,
              "start": 896,
              "end": 898
            },
            "start": 893,
            "end": 898
          }
        ],
        "optional": false,
        "start": 867,
        "end": 899
      },
      "directive": null,
      "start": 867,
      "end": 900
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
              "start": 912,
              "end": 913
            },
            {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 915,
              "end": 916
            },
            {
              "type": "RestElement",
              "decorators": [],
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 921,
                "end": 922
              },
              "optional": false,
              "typeAnnotation": null,
              "value": null,
              "start": 918,
              "end": 922
            }
          ],
          "returnType": null,
          "body": {
            "type": "BlockStatement",
            "body": [],
            "start": 923,
            "end": 925
          },
          "expression": false,
          "start": 902,
          "end": 925
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 927,
            "end": 928
          },
          {
            "type": "SpreadElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "t3",
              "optional": false,
              "typeAnnotation": null,
              "start": 933,
              "end": 935
            },
            "start": 930,
            "end": 935
          }
        ],
        "optional": false,
        "start": 901,
        "end": 936
      },
      "directive": null,
      "start": 901,
      "end": 937
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
              "start": 949,
              "end": 950
            },
            {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 952,
              "end": 953
            },
            {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 955,
              "end": 956
            },
            {
              "type": "RestElement",
              "decorators": [],
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 961,
                "end": 962
              },
              "optional": false,
              "typeAnnotation": null,
              "value": null,
              "start": 958,
              "end": 962
            }
          ],
          "returnType": null,
          "body": {
            "type": "BlockStatement",
            "body": [],
            "start": 963,
            "end": 965
          },
          "expression": false,
          "start": 939,
          "end": 965
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 967,
            "end": 968
          },
          {
            "type": "SpreadElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "t3",
              "optional": false,
              "typeAnnotation": null,
              "start": 973,
              "end": 975
            },
            "start": 970,
            "end": 975
          }
        ],
        "optional": false,
        "start": 938,
        "end": 976
      },
      "directive": null,
      "start": 938,
      "end": 977
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null,
        "start": 996,
        "end": 998
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "cb",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSFunctionType",
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
                      "type": "TSNumberKeyword",
                      "start": 1007,
                      "end": 1013
                    },
                    "start": 1005,
                    "end": 1013
                  },
                  "start": 1004,
                  "end": 1013
                },
                {
                  "type": "RestElement",
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "args",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1018,
                    "end": 1022
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "exprName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "t3",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1031,
                        "end": 1033
                      },
                      "typeArguments": null,
                      "start": 1024,
                      "end": 1033
                    },
                    "start": 1022,
                    "end": 1033
                  },
                  "value": null,
                  "start": 1015,
                  "end": 1033
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 1038,
                  "end": 1042
                },
                "start": 1035,
                "end": 1042
              },
              "start": 1003,
              "end": 1042
            },
            "start": 1001,
            "end": 1042
          },
          "start": 999,
          "end": 1042
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 1045,
          "end": 1049
        },
        "start": 1043,
        "end": 1049
      },
      "body": null,
      "expression": false,
      "start": 979,
      "end": 1050
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f3",
          "optional": false,
          "typeAnnotation": null,
          "start": 1052,
          "end": 1054
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 1056,
                "end": 1057
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 1059,
                "end": 1060
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 1062,
                "end": 1063
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 1068,
              "end": 1070
            },
            "id": null,
            "generator": false,
            "start": 1055,
            "end": 1070
          }
        ],
        "optional": false,
        "start": 1052,
        "end": 1071
      },
      "directive": null,
      "start": 1052,
      "end": 1071
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f3",
          "optional": false,
          "typeAnnotation": null,
          "start": 1072,
          "end": 1074
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "RestElement",
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1079,
                  "end": 1080
                },
                "optional": false,
                "typeAnnotation": null,
                "value": null,
                "start": 1076,
                "end": 1080
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 1085,
              "end": 1087
            },
            "id": null,
            "generator": false,
            "start": 1075,
            "end": 1087
          }
        ],
        "optional": false,
        "start": 1072,
        "end": 1088
      },
      "directive": null,
      "start": 1072,
      "end": 1088
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f3",
          "optional": false,
          "typeAnnotation": null,
          "start": 1089,
          "end": 1091
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 1093,
                "end": 1094
              },
              {
                "type": "RestElement",
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1099,
                  "end": 1100
                },
                "optional": false,
                "typeAnnotation": null,
                "value": null,
                "start": 1096,
                "end": 1100
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 1105,
              "end": 1107
            },
            "id": null,
            "generator": false,
            "start": 1092,
            "end": 1107
          }
        ],
        "optional": false,
        "start": 1089,
        "end": 1108
      },
      "directive": null,
      "start": 1089,
      "end": 1108
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f3",
          "optional": false,
          "typeAnnotation": null,
          "start": 1109,
          "end": 1111
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 1113,
                "end": 1114
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 1116,
                "end": 1117
              },
              {
                "type": "RestElement",
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1122,
                  "end": 1123
                },
                "optional": false,
                "typeAnnotation": null,
                "value": null,
                "start": 1119,
                "end": 1123
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 1128,
              "end": 1130
            },
            "id": null,
            "generator": false,
            "start": 1112,
            "end": 1130
          }
        ],
        "optional": false,
        "start": 1109,
        "end": 1131
      },
      "directive": null,
      "start": 1109,
      "end": 1131
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f3",
          "optional": false,
          "typeAnnotation": null,
          "start": 1132,
          "end": 1134
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 1136,
                "end": 1137
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 1139,
                "end": 1140
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 1142,
                "end": 1143
              },
              {
                "type": "RestElement",
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1148,
                  "end": 1149
                },
                "optional": false,
                "typeAnnotation": null,
                "value": null,
                "start": 1145,
                "end": 1149
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 1154,
              "end": 1156
            },
            "id": null,
            "generator": false,
            "start": 1135,
            "end": 1156
          }
        ],
        "optional": false,
        "start": 1132,
        "end": 1157
      },
      "directive": null,
      "start": 1132,
      "end": 1157
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f4",
        "optional": false,
        "typeAnnotation": null,
        "start": 1168,
        "end": 1170
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
              "start": 1171,
              "end": 1172
            },
            "constraint": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSAnyKeyword",
                "start": 1181,
                "end": 1184
              },
              "start": 1181,
              "end": 1186
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1171,
            "end": 1186
          }
        ],
        "start": 1170,
        "end": 1187
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
                "start": 1191,
                "end": 1192
              },
              "typeArguments": null,
              "start": 1191,
              "end": 1192
            },
            "start": 1189,
            "end": 1192
          },
          "start": 1188,
          "end": 1192
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
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1213,
                      "end": 1214
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "value": null,
                    "start": 1210,
                    "end": 1214
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 1215,
                  "end": 1217
                },
                "expression": false,
                "start": 1201,
                "end": 1217
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "SpreadElement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1222,
                    "end": 1223
                  },
                  "start": 1219,
                  "end": 1223
                }
              ],
              "optional": false,
              "start": 1200,
              "end": 1224
            },
            "directive": null,
            "start": 1200,
            "end": 1225
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
                    "start": 1240,
                    "end": 1241
                  },
                  {
                    "type": "RestElement",
                    "decorators": [],
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1246,
                      "end": 1247
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "value": null,
                    "start": 1243,
                    "end": 1247
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 1248,
                  "end": 1250
                },
                "expression": false,
                "start": 1231,
                "end": 1250
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 1252,
                  "end": 1253
                },
                {
                  "type": "SpreadElement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1258,
                    "end": 1259
                  },
                  "start": 1255,
                  "end": 1259
                }
              ],
              "optional": false,
              "start": 1230,
              "end": 1260
            },
            "directive": null,
            "start": 1230,
            "end": 1261
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
                    "start": 1276,
                    "end": 1277
                  },
                  {
                    "type": "RestElement",
                    "decorators": [],
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1282,
                      "end": 1283
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "value": null,
                    "start": 1279,
                    "end": 1283
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 1284,
                  "end": 1286
                },
                "expression": false,
                "start": 1267,
                "end": 1286
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 1288,
                  "end": 1289
                },
                {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 1291,
                  "end": 1292
                },
                {
                  "type": "SpreadElement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1297,
                    "end": 1298
                  },
                  "start": 1294,
                  "end": 1298
                }
              ],
              "optional": false,
              "start": 1266,
              "end": 1299
            },
            "directive": null,
            "start": 1266,
            "end": 1300
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null,
              "start": 1314,
              "end": 1315
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "cb",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSFunctionType",
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
                            "type": "TSNumberKeyword",
                            "start": 1324,
                            "end": 1330
                          },
                          "start": 1322,
                          "end": 1330
                        },
                        "start": 1321,
                        "end": 1330
                      },
                      {
                        "type": "RestElement",
                        "decorators": [],
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "args",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1335,
                          "end": 1339
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
                              "start": 1341,
                              "end": 1342
                            },
                            "typeArguments": null,
                            "start": 1341,
                            "end": 1342
                          },
                          "start": 1339,
                          "end": 1342
                        },
                        "value": null,
                        "start": 1332,
                        "end": 1342
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 1347,
                        "end": 1351
                      },
                      "start": 1344,
                      "end": 1351
                    },
                    "start": 1320,
                    "end": 1351
                  },
                  "start": 1318,
                  "end": 1351
                },
                "start": 1316,
                "end": 1351
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 1353,
              "end": 1355
            },
            "expression": false,
            "start": 1305,
            "end": 1355
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null,
                "start": 1360,
                "end": 1361
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "ArrowFunctionExpression",
                  "expression": false,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "RestElement",
                      "decorators": [],
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1366,
                        "end": 1367
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "value": null,
                      "start": 1363,
                      "end": 1367
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "start": 1372,
                    "end": 1374
                  },
                  "id": null,
                  "generator": false,
                  "start": 1362,
                  "end": 1374
                }
              ],
              "optional": false,
              "start": 1360,
              "end": 1375
            },
            "directive": null,
            "start": 1360,
            "end": 1376
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null,
                "start": 1381,
                "end": 1382
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "ArrowFunctionExpression",
                  "expression": false,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1384,
                      "end": 1385
                    },
                    {
                      "type": "RestElement",
                      "decorators": [],
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1390,
                        "end": 1391
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "value": null,
                      "start": 1387,
                      "end": 1391
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "start": 1396,
                    "end": 1398
                  },
                  "id": null,
                  "generator": false,
                  "start": 1383,
                  "end": 1398
                }
              ],
              "optional": false,
              "start": 1381,
              "end": 1399
            },
            "directive": null,
            "start": 1381,
            "end": 1400
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null,
                "start": 1405,
                "end": 1406
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "ArrowFunctionExpression",
                  "expression": false,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1408,
                      "end": 1409
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1411,
                      "end": 1412
                    },
                    {
                      "type": "RestElement",
                      "decorators": [],
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1417,
                        "end": 1418
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "value": null,
                      "start": 1414,
                      "end": 1418
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "start": 1423,
                    "end": 1425
                  },
                  "id": null,
                  "generator": false,
                  "start": 1407,
                  "end": 1425
                }
              ],
              "optional": false,
              "start": 1405,
              "end": 1426
            },
            "directive": null,
            "start": 1405,
            "end": 1427
          }
        ],
        "start": 1194,
        "end": 1429
      },
      "expression": false,
      "start": 1159,
      "end": 1429
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f5",
        "optional": false,
        "typeAnnotation": null,
        "start": 1448,
        "end": 1450
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
              "start": 1451,
              "end": 1452
            },
            "constraint": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSAnyKeyword",
                "start": 1461,
                "end": 1464
              },
              "start": 1461,
              "end": 1466
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1451,
            "end": 1466
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 1468,
              "end": 1469
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1468,
            "end": 1469
          }
        ],
        "start": 1450,
        "end": 1470
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSFunctionType",
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
                    "start": 1478,
                    "end": 1482
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
                        "start": 1484,
                        "end": 1485
                      },
                      "typeArguments": null,
                      "start": 1484,
                      "end": 1485
                    },
                    "start": 1482,
                    "end": 1485
                  },
                  "value": null,
                  "start": 1475,
                  "end": 1485
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1490,
                    "end": 1491
                  },
                  "typeArguments": null,
                  "start": 1490,
                  "end": 1491
                },
                "start": 1487,
                "end": 1491
              },
              "start": 1474,
              "end": 1491
            },
            "start": 1472,
            "end": 1491
          },
          "start": 1471,
          "end": 1491
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSFunctionType",
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
                "start": 1498,
                "end": 1502
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
                    "start": 1504,
                    "end": 1505
                  },
                  "typeArguments": null,
                  "start": 1504,
                  "end": 1505
                },
                "start": 1502,
                "end": 1505
              },
              "value": null,
              "start": 1495,
              "end": 1505
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 1510,
                "end": 1511
              },
              "typeArguments": null,
              "start": 1510,
              "end": 1511
            },
            "start": 1507,
            "end": 1511
          },
          "start": 1494,
          "end": 1511
        },
        "start": 1492,
        "end": 1511
      },
      "body": null,
      "expression": false,
      "start": 1431,
      "end": 1512
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
            "name": "g0",
            "optional": false,
            "typeAnnotation": null,
            "start": 1518,
            "end": 1520
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f5",
              "optional": false,
              "typeAnnotation": null,
              "start": 1523,
              "end": 1525
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "value": "hello",
                  "raw": "\"hello\"",
                  "start": 1532,
                  "end": 1539
                },
                "id": null,
                "generator": false,
                "start": 1526,
                "end": 1539
              }
            ],
            "optional": false,
            "start": 1523,
            "end": 1540
          },
          "definite": false,
          "start": 1518,
          "end": 1540
        }
      ],
      "declare": false,
      "start": 1514,
      "end": 1541
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
            "name": "g1",
            "optional": false,
            "typeAnnotation": null,
            "start": 1546,
            "end": 1548
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f5",
              "optional": false,
              "typeAnnotation": null,
              "start": 1551,
              "end": 1553
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1555,
                    "end": 1556
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1558,
                    "end": 1559
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "value": 42,
                  "raw": "42",
                  "start": 1564,
                  "end": 1566
                },
                "id": null,
                "generator": false,
                "start": 1554,
                "end": 1566
              }
            ],
            "optional": false,
            "start": 1551,
            "end": 1567
          },
          "definite": false,
          "start": 1546,
          "end": 1567
        }
      ],
      "declare": false,
      "start": 1542,
      "end": 1568
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
            "name": "g2",
            "optional": false,
            "typeAnnotation": null,
            "start": 1573,
            "end": 1575
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f5",
              "optional": false,
              "typeAnnotation": null,
              "start": 1578,
              "end": 1580
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
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
                        "type": "TSNumberKeyword",
                        "start": 1585,
                        "end": 1591
                      },
                      "start": 1583,
                      "end": 1591
                    },
                    "start": 1582,
                    "end": 1591
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1593,
                    "end": 1594
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "value": 42,
                  "raw": "42",
                  "start": 1599,
                  "end": 1601
                },
                "id": null,
                "generator": false,
                "start": 1581,
                "end": 1601
              }
            ],
            "optional": false,
            "start": 1578,
            "end": 1602
          },
          "definite": false,
          "start": 1573,
          "end": 1602
        }
      ],
      "declare": false,
      "start": 1569,
      "end": 1603
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
            "name": "g3",
            "optional": false,
            "typeAnnotation": null,
            "start": 1608,
            "end": 1610
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f5",
              "optional": false,
              "typeAnnotation": null,
              "start": 1613,
              "end": 1615
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
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
                        "type": "TSNumberKeyword",
                        "start": 1620,
                        "end": 1626
                      },
                      "start": 1618,
                      "end": 1626
                    },
                    "start": 1617,
                    "end": 1626
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 1631,
                        "end": 1637
                      },
                      "start": 1629,
                      "end": 1637
                    },
                    "start": 1628,
                    "end": 1637
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1642,
                    "end": 1643
                  },
                  "operator": "+",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1646,
                    "end": 1647
                  },
                  "start": 1642,
                  "end": 1647
                },
                "id": null,
                "generator": false,
                "start": 1616,
                "end": 1647
              }
            ],
            "optional": false,
            "start": 1613,
            "end": 1648
          },
          "definite": false,
          "start": 1608,
          "end": 1648
        }
      ],
      "declare": false,
      "start": 1604,
      "end": 1649
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
            "name": "g4",
            "optional": false,
            "typeAnnotation": null,
            "start": 1654,
            "end": 1656
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f5",
              "optional": false,
              "typeAnnotation": null,
              "start": 1659,
              "end": 1661
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
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
                      "start": 1666,
                      "end": 1670
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "value": null,
                    "start": 1663,
                    "end": 1670
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "value": true,
                  "raw": "true",
                  "start": 1675,
                  "end": 1679
                },
                "id": null,
                "generator": false,
                "start": 1662,
                "end": 1679
              }
            ],
            "optional": false,
            "start": 1659,
            "end": 1680
          },
          "definite": false,
          "start": 1654,
          "end": 1680
        }
      ],
      "declare": false,
      "start": 1650,
      "end": 1681
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "pipe",
        "optional": false,
        "typeAnnotation": null,
        "start": 1700,
        "end": 1704
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
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 1705,
              "end": 1706
            },
            "constraint": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSAnyKeyword",
                "start": 1715,
                "end": 1718
              },
              "start": 1715,
              "end": 1720
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1705,
            "end": 1720
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 1722,
              "end": 1723
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1722,
            "end": 1723
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 1725,
              "end": 1726
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1725,
            "end": 1726
          }
        ],
        "start": 1704,
        "end": 1727
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSFunctionType",
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
                    "start": 1735,
                    "end": 1739
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1741,
                        "end": 1742
                      },
                      "typeArguments": null,
                      "start": 1741,
                      "end": 1742
                    },
                    "start": 1739,
                    "end": 1742
                  },
                  "value": null,
                  "start": 1732,
                  "end": 1742
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1747,
                    "end": 1748
                  },
                  "typeArguments": null,
                  "start": 1747,
                  "end": 1748
                },
                "start": 1744,
                "end": 1748
              },
              "start": 1731,
              "end": 1748
            },
            "start": 1729,
            "end": 1748
          },
          "start": 1728,
          "end": 1748
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "g",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSFunctionType",
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
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "B",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1757,
                        "end": 1758
                      },
                      "typeArguments": null,
                      "start": 1757,
                      "end": 1758
                    },
                    "start": 1755,
                    "end": 1758
                  },
                  "start": 1754,
                  "end": 1758
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1763,
                    "end": 1764
                  },
                  "typeArguments": null,
                  "start": 1763,
                  "end": 1764
                },
                "start": 1760,
                "end": 1764
              },
              "start": 1753,
              "end": 1764
            },
            "start": 1751,
            "end": 1764
          },
          "start": 1750,
          "end": 1764
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSFunctionType",
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
                "start": 1771,
                "end": 1775
              },
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1777,
                    "end": 1778
                  },
                  "typeArguments": null,
                  "start": 1777,
                  "end": 1778
                },
                "start": 1775,
                "end": 1778
              },
              "value": null,
              "start": 1768,
              "end": 1778
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 1783,
                "end": 1784
              },
              "typeArguments": null,
              "start": 1783,
              "end": 1784
            },
            "start": 1780,
            "end": 1784
          },
          "start": 1767,
          "end": 1784
        },
        "start": 1765,
        "end": 1784
      },
      "body": null,
      "expression": false,
      "start": 1683,
      "end": 1785
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
            "name": "g5",
            "optional": false,
            "typeAnnotation": null,
            "start": 1791,
            "end": 1793
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "pipe",
              "optional": false,
              "typeAnnotation": null,
              "start": 1796,
              "end": 1800
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "value": true,
                  "raw": "true",
                  "start": 1807,
                  "end": 1811
                },
                "id": null,
                "generator": false,
                "start": 1801,
                "end": 1811
              },
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1813,
                    "end": 1814
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "value": 42,
                  "raw": "42",
                  "start": 1818,
                  "end": 1820
                },
                "id": null,
                "generator": false,
                "start": 1813,
                "end": 1820
              }
            ],
            "optional": false,
            "start": 1796,
            "end": 1821
          },
          "definite": false,
          "start": 1791,
          "end": 1821
        }
      ],
      "declare": false,
      "start": 1787,
      "end": 1822
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
            "name": "g6",
            "optional": false,
            "typeAnnotation": null,
            "start": 1827,
            "end": 1829
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "pipe",
              "optional": false,
              "typeAnnotation": null,
              "start": 1832,
              "end": 1836
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1837,
                    "end": 1838
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "value": "hello",
                  "raw": "\"hello\"",
                  "start": 1842,
                  "end": 1849
                },
                "id": null,
                "generator": false,
                "start": 1837,
                "end": 1849
              },
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "s",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1851,
                    "end": 1852
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "s",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1856,
                    "end": 1857
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "length",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1858,
                    "end": 1864
                  },
                  "optional": false,
                  "computed": false,
                  "start": 1856,
                  "end": 1864
                },
                "id": null,
                "generator": false,
                "start": 1851,
                "end": 1864
              }
            ],
            "optional": false,
            "start": 1832,
            "end": 1865
          },
          "definite": false,
          "start": 1827,
          "end": 1865
        }
      ],
      "declare": false,
      "start": 1823,
      "end": 1866
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
            "name": "g7",
            "optional": false,
            "typeAnnotation": null,
            "start": 1871,
            "end": 1873
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "pipe",
              "optional": false,
              "typeAnnotation": null,
              "start": 1876,
              "end": 1880
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1882,
                    "end": 1883
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1885,
                    "end": 1886
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "value": 42,
                  "raw": "42",
                  "start": 1891,
                  "end": 1893
                },
                "id": null,
                "generator": false,
                "start": 1881,
                "end": 1893
              },
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1895,
                    "end": 1896
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Literal",
                    "value": "",
                    "raw": "\"\"",
                    "start": 1900,
                    "end": 1902
                  },
                  "operator": "+",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1905,
                    "end": 1906
                  },
                  "start": 1900,
                  "end": 1906
                },
                "id": null,
                "generator": false,
                "start": 1895,
                "end": 1906
              }
            ],
            "optional": false,
            "start": 1876,
            "end": 1907
          },
          "definite": false,
          "start": 1871,
          "end": 1907
        }
      ],
      "declare": false,
      "start": 1867,
      "end": 1908
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
            "name": "g8",
            "optional": false,
            "typeAnnotation": null,
            "start": 1913,
            "end": 1915
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "pipe",
              "optional": false,
              "typeAnnotation": null,
              "start": 1918,
              "end": 1922
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
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
                        "type": "TSNumberKeyword",
                        "start": 1927,
                        "end": 1933
                      },
                      "start": 1925,
                      "end": 1933
                    },
                    "start": 1924,
                    "end": 1933
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 1938,
                        "end": 1944
                      },
                      "start": 1936,
                      "end": 1944
                    },
                    "start": 1935,
                    "end": 1944
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "value": 42,
                  "raw": "42",
                  "start": 1949,
                  "end": 1951
                },
                "id": null,
                "generator": false,
                "start": 1923,
                "end": 1951
              },
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1953,
                    "end": 1954
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Literal",
                    "value": "",
                    "raw": "\"\"",
                    "start": 1958,
                    "end": 1960
                  },
                  "operator": "+",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1963,
                    "end": 1964
                  },
                  "start": 1958,
                  "end": 1964
                },
                "id": null,
                "generator": false,
                "start": 1953,
                "end": 1964
              }
            ],
            "optional": false,
            "start": 1918,
            "end": 1965
          },
          "definite": false,
          "start": 1913,
          "end": 1965
        }
      ],
      "declare": false,
      "start": 1909,
      "end": 1966
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
            "name": "tuple",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 2010,
                    "end": 2016
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 2018,
                    "end": 2024
                  }
                ],
                "start": 2009,
                "end": 2025
              },
              "start": 2007,
              "end": 2025
            },
            "start": 2002,
            "end": 2025
          },
          "init": null,
          "definite": false,
          "start": 2002,
          "end": 2025
        }
      ],
      "declare": true,
      "start": 1990,
      "end": 2026
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "FunctionExpression",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 2037,
            "end": 2040
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
              "typeAnnotation": null,
              "start": 2041,
              "end": 2042
            },
            {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 2044,
              "end": 2045
            }
          ],
          "returnType": null,
          "body": {
            "type": "BlockStatement",
            "body": [],
            "start": 2046,
            "end": 2048
          },
          "expression": false,
          "start": 2028,
          "end": 2048
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "SpreadElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "tuple",
              "optional": false,
              "typeAnnotation": null,
              "start": 2052,
              "end": 2057
            },
            "start": 2049,
            "end": 2057
          }
        ],
        "optional": false,
        "start": 2028,
        "end": 2058
      },
      "directive": null,
      "start": 2027,
      "end": 2060
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "take",
        "optional": false,
        "typeAnnotation": null,
        "start": 2101,
        "end": 2105
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "cb",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSFunctionType",
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
                      "type": "TSNumberKeyword",
                      "start": 2114,
                      "end": 2120
                    },
                    "start": 2112,
                    "end": 2120
                  },
                  "start": 2111,
                  "end": 2120
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
                      "start": 2125,
                      "end": 2131
                    },
                    "start": 2123,
                    "end": 2131
                  },
                  "start": 2122,
                  "end": 2131
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 2136,
                  "end": 2140
                },
                "start": 2133,
                "end": 2140
              },
              "start": 2110,
              "end": 2140
            },
            "start": 2108,
            "end": 2140
          },
          "start": 2106,
          "end": 2140
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 2143,
          "end": 2147
        },
        "start": 2141,
        "end": 2147
      },
      "body": null,
      "expression": false,
      "start": 2084,
      "end": 2148
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "FunctionExpression",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 2160,
            "end": 2163
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
                "name": "rest",
                "optional": false,
                "typeAnnotation": null,
                "start": 2167,
                "end": 2171
              },
              "optional": false,
              "typeAnnotation": null,
              "value": null,
              "start": 2164,
              "end": 2171
            }
          ],
          "returnType": null,
          "body": {
            "type": "BlockStatement",
            "body": [],
            "start": 2172,
            "end": 2174
          },
          "expression": false,
          "start": 2151,
          "end": 2174
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 2175,
            "end": 2176
          },
          {
            "type": "Literal",
            "value": "",
            "raw": "''",
            "start": 2178,
            "end": 2180
          }
        ],
        "optional": false,
        "start": 2151,
        "end": 2181
      },
      "directive": null,
      "start": 2150,
      "end": 2183
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "take",
          "optional": false,
          "typeAnnotation": null,
          "start": 2184,
          "end": 2188
        },
        "typeArguments": null,
        "arguments": [
          {
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
                  "start": 2201,
                  "end": 2205
                },
                "optional": false,
                "typeAnnotation": null,
                "value": null,
                "start": 2198,
                "end": 2205
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 2206,
              "end": 2208
            },
            "expression": false,
            "start": 2189,
            "end": 2208
          }
        ],
        "optional": false,
        "start": 2184,
        "end": 2209
      },
      "directive": null,
      "start": 2184,
      "end": 2210
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ArgsUnion",
        "optional": false,
        "typeAnnotation": null,
        "start": 2239,
        "end": 2248
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTupleType",
            "elementTypes": [
              {
                "type": "TSNumberKeyword",
                "start": 2252,
                "end": 2258
              },
              {
                "type": "TSStringKeyword",
                "start": 2260,
                "end": 2266
              }
            ],
            "start": 2251,
            "end": 2267
          },
          {
            "type": "TSTupleType",
            "elementTypes": [
              {
                "type": "TSNumberKeyword",
                "start": 2271,
                "end": 2277
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Error",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2279,
                  "end": 2284
                },
                "typeArguments": null,
                "start": 2279,
                "end": 2284
              }
            ],
            "start": 2270,
            "end": 2285
          }
        ],
        "start": 2251,
        "end": 2285
      },
      "declare": false,
      "start": 2234,
      "end": 2286
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TupleUnionFunc",
        "optional": false,
        "typeAnnotation": null,
        "start": 2292,
        "end": 2306
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSFunctionType",
        "typeParameters": null,
        "params": [
          {
            "type": "RestElement",
            "decorators": [],
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "params",
              "optional": false,
              "typeAnnotation": null,
              "start": 2313,
              "end": 2319
            },
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ArgsUnion",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2321,
                  "end": 2330
                },
                "typeArguments": null,
                "start": 2321,
                "end": 2330
              },
              "start": 2319,
              "end": 2330
            },
            "value": null,
            "start": 2310,
            "end": 2330
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSNumberKeyword",
            "start": 2335,
            "end": 2341
          },
          "start": 2332,
          "end": 2341
        },
        "start": 2309,
        "end": 2341
      },
      "declare": false,
      "start": 2287,
      "end": 2342
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
            "name": "funcUnionTupleNoRest",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TupleUnionFunc",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2372,
                  "end": 2386
                },
                "typeArguments": null,
                "start": 2372,
                "end": 2386
              },
              "start": 2370,
              "end": 2386
            },
            "start": 2350,
            "end": 2386
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "num",
                "optional": false,
                "typeAnnotation": null,
                "start": 2390,
                "end": 2393
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "strOrErr",
                "optional": false,
                "typeAnnotation": null,
                "start": 2395,
                "end": 2403
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "num",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2419,
                    "end": 2422
                  },
                  "start": 2412,
                  "end": 2423
                }
              ],
              "start": 2408,
              "end": 2425
            },
            "id": null,
            "generator": false,
            "start": 2389,
            "end": 2425
          },
          "definite": false,
          "start": 2350,
          "end": 2425
        }
      ],
      "declare": false,
      "start": 2344,
      "end": 2426
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
            "name": "funcUnionTupleRest",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TupleUnionFunc",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2454,
                  "end": 2468
                },
                "typeArguments": null,
                "start": 2454,
                "end": 2468
              },
              "start": 2452,
              "end": 2468
            },
            "start": 2434,
            "end": 2468
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "RestElement",
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "params",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2475,
                  "end": 2481
                },
                "optional": false,
                "typeAnnotation": null,
                "value": null,
                "start": 2472,
                "end": 2481
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
                        "type": "ArrayPattern",
                        "decorators": [],
                        "elements": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "num",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2497,
                            "end": 2500
                          },
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "strOrErr",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2502,
                            "end": 2510
                          }
                        ],
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2496,
                        "end": 2511
                      },
                      "init": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "params",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2514,
                        "end": 2520
                      },
                      "definite": false,
                      "start": 2496,
                      "end": 2520
                    }
                  ],
                  "declare": false,
                  "start": 2490,
                  "end": 2521
                },
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "num",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2531,
                    "end": 2534
                  },
                  "start": 2524,
                  "end": 2535
                }
              ],
              "start": 2486,
              "end": 2537
            },
            "id": null,
            "generator": false,
            "start": 2471,
            "end": 2537
          },
          "definite": false,
          "start": 2434,
          "end": 2537
        }
      ],
      "declare": false,
      "start": 2428,
      "end": 2538
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 2538
}
```
