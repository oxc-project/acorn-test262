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
        "name": "f1",
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
          "type": "AssignmentPattern",
          "decorators": [],
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "required",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnknownKeyword",
                "start": 25,
                "end": 32
              },
              "start": 23,
              "end": 32
            },
            "start": 15,
            "end": 32
          },
          "right": {
            "type": "CallExpression",
            "callee": {
              "type": "ArrowFunctionExpression",
              "expression": false,
              "async": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
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
                        "start": 58,
                        "end": 63
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "value": "bad",
                          "raw": "\"bad\"",
                          "start": 64,
                          "end": 69
                        }
                      ],
                      "start": 54,
                      "end": 70
                    },
                    "start": 48,
                    "end": 71
                  }
                ],
                "start": 42,
                "end": 75
              },
              "id": null,
              "generator": false,
              "start": 36,
              "end": 75
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 35,
            "end": 78
          },
          "optional": false,
          "typeAnnotation": null,
          "start": 15,
          "end": 78
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
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 85,
                  "end": 92
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 93,
                  "end": 96
                },
                "optional": false,
                "computed": false,
                "start": 85,
                "end": 96
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": "ok",
                  "raw": "\"ok\"",
                  "start": 97,
                  "end": 101
                }
              ],
              "optional": false,
              "start": 85,
              "end": 102
            },
            "directive": null,
            "start": 85,
            "end": 103
          }
        ],
        "start": 81,
        "end": 156
      },
      "expression": false,
      "start": 0,
      "end": 156
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null,
        "start": 167,
        "end": 169
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
                  "type": "TSNumberKeyword",
                  "start": 176,
                  "end": 182
                },
                {
                  "type": "TSStringKeyword",
                  "start": 185,
                  "end": 191
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 194,
                  "end": 203
                }
              ],
              "start": 176,
              "end": 203
            },
            "start": 174,
            "end": 203
          },
          "start": 173,
          "end": 203
        },
        {
          "type": "AssignmentPattern",
          "decorators": [],
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "required",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnknownKeyword",
                "start": 217,
                "end": 224
              },
              "start": 215,
              "end": 224
            },
            "start": 207,
            "end": 224
          },
          "right": {
            "type": "CallExpression",
            "callee": {
              "type": "ArrowFunctionExpression",
              "expression": false,
              "async": false,
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
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 240,
                        "end": 241
                      },
                      "right": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 244,
                        "end": 245
                      },
                      "start": 240,
                      "end": 245
                    },
                    "directive": null,
                    "start": 240,
                    "end": 246
                  }
                ],
                "start": 234,
                "end": 250
              },
              "id": null,
              "generator": false,
              "start": 228,
              "end": 250
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 227,
            "end": 253
          },
          "optional": false,
          "typeAnnotation": null,
          "start": 207,
          "end": 253
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 260,
              "end": 261
            },
            "directive": null,
            "start": 260,
            "end": 262
          }
        ],
        "start": 256,
        "end": 305
      },
      "expression": false,
      "start": 158,
      "end": 305
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null,
        "start": 316,
        "end": 318
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "AssignmentPattern",
          "decorators": [],
          "left": {
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
                    "type": "TSNumberKeyword",
                    "start": 325,
                    "end": 331
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 334,
                    "end": 340
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 343,
                    "end": 352
                  }
                ],
                "start": 325,
                "end": 352
              },
              "start": 323,
              "end": 352
            },
            "start": 322,
            "end": 352
          },
          "right": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 355,
            "end": 356
          },
          "optional": false,
          "typeAnnotation": null,
          "start": 322,
          "end": 356
        },
        {
          "type": "AssignmentPattern",
          "decorators": [],
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "required",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnknownKeyword",
                "start": 370,
                "end": 377
              },
              "start": 368,
              "end": 377
            },
            "start": 360,
            "end": 377
          },
          "right": {
            "type": "CallExpression",
            "callee": {
              "type": "ArrowFunctionExpression",
              "expression": false,
              "async": false,
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
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 393,
                        "end": 394
                      },
                      "right": {
                        "type": "Literal",
                        "value": "",
                        "raw": "\"\"",
                        "start": 397,
                        "end": 399
                      },
                      "start": 393,
                      "end": 399
                    },
                    "directive": null,
                    "start": 393,
                    "end": 400
                  }
                ],
                "start": 387,
                "end": 404
              },
              "id": null,
              "generator": false,
              "start": 381,
              "end": 404
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 380,
            "end": 407
          },
          "optional": false,
          "typeAnnotation": null,
          "start": 360,
          "end": 407
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 414,
              "end": 415
            },
            "directive": null,
            "start": 414,
            "end": 416
          }
        ],
        "start": 410,
        "end": 447
      },
      "expression": false,
      "start": 307,
      "end": 447
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f4",
        "optional": false,
        "typeAnnotation": null,
        "start": 458,
        "end": 460
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "AssignmentPattern",
          "decorators": [],
          "left": {
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
                    "type": "TSNumberKeyword",
                    "start": 467,
                    "end": 473
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 476,
                    "end": 482
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 485,
                    "end": 494
                  }
                ],
                "start": 467,
                "end": 494
              },
              "start": 465,
              "end": 494
            },
            "start": 464,
            "end": 494
          },
          "right": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 497,
            "end": 498
          },
          "optional": false,
          "typeAnnotation": null,
          "start": 464,
          "end": 498
        },
        {
          "type": "AssignmentPattern",
          "decorators": [],
          "left": {
            "type": "ObjectPattern",
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "AssignmentExpression",
                  "operator": "=",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 506,
                    "end": 507
                  },
                  "right": {
                    "type": "Literal",
                    "value": "",
                    "raw": "\"\"",
                    "start": 510,
                    "end": 512
                  },
                  "start": 506,
                  "end": 512
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 516,
                  "end": 517
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 504,
                "end": 517
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 502,
            "end": 519
          },
          "right": {
            "type": "TSAsExpression",
            "expression": {
              "type": "ObjectExpression",
              "properties": [],
              "start": 522,
              "end": 524
            },
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 528,
              "end": 531
            },
            "start": 522,
            "end": 531
          },
          "optional": false,
          "typeAnnotation": null,
          "start": 502,
          "end": 531
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 538,
              "end": 539
            },
            "directive": null,
            "start": 538,
            "end": 540
          }
        ],
        "start": 534,
        "end": 562
      },
      "expression": false,
      "start": 449,
      "end": 562
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 562
}
```
