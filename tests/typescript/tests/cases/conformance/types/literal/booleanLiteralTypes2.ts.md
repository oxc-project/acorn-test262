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
        "name": "A1",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 7
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 10,
              "end": 14
            },
            "start": 10,
            "end": 14
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": false,
              "raw": "false",
              "start": 17,
              "end": 22
            },
            "start": 17,
            "end": 22
          }
        ],
        "start": 10,
        "end": 22
      },
      "declare": false,
      "start": 0,
      "end": 23
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A2",
        "optional": false,
        "typeAnnotation": null,
        "start": 29,
        "end": 31
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": false,
              "raw": "false",
              "start": 34,
              "end": 39
            },
            "start": 34,
            "end": 39
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 42,
              "end": 46
            },
            "start": 42,
            "end": 46
          }
        ],
        "start": 34,
        "end": 46
      },
      "declare": false,
      "start": 24,
      "end": 47
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null,
        "start": 58,
        "end": 60
      },
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
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "A1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 76,
                        "end": 78
                      },
                      "typeArguments": null,
                      "start": 76,
                      "end": 78
                    },
                    "start": 74,
                    "end": 78
                  },
                  "start": 73,
                  "end": 78
                },
                "init": null,
                "definite": false,
                "start": 73,
                "end": 78
              }
            ],
            "declare": false,
            "start": 69,
            "end": 79
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
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "A2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 91,
                        "end": 93
                      },
                      "typeArguments": null,
                      "start": 91,
                      "end": 93
                    },
                    "start": 89,
                    "end": 93
                  },
                  "start": 88,
                  "end": 93
                },
                "init": null,
                "definite": false,
                "start": 88,
                "end": 93
              }
            ],
            "declare": false,
            "start": 84,
            "end": 94
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
                  "name": "a",
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
                            "value": true,
                            "raw": "true",
                            "start": 106,
                            "end": 110
                          },
                          "start": 106,
                          "end": 110
                        },
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": false,
                            "raw": "false",
                            "start": 113,
                            "end": 118
                          },
                          "start": 113,
                          "end": 118
                        }
                      ],
                      "start": 106,
                      "end": 118
                    },
                    "start": 104,
                    "end": 118
                  },
                  "start": 103,
                  "end": 118
                },
                "init": null,
                "definite": false,
                "start": 103,
                "end": 118
              }
            ],
            "declare": false,
            "start": 99,
            "end": 119
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
                  "name": "a",
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
                            "value": false,
                            "raw": "false",
                            "start": 131,
                            "end": 136
                          },
                          "start": 131,
                          "end": 136
                        },
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": true,
                            "raw": "true",
                            "start": 139,
                            "end": 143
                          },
                          "start": 139,
                          "end": 143
                        }
                      ],
                      "start": 131,
                      "end": 143
                    },
                    "start": 129,
                    "end": 143
                  },
                  "start": 128,
                  "end": 143
                },
                "init": null,
                "definite": false,
                "start": 128,
                "end": 143
              }
            ],
            "declare": false,
            "start": 124,
            "end": 144
          }
        ],
        "start": 63,
        "end": 146
      },
      "expression": false,
      "start": 49,
      "end": 146
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null,
        "start": 157,
        "end": 159
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
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 163,
                    "end": 167
                  },
                  "start": 163,
                  "end": 167
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": false,
                    "raw": "false",
                    "start": 170,
                    "end": 175
                  },
                  "start": 170,
                  "end": 175
                }
              ],
              "start": 163,
              "end": 175
            },
            "start": 161,
            "end": 175
          },
          "start": 160,
          "end": 175
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSBooleanKeyword",
              "start": 180,
              "end": 187
            },
            "start": 178,
            "end": 187
          },
          "start": 177,
          "end": 187
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
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 195,
                "end": 196
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 199,
                "end": 200
              },
              "start": 195,
              "end": 200
            },
            "directive": null,
            "start": 195,
            "end": 201
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 206,
                "end": 207
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 210,
                "end": 211
              },
              "start": 206,
              "end": 211
            },
            "directive": null,
            "start": 206,
            "end": 212
          }
        ],
        "start": 189,
        "end": 214
      },
      "expression": false,
      "start": 148,
      "end": 214
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f3",
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
          "type": "Identifier",
          "decorators": [],
          "name": "a",
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
                    "value": true,
                    "raw": "true",
                    "start": 231,
                    "end": 235
                  },
                  "start": 231,
                  "end": 235
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": false,
                    "raw": "false",
                    "start": 238,
                    "end": 243
                  },
                  "start": 238,
                  "end": 243
                }
              ],
              "start": 231,
              "end": 243
            },
            "start": 229,
            "end": 243
          },
          "start": 228,
          "end": 243
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
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
                    "value": true,
                    "raw": "true",
                    "start": 248,
                    "end": 252
                  },
                  "start": 248,
                  "end": 252
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": false,
                    "raw": "false",
                    "start": 255,
                    "end": 260
                  },
                  "start": 255,
                  "end": 260
                }
              ],
              "start": 248,
              "end": 260
            },
            "start": 246,
            "end": 260
          },
          "start": 245,
          "end": 260
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 272,
                  "end": 273
                },
                "init": {
                  "type": "LogicalExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 276,
                    "end": 277
                  },
                  "operator": "||",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 281,
                    "end": 282
                  },
                  "start": 276,
                  "end": 282
                },
                "definite": false,
                "start": 272,
                "end": 282
              }
            ],
            "declare": false,
            "start": 268,
            "end": 283
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
                  "typeAnnotation": null,
                  "start": 292,
                  "end": 293
                },
                "init": {
                  "type": "LogicalExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 296,
                    "end": 297
                  },
                  "operator": "&&",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 301,
                    "end": 302
                  },
                  "start": 296,
                  "end": 302
                },
                "definite": false,
                "start": 292,
                "end": 302
              }
            ],
            "declare": false,
            "start": 288,
            "end": 303
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
                  "typeAnnotation": null,
                  "start": 312,
                  "end": 313
                },
                "init": {
                  "type": "UnaryExpression",
                  "operator": "!",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 317,
                    "end": 318
                  },
                  "prefix": true,
                  "start": 316,
                  "end": 318
                },
                "definite": false,
                "start": 312,
                "end": 318
              }
            ],
            "declare": false,
            "start": 308,
            "end": 319
          }
        ],
        "start": 262,
        "end": 321
      },
      "expression": false,
      "start": 216,
      "end": 321
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f4",
        "optional": false,
        "typeAnnotation": null,
        "start": 332,
        "end": 334
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "t",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": true,
                "raw": "true",
                "start": 338,
                "end": 342
              },
              "start": 338,
              "end": 342
            },
            "start": 336,
            "end": 342
          },
          "start": 335,
          "end": 342
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": false,
                "raw": "false",
                "start": 347,
                "end": 352
              },
              "start": 347,
              "end": 352
            },
            "start": 345,
            "end": 352
          },
          "start": 344,
          "end": 352
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
                  "name": "x1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 364,
                  "end": 366
                },
                "init": {
                  "type": "LogicalExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 369,
                    "end": 370
                  },
                  "operator": "&&",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "f",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 374,
                    "end": 375
                  },
                  "start": 369,
                  "end": 375
                },
                "definite": false,
                "start": 364,
                "end": 375
              }
            ],
            "declare": false,
            "start": 360,
            "end": 376
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
                  "name": "x2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 385,
                  "end": 387
                },
                "init": {
                  "type": "LogicalExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "f",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 390,
                    "end": 391
                  },
                  "operator": "&&",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 395,
                    "end": 396
                  },
                  "start": 390,
                  "end": 396
                },
                "definite": false,
                "start": 385,
                "end": 396
              }
            ],
            "declare": false,
            "start": 381,
            "end": 397
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
                  "name": "x3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 406,
                  "end": 408
                },
                "init": {
                  "type": "LogicalExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 411,
                    "end": 412
                  },
                  "operator": "||",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "f",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 416,
                    "end": 417
                  },
                  "start": 411,
                  "end": 417
                },
                "definite": false,
                "start": 406,
                "end": 417
              }
            ],
            "declare": false,
            "start": 402,
            "end": 418
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
                  "name": "x4",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 427,
                  "end": 429
                },
                "init": {
                  "type": "LogicalExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "f",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 432,
                    "end": 433
                  },
                  "operator": "||",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 437,
                    "end": 438
                  },
                  "start": 432,
                  "end": 438
                },
                "definite": false,
                "start": 427,
                "end": 438
              }
            ],
            "declare": false,
            "start": 423,
            "end": 439
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
                  "name": "x5",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 448,
                  "end": 450
                },
                "init": {
                  "type": "UnaryExpression",
                  "operator": "!",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 454,
                    "end": 455
                  },
                  "prefix": true,
                  "start": 453,
                  "end": 455
                },
                "definite": false,
                "start": 448,
                "end": 455
              }
            ],
            "declare": false,
            "start": 444,
            "end": 456
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
                  "name": "x6",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 465,
                  "end": 467
                },
                "init": {
                  "type": "UnaryExpression",
                  "operator": "!",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "f",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 471,
                    "end": 472
                  },
                  "prefix": true,
                  "start": 470,
                  "end": 472
                },
                "definite": false,
                "start": 465,
                "end": 472
              }
            ],
            "declare": false,
            "start": 461,
            "end": 473
          }
        ],
        "start": 354,
        "end": 475
      },
      "expression": false,
      "start": 323,
      "end": 475
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "g",
        "optional": false,
        "typeAnnotation": null,
        "start": 494,
        "end": 495
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": true,
                "raw": "true",
                "start": 499,
                "end": 503
              },
              "start": 499,
              "end": 503
            },
            "start": 497,
            "end": 503
          },
          "start": 496,
          "end": 503
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 506,
          "end": 512
        },
        "start": 504,
        "end": 512
      },
      "body": null,
      "expression": false,
      "start": 477,
      "end": 513
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "g",
        "optional": false,
        "typeAnnotation": null,
        "start": 531,
        "end": 532
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": false,
                "raw": "false",
                "start": 536,
                "end": 541
              },
              "start": 536,
              "end": 541
            },
            "start": 534,
            "end": 541
          },
          "start": 533,
          "end": 541
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSBooleanKeyword",
          "start": 544,
          "end": 551
        },
        "start": 542,
        "end": 551
      },
      "body": null,
      "expression": false,
      "start": 514,
      "end": 552
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "g",
        "optional": false,
        "typeAnnotation": null,
        "start": 570,
        "end": 571
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "type": "TSBooleanKeyword",
              "start": 575,
              "end": 582
            },
            "start": 573,
            "end": 582
          },
          "start": 572,
          "end": 582
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 585,
          "end": 591
        },
        "start": 583,
        "end": 591
      },
      "body": null,
      "expression": false,
      "start": 553,
      "end": 592
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f5",
        "optional": false,
        "typeAnnotation": null,
        "start": 603,
        "end": 605
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSBooleanKeyword",
              "start": 609,
              "end": 616
            },
            "start": 607,
            "end": 616
          },
          "start": 606,
          "end": 616
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
                  "name": "z1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 628,
                  "end": 630
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "g",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 633,
                    "end": 634
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": true,
                      "raw": "true",
                      "start": 635,
                      "end": 639
                    }
                  ],
                  "optional": false,
                  "start": 633,
                  "end": 640
                },
                "definite": false,
                "start": 628,
                "end": 640
              }
            ],
            "declare": false,
            "start": 624,
            "end": 641
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
                  "name": "z2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 650,
                  "end": 652
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "g",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 655,
                    "end": 656
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": false,
                      "raw": "false",
                      "start": 657,
                      "end": 662
                    }
                  ],
                  "optional": false,
                  "start": 655,
                  "end": 663
                },
                "definite": false,
                "start": 650,
                "end": 663
              }
            ],
            "declare": false,
            "start": 646,
            "end": 664
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
                  "name": "z3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 673,
                  "end": 675
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "g",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 678,
                    "end": 679
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 680,
                      "end": 681
                    }
                  ],
                  "optional": false,
                  "start": 678,
                  "end": 682
                },
                "definite": false,
                "start": 673,
                "end": 682
              }
            ],
            "declare": false,
            "start": 669,
            "end": 683
          }
        ],
        "start": 618,
        "end": 685
      },
      "expression": false,
      "start": 594,
      "end": 685
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "assertNever",
        "optional": false,
        "typeAnnotation": null,
        "start": 696,
        "end": 707
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
              "type": "TSNeverKeyword",
              "start": 711,
              "end": 716
            },
            "start": 709,
            "end": 716
          },
          "start": 708,
          "end": 716
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSNeverKeyword",
          "start": 719,
          "end": 724
        },
        "start": 717,
        "end": 724
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ThrowStatement",
            "argument": {
              "type": "NewExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "Error",
                "optional": false,
                "typeAnnotation": null,
                "start": 741,
                "end": 746
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": "Unexpected value",
                  "raw": "\"Unexpected value\"",
                  "start": 747,
                  "end": 765
                }
              ],
              "start": 737,
              "end": 766
            },
            "start": 731,
            "end": 767
          }
        ],
        "start": 725,
        "end": 769
      },
      "expression": false,
      "start": 687,
      "end": 769
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f10",
        "optional": false,
        "typeAnnotation": null,
        "start": 780,
        "end": 783
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
                    "value": true,
                    "raw": "true",
                    "start": 787,
                    "end": 791
                  },
                  "start": 787,
                  "end": 791
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": false,
                    "raw": "false",
                    "start": 794,
                    "end": 799
                  },
                  "start": 794,
                  "end": 799
                }
              ],
              "start": 787,
              "end": 799
            },
            "start": 785,
            "end": 799
          },
          "start": 784,
          "end": 799
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "SwitchStatement",
            "discriminant": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 815,
              "end": 816
            },
            "cases": [
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": true,
                  "raw": "true",
                  "start": 833,
                  "end": 837
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": "true",
                      "raw": "\"true\"",
                      "start": 846,
                      "end": 852
                    },
                    "start": 839,
                    "end": 853
                  }
                ],
                "start": 828,
                "end": 853
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": false,
                  "raw": "false",
                  "start": 867,
                  "end": 872
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": "false",
                      "raw": "\"false\"",
                      "start": 881,
                      "end": 888
                    },
                    "start": 874,
                    "end": 889
                  }
                ],
                "start": 862,
                "end": 889
              }
            ],
            "start": 807,
            "end": 895
          }
        ],
        "start": 801,
        "end": 897
      },
      "expression": false,
      "start": 771,
      "end": 897
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f11",
        "optional": false,
        "typeAnnotation": null,
        "start": 908,
        "end": 911
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
                    "value": true,
                    "raw": "true",
                    "start": 915,
                    "end": 919
                  },
                  "start": 915,
                  "end": 919
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": false,
                    "raw": "false",
                    "start": 922,
                    "end": 927
                  },
                  "start": 922,
                  "end": 927
                }
              ],
              "start": 915,
              "end": 927
            },
            "start": 913,
            "end": 927
          },
          "start": 912,
          "end": 927
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "SwitchStatement",
            "discriminant": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 943,
              "end": 944
            },
            "cases": [
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": true,
                  "raw": "true",
                  "start": 961,
                  "end": 965
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": "true",
                      "raw": "\"true\"",
                      "start": 974,
                      "end": 980
                    },
                    "start": 967,
                    "end": 981
                  }
                ],
                "start": 956,
                "end": 981
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": false,
                  "raw": "false",
                  "start": 995,
                  "end": 1000
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": "false",
                      "raw": "\"false\"",
                      "start": 1009,
                      "end": 1016
                    },
                    "start": 1002,
                    "end": 1017
                  }
                ],
                "start": 990,
                "end": 1017
              }
            ],
            "start": 935,
            "end": 1023
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "assertNever",
                "optional": false,
                "typeAnnotation": null,
                "start": 1035,
                "end": 1046
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1047,
                  "end": 1048
                }
              ],
              "optional": false,
              "start": 1035,
              "end": 1049
            },
            "start": 1028,
            "end": 1050
          }
        ],
        "start": 929,
        "end": 1052
      },
      "expression": false,
      "start": 899,
      "end": 1052
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f12",
        "optional": false,
        "typeAnnotation": null,
        "start": 1063,
        "end": 1066
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
                    "value": true,
                    "raw": "true",
                    "start": 1070,
                    "end": 1074
                  },
                  "start": 1070,
                  "end": 1074
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": false,
                    "raw": "false",
                    "start": 1077,
                    "end": 1082
                  },
                  "start": 1077,
                  "end": 1082
                }
              ],
              "start": 1070,
              "end": 1082
            },
            "start": 1068,
            "end": 1082
          },
          "start": 1067,
          "end": 1082
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 1094,
              "end": 1095
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1107,
                    "end": 1108
                  },
                  "directive": null,
                  "start": 1107,
                  "end": 1109
                }
              ],
              "start": 1097,
              "end": 1115
            },
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1135,
                    "end": 1136
                  },
                  "directive": null,
                  "start": 1135,
                  "end": 1137
                }
              ],
              "start": 1125,
              "end": 1143
            },
            "start": 1090,
            "end": 1143
          }
        ],
        "start": 1084,
        "end": 1145
      },
      "expression": false,
      "start": 1054,
      "end": 1145
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f13",
        "optional": false,
        "typeAnnotation": null,
        "start": 1156,
        "end": 1159
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
                    "value": true,
                    "raw": "true",
                    "start": 1163,
                    "end": 1167
                  },
                  "start": 1163,
                  "end": 1167
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": false,
                    "raw": "false",
                    "start": 1170,
                    "end": 1175
                  },
                  "start": 1170,
                  "end": 1175
                }
              ],
              "start": 1163,
              "end": 1175
            },
            "start": 1161,
            "end": 1175
          },
          "start": 1160,
          "end": 1175
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
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 1187,
                "end": 1188
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": true,
                "raw": "true",
                "start": 1193,
                "end": 1197
              },
              "start": 1187,
              "end": 1197
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1209,
                    "end": 1210
                  },
                  "directive": null,
                  "start": 1209,
                  "end": 1211
                }
              ],
              "start": 1199,
              "end": 1217
            },
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1237,
                    "end": 1238
                  },
                  "directive": null,
                  "start": 1237,
                  "end": 1239
                }
              ],
              "start": 1227,
              "end": 1245
            },
            "start": 1183,
            "end": 1245
          }
        ],
        "start": 1177,
        "end": 1247
      },
      "expression": false,
      "start": 1147,
      "end": 1247
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Item",
        "optional": false,
        "typeAnnotation": null,
        "start": 1254,
        "end": 1258
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
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
                  "name": "kind",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1267,
                  "end": 1271
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": true,
                      "raw": "true",
                      "start": 1273,
                      "end": 1277
                    },
                    "start": 1273,
                    "end": 1277
                  },
                  "start": 1271,
                  "end": 1277
                },
                "accessibility": null,
                "static": false,
                "start": 1267,
                "end": 1278
              },
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
                  "start": 1279,
                  "end": 1280
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1282,
                    "end": 1288
                  },
                  "start": 1280,
                  "end": 1288
                },
                "accessibility": null,
                "static": false,
                "start": 1279,
                "end": 1288
              }
            ],
            "start": 1265,
            "end": 1290
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
                  "name": "kind",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1299,
                  "end": 1303
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": false,
                      "raw": "false",
                      "start": 1305,
                      "end": 1310
                    },
                    "start": 1305,
                    "end": 1310
                  },
                  "start": 1303,
                  "end": 1310
                },
                "accessibility": null,
                "static": false,
                "start": 1299,
                "end": 1311
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
                  "start": 1312,
                  "end": 1313
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1315,
                    "end": 1321
                  },
                  "start": 1313,
                  "end": 1321
                },
                "accessibility": null,
                "static": false,
                "start": 1312,
                "end": 1321
              }
            ],
            "start": 1297,
            "end": 1323
          }
        ],
        "start": 1265,
        "end": 1323
      },
      "declare": false,
      "start": 1249,
      "end": 1324
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f20",
        "optional": false,
        "typeAnnotation": null,
        "start": 1335,
        "end": 1338
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
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Item",
                "optional": false,
                "typeAnnotation": null,
                "start": 1342,
                "end": 1346
              },
              "typeArguments": null,
              "start": 1342,
              "end": 1346
            },
            "start": 1340,
            "end": 1346
          },
          "start": 1339,
          "end": 1346
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "SwitchStatement",
            "discriminant": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 1362,
                "end": 1363
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "kind",
                "optional": false,
                "typeAnnotation": null,
                "start": 1364,
                "end": 1368
              },
              "optional": false,
              "computed": false,
              "start": 1362,
              "end": 1368
            },
            "cases": [
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": true,
                  "raw": "true",
                  "start": 1385,
                  "end": 1389
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1398,
                        "end": 1399
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1400,
                        "end": 1401
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1398,
                      "end": 1401
                    },
                    "start": 1391,
                    "end": 1402
                  }
                ],
                "start": 1380,
                "end": 1402
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": false,
                  "raw": "false",
                  "start": 1416,
                  "end": 1421
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1430,
                        "end": 1431
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1432,
                        "end": 1433
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1430,
                      "end": 1433
                    },
                    "start": 1423,
                    "end": 1434
                  }
                ],
                "start": 1411,
                "end": 1434
              }
            ],
            "start": 1354,
            "end": 1440
          }
        ],
        "start": 1348,
        "end": 1442
      },
      "expression": false,
      "start": 1326,
      "end": 1442
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f21",
        "optional": false,
        "typeAnnotation": null,
        "start": 1453,
        "end": 1456
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
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Item",
                "optional": false,
                "typeAnnotation": null,
                "start": 1460,
                "end": 1464
              },
              "typeArguments": null,
              "start": 1460,
              "end": 1464
            },
            "start": 1458,
            "end": 1464
          },
          "start": 1457,
          "end": 1464
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "SwitchStatement",
            "discriminant": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 1480,
                "end": 1481
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "kind",
                "optional": false,
                "typeAnnotation": null,
                "start": 1482,
                "end": 1486
              },
              "optional": false,
              "computed": false,
              "start": 1480,
              "end": 1486
            },
            "cases": [
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": true,
                  "raw": "true",
                  "start": 1503,
                  "end": 1507
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1516,
                        "end": 1517
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1518,
                        "end": 1519
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1516,
                      "end": 1519
                    },
                    "start": 1509,
                    "end": 1520
                  }
                ],
                "start": 1498,
                "end": 1520
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": false,
                  "raw": "false",
                  "start": 1534,
                  "end": 1539
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1548,
                        "end": 1549
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1550,
                        "end": 1551
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1548,
                      "end": 1551
                    },
                    "start": 1541,
                    "end": 1552
                  }
                ],
                "start": 1529,
                "end": 1552
              }
            ],
            "start": 1472,
            "end": 1558
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "assertNever",
                "optional": false,
                "typeAnnotation": null,
                "start": 1570,
                "end": 1581
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1582,
                  "end": 1583
                }
              ],
              "optional": false,
              "start": 1570,
              "end": 1584
            },
            "start": 1563,
            "end": 1585
          }
        ],
        "start": 1466,
        "end": 1587
      },
      "expression": false,
      "start": 1444,
      "end": 1587
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1587
}
```
