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
            "name": "sab",
            "optional": false,
            "typeAnnotation": null,
            "start": 6,
            "end": 9
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "SharedArrayBuffer",
              "optional": false,
              "typeAnnotation": null,
              "start": 16,
              "end": 33
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "BinaryExpression",
                "left": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Int32Array",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 34,
                    "end": 44
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "BYTES_PER_ELEMENT",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 45,
                    "end": 62
                  },
                  "optional": false,
                  "computed": false,
                  "start": 34,
                  "end": 62
                },
                "operator": "*",
                "right": {
                  "type": "Literal",
                  "value": 1024,
                  "raw": "1024",
                  "start": 65,
                  "end": 69
                },
                "start": 34,
                "end": 69
              }
            ],
            "start": 12,
            "end": 70
          },
          "definite": false,
          "start": 6,
          "end": 70
        }
      ],
      "declare": false,
      "start": 0,
      "end": 71
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
            "name": "int32",
            "optional": false,
            "typeAnnotation": null,
            "start": 78,
            "end": 83
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Int32Array",
              "optional": false,
              "typeAnnotation": null,
              "start": 90,
              "end": 100
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sab",
                "optional": false,
                "typeAnnotation": null,
                "start": 101,
                "end": 104
              }
            ],
            "start": 86,
            "end": 105
          },
          "definite": false,
          "start": 78,
          "end": 105
        }
      ],
      "declare": false,
      "start": 72,
      "end": 106
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
            "name": "sab64",
            "optional": false,
            "typeAnnotation": null,
            "start": 113,
            "end": 118
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "SharedArrayBuffer",
              "optional": false,
              "typeAnnotation": null,
              "start": 125,
              "end": 142
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "BinaryExpression",
                "left": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "BigInt64Array",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 143,
                    "end": 156
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "BYTES_PER_ELEMENT",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 157,
                    "end": 174
                  },
                  "optional": false,
                  "computed": false,
                  "start": 143,
                  "end": 174
                },
                "operator": "*",
                "right": {
                  "type": "Literal",
                  "value": 1024,
                  "raw": "1024",
                  "start": 177,
                  "end": 181
                },
                "start": 143,
                "end": 181
              }
            ],
            "start": 121,
            "end": 182
          },
          "definite": false,
          "start": 113,
          "end": 182
        }
      ],
      "declare": false,
      "start": 107,
      "end": 183
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
            "name": "int64",
            "optional": false,
            "typeAnnotation": null,
            "start": 190,
            "end": 195
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "BigInt64Array",
              "optional": false,
              "typeAnnotation": null,
              "start": 202,
              "end": 215
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sab64",
                "optional": false,
                "typeAnnotation": null,
                "start": 216,
                "end": 221
              }
            ],
            "start": 198,
            "end": 222
          },
          "definite": false,
          "start": 190,
          "end": 222
        }
      ],
      "declare": false,
      "start": 184,
      "end": 223
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
            "name": "waitValue",
            "optional": false,
            "typeAnnotation": null,
            "start": 230,
            "end": 239
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Atomics",
                "optional": false,
                "typeAnnotation": null,
                "start": 242,
                "end": 249
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "wait",
                "optional": false,
                "typeAnnotation": null,
                "start": 250,
                "end": 254
              },
              "optional": false,
              "computed": false,
              "start": 242,
              "end": 254
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "int32",
                "optional": false,
                "typeAnnotation": null,
                "start": 255,
                "end": 260
              },
              {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 262,
                "end": 263
              },
              {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 265,
                "end": 266
              }
            ],
            "optional": false,
            "start": 242,
            "end": 267
          },
          "definite": false,
          "start": 230,
          "end": 267
        }
      ],
      "declare": false,
      "start": 224,
      "end": 268
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ObjectPattern",
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "async",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 277,
                  "end": 282
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "async",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 277,
                  "end": 282
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false,
                "start": 277,
                "end": 282
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 284,
                  "end": 289
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 284,
                  "end": 289
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false,
                "start": 284,
                "end": 289
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 275,
            "end": 291
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Atomics",
                "optional": false,
                "typeAnnotation": null,
                "start": 294,
                "end": 301
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "waitAsync",
                "optional": false,
                "typeAnnotation": null,
                "start": 302,
                "end": 311
              },
              "optional": false,
              "computed": false,
              "start": 294,
              "end": 311
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "int32",
                "optional": false,
                "typeAnnotation": null,
                "start": 312,
                "end": 317
              },
              {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 319,
                "end": 320
              },
              {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 322,
                "end": 323
              }
            ],
            "optional": false,
            "start": 294,
            "end": 324
          },
          "definite": false,
          "start": 275,
          "end": 324
        }
      ],
      "declare": false,
      "start": 269,
      "end": 325
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ObjectPattern",
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "async",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 334,
                  "end": 339
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "async64",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 341,
                  "end": 348
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 334,
                "end": 348
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 350,
                  "end": 355
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value64",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 357,
                  "end": 364
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 350,
                "end": 364
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 332,
            "end": 366
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Atomics",
                "optional": false,
                "typeAnnotation": null,
                "start": 369,
                "end": 376
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "waitAsync",
                "optional": false,
                "typeAnnotation": null,
                "start": 377,
                "end": 386
              },
              "optional": false,
              "computed": false,
              "start": 369,
              "end": 386
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "int64",
                "optional": false,
                "typeAnnotation": null,
                "start": 387,
                "end": 392
              },
              {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 394,
                "end": 395
              },
              {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "BigInt",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 397,
                  "end": 403
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 404,
                    "end": 405
                  }
                ],
                "optional": false,
                "start": 397,
                "end": 406
              }
            ],
            "optional": false,
            "start": 369,
            "end": 407
          },
          "definite": false,
          "start": 332,
          "end": 407
        }
      ],
      "declare": false,
      "start": 326,
      "end": 408
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
            "name": "main",
            "optional": false,
            "typeAnnotation": null,
            "start": 416,
            "end": 420
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": true,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "IfStatement",
                  "test": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "async",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 445,
                    "end": 450
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "AwaitExpression",
                          "argument": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "value",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 468,
                            "end": 473
                          },
                          "start": 462,
                          "end": 473
                        },
                        "directive": null,
                        "start": 462,
                        "end": 474
                      }
                    ],
                    "start": 452,
                    "end": 480
                  },
                  "alternate": null,
                  "start": 441,
                  "end": 480
                },
                {
                  "type": "IfStatement",
                  "test": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "async64",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 489,
                    "end": 496
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "AwaitExpression",
                          "argument": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "value64",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 514,
                            "end": 521
                          },
                          "start": 508,
                          "end": 521
                        },
                        "directive": null,
                        "start": 508,
                        "end": 522
                      }
                    ],
                    "start": 498,
                    "end": 528
                  },
                  "alternate": null,
                  "start": 485,
                  "end": 528
                }
              ],
              "start": 435,
              "end": 530
            },
            "id": null,
            "generator": false,
            "start": 423,
            "end": 530
          },
          "definite": false,
          "start": 416,
          "end": 530
        }
      ],
      "declare": false,
      "start": 410,
      "end": 530
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "main",
          "optional": false,
          "typeAnnotation": null,
          "start": 531,
          "end": 535
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 531,
        "end": 537
      },
      "directive": null,
      "start": 531,
      "end": 538
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 538
}
```
