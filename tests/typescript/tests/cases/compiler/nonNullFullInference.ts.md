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
        "name": "testNonNullInference",
        "optional": false,
        "typeAnnotation": null,
        "start": 66,
        "end": 86
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "numbers",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSNumberKeyword",
                "start": 96,
                "end": 102
              },
              "start": 96,
              "end": 104
            },
            "start": 94,
            "end": 104
          },
          "start": 87,
          "end": 104
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
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
                  "name": "last",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 116,
                  "end": 120
                },
                "init": null,
                "definite": false,
                "start": 116,
                "end": 120
              }
            ],
            "declare": false,
            "start": 112,
            "end": 121
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
                    "name": "n",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 138,
                    "end": 139
                  },
                  "init": null,
                  "definite": false,
                  "start": 138,
                  "end": 139
                }
              ],
              "declare": false,
              "start": 132,
              "end": 139
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "numbers",
              "optional": false,
              "typeAnnotation": null,
              "start": 143,
              "end": 150
            },
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
                      "name": "n",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 166,
                      "end": 167
                    },
                    "operator": "%",
                    "right": {
                      "type": "Literal",
                      "value": 2,
                      "raw": "2",
                      "start": 170,
                      "end": 171
                    },
                    "start": 166,
                    "end": 171
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "n",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 194,
                          "end": 195
                        },
                        "start": 187,
                        "end": 196
                      }
                    ],
                    "start": 173,
                    "end": 206
                  },
                  "alternate": null,
                  "start": 162,
                  "end": 206
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "last",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 216,
                      "end": 220
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "n",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 223,
                      "end": 224
                    },
                    "start": 216,
                    "end": 224
                  },
                  "directive": null,
                  "start": 216,
                  "end": 225
                }
              ],
              "start": 152,
              "end": 231
            },
            "start": 127,
            "end": 231
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "last",
              "optional": false,
              "typeAnnotation": null,
              "start": 237,
              "end": 241
            },
            "directive": null,
            "start": 237,
            "end": 242
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "TSNonNullExpression",
              "expression": {
                "type": "Identifier",
                "decorators": [],
                "name": "last",
                "optional": false,
                "typeAnnotation": null,
                "start": 247,
                "end": 251
              },
              "start": 247,
              "end": 252
            },
            "directive": null,
            "start": 247,
            "end": 253
          }
        ],
        "start": 106,
        "end": 255
      },
      "expression": false,
      "start": 57,
      "end": 255
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "testNonNullInferenceWithArrays",
        "optional": false,
        "typeAnnotation": null,
        "start": 266,
        "end": 296
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "numbers",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSNumberKeyword",
                "start": 306,
                "end": 312
              },
              "start": 306,
              "end": 314
            },
            "start": 304,
            "end": 314
          },
          "start": 297,
          "end": 314
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
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
                  "name": "result",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 326,
                  "end": 332
                },
                "init": null,
                "definite": false,
                "start": 326,
                "end": 332
              }
            ],
            "declare": false,
            "start": 322,
            "end": 333
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
                  "typeAnnotation": null,
                  "start": 344,
                  "end": 347
                },
                "init": {
                  "type": "ArrayExpression",
                  "elements": [],
                  "start": 350,
                  "end": 352
                },
                "definite": false,
                "start": 344,
                "end": 352
              }
            ],
            "declare": false,
            "start": 338,
            "end": 353
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
                    "name": "n",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 370,
                    "end": 371
                  },
                  "init": null,
                  "definite": false,
                  "start": 370,
                  "end": 371
                }
              ],
              "declare": false,
              "start": 364,
              "end": 371
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "numbers",
              "optional": false,
              "typeAnnotation": null,
              "start": 375,
              "end": 382
            },
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
                      "name": "n",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 398,
                      "end": 399
                    },
                    "operator": "%",
                    "right": {
                      "type": "Literal",
                      "value": 2,
                      "raw": "2",
                      "start": 402,
                      "end": 403
                    },
                    "start": 398,
                    "end": 403
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "ArrayExpression",
                          "elements": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "n",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 427,
                              "end": 428
                            }
                          ],
                          "start": 426,
                          "end": 429
                        },
                        "start": 419,
                        "end": 430
                      }
                    ],
                    "start": 405,
                    "end": 440
                  },
                  "alternate": null,
                  "start": 394,
                  "end": 440
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "arr",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 450,
                        "end": 453
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "push",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 454,
                        "end": 458
                      },
                      "optional": false,
                      "computed": false,
                      "start": 450,
                      "end": 458
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "n",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 459,
                        "end": 460
                      }
                    ],
                    "optional": false,
                    "start": 450,
                    "end": 461
                  },
                  "directive": null,
                  "start": 450,
                  "end": 462
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "result",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 471,
                      "end": 477
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "arr",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 480,
                      "end": 483
                    },
                    "start": 471,
                    "end": 483
                  },
                  "directive": null,
                  "start": 471,
                  "end": 484
                }
              ],
              "start": 384,
              "end": 490
            },
            "start": 359,
            "end": 490
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "result",
              "optional": false,
              "typeAnnotation": null,
              "start": 496,
              "end": 502
            },
            "directive": null,
            "start": 496,
            "end": 503
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "TSNonNullExpression",
              "expression": {
                "type": "Identifier",
                "decorators": [],
                "name": "result",
                "optional": false,
                "typeAnnotation": null,
                "start": 508,
                "end": 514
              },
              "start": 508,
              "end": 515
            },
            "directive": null,
            "start": 508,
            "end": 516
          }
        ],
        "start": 316,
        "end": 518
      },
      "expression": false,
      "start": 257,
      "end": 518
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 57,
  "end": 518
}
```
