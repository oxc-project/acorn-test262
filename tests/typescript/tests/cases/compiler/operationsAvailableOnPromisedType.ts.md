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
        "name": "fn",
        "optional": false,
        "typeAnnotation": null,
        "start": 15,
        "end": 17
      },
      "generator": false,
      "async": true,
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
              "type": "TSNumberKeyword",
              "start": 26,
              "end": 32
            },
            "start": 24,
            "end": 32
          },
          "start": 23,
          "end": 32
        },
        {
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
                "name": "Promise",
                "optional": false,
                "typeAnnotation": null,
                "start": 41,
                "end": 48
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 49,
                    "end": 55
                  }
                ],
                "start": 48,
                "end": 56
              },
              "start": 41,
              "end": 56
            },
            "start": 39,
            "end": 56
          },
          "start": 38,
          "end": 56
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Promise",
                "optional": false,
                "typeAnnotation": null,
                "start": 65,
                "end": 72
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSStringKeyword",
                      "start": 73,
                      "end": 79
                    },
                    "start": 73,
                    "end": 81
                  }
                ],
                "start": 72,
                "end": 82
              },
              "start": 65,
              "end": 82
            },
            "start": 63,
            "end": 82
          },
          "start": 62,
          "end": 82
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "d",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Promise",
                "optional": false,
                "typeAnnotation": null,
                "start": 91,
                "end": 98
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
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
                          "name": "prop",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 101,
                          "end": 105
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 107,
                            "end": 113
                          },
                          "start": 105,
                          "end": 113
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 101,
                        "end": 113
                      }
                    ],
                    "start": 99,
                    "end": 115
                  }
                ],
                "start": 98,
                "end": 116
              },
              "start": 91,
              "end": 116
            },
            "start": 89,
            "end": 116
          },
          "start": 88,
          "end": 116
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "e",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Promise",
                "optional": false,
                "typeAnnotation": null,
                "start": 125,
                "end": 132
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSFunctionType",
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 139,
                        "end": 143
                      },
                      "start": 136,
                      "end": 143
                    },
                    "start": 133,
                    "end": 143
                  }
                ],
                "start": 132,
                "end": 144
              },
              "start": 125,
              "end": 144
            },
            "start": 123,
            "end": 144
          },
          "start": 122,
          "end": 144
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Promise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 153,
                    "end": 160
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSFunctionType",
                        "typeParameters": null,
                        "params": [],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSVoidKeyword",
                            "start": 167,
                            "end": 171
                          },
                          "start": 164,
                          "end": 171
                        },
                        "start": 161,
                        "end": 171
                      }
                    ],
                    "start": 160,
                    "end": 172
                  },
                  "start": 153,
                  "end": 172
                },
                {
                  "type": "TSFunctionType",
                  "typeParameters": null,
                  "params": [],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSVoidKeyword",
                      "start": 182,
                      "end": 186
                    },
                    "start": 179,
                    "end": 186
                  },
                  "start": 176,
                  "end": 186
                }
              ],
              "start": 153,
              "end": 187
            },
            "start": 151,
            "end": 187
          },
          "start": 150,
          "end": 187
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "g",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Promise",
                "optional": false,
                "typeAnnotation": null,
                "start": 196,
                "end": 203
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSConstructSignatureDeclaration",
                        "typeParameters": null,
                        "params": [],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 213,
                            "end": 216
                          },
                          "start": 211,
                          "end": 216
                        },
                        "start": 206,
                        "end": 216
                      }
                    ],
                    "start": 204,
                    "end": 218
                  }
                ],
                "start": 203,
                "end": 219
              },
              "start": 196,
              "end": 219
            },
            "start": 194,
            "end": 219
          },
          "start": 193,
          "end": 219
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 246,
                "end": 247
              },
              "operator": "|",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 250,
                "end": 251
              },
              "start": 246,
              "end": 251
            },
            "directive": null,
            "start": 246,
            "end": 252
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 257,
                "end": 258
              },
              "operator": "|",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 261,
                "end": 262
              },
              "start": 257,
              "end": 262
            },
            "directive": null,
            "start": 257,
            "end": 263
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 268,
                "end": 269
              },
              "operator": "+",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 272,
                "end": 273
              },
              "start": 268,
              "end": 273
            },
            "directive": null,
            "start": 268,
            "end": 274
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 279,
                "end": 280
              },
              "operator": ">",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 283,
                "end": 284
              },
              "start": 279,
              "end": 284
            },
            "directive": null,
            "start": 279,
            "end": 285
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "UpdateExpression",
              "operator": "++",
              "prefix": false,
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 290,
                "end": 291
              },
              "start": 290,
              "end": 293
            },
            "directive": null,
            "start": 290,
            "end": 294
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "UpdateExpression",
              "operator": "--",
              "prefix": true,
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 301,
                "end": 302
              },
              "start": 299,
              "end": 302
            },
            "directive": null,
            "start": 299,
            "end": 303
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 308,
                "end": 309
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 314,
                "end": 315
              },
              "start": 308,
              "end": 315
            },
            "directive": null,
            "start": 308,
            "end": 316
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "SpreadElement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 325,
                    "end": 326
                  },
                  "start": 322,
                  "end": 326
                }
              ],
              "start": 321,
              "end": 327
            },
            "directive": null,
            "start": 321,
            "end": 328
          },
          {
            "type": "ForOfStatement",
            "await": false,
            "left": {
              "type": "VariableDeclaration",
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "s",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 344,
                    "end": 345
                  },
                  "init": null,
                  "definite": false,
                  "start": 344,
                  "end": 345
                }
              ],
              "declare": false,
              "start": 338,
              "end": 345
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 349,
              "end": 350
            },
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
                      "name": "fn",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 362,
                      "end": 364
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 365,
                        "end": 366
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 368,
                        "end": 369
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 371,
                        "end": 372
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "d",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 374,
                        "end": 375
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "e",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 377,
                        "end": 378
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "f",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 380,
                        "end": 381
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "g",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 383,
                        "end": 384
                      }
                    ],
                    "optional": false,
                    "start": 362,
                    "end": 385
                  },
                  "directive": null,
                  "start": 362,
                  "end": 386
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "d",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 395,
                      "end": 396
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "prop",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 397,
                      "end": 401
                    },
                    "optional": false,
                    "computed": false,
                    "start": 395,
                    "end": 401
                  },
                  "directive": null,
                  "start": 395,
                  "end": 402
                }
              ],
              "start": 352,
              "end": 408
            },
            "start": 333,
            "end": 408
          },
          {
            "type": "ForOfStatement",
            "await": true,
            "left": {
              "type": "VariableDeclaration",
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "s",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 430,
                    "end": 431
                  },
                  "init": null,
                  "definite": false,
                  "start": 430,
                  "end": 431
                }
              ],
              "declare": false,
              "start": 424,
              "end": 431
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 435,
              "end": 436
            },
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 438,
              "end": 440
            },
            "start": 413,
            "end": 440
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null,
                "start": 445,
                "end": 446
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 445,
              "end": 448
            },
            "directive": null,
            "start": 445,
            "end": 449
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
                "start": 454,
                "end": 455
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 454,
              "end": 457
            },
            "directive": null,
            "start": 454,
            "end": 458
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "NewExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "g",
                "optional": false,
                "typeAnnotation": null,
                "start": 467,
                "end": 468
              },
              "typeArguments": null,
              "arguments": [],
              "start": 463,
              "end": 470
            },
            "directive": null,
            "start": 463,
            "end": 471
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 476,
                "end": 477
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 476,
              "end": 479
            },
            "directive": null,
            "start": 476,
            "end": 480
          }
        ],
        "start": 222,
        "end": 482
      },
      "expression": false,
      "start": 0,
      "end": 482
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 482
}
```
