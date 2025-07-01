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
        "name": "fold",
        "optional": false,
        "typeAnnotation": null,
        "start": 32,
        "end": 36
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
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 37,
              "end": 38
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 37,
            "end": 38
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "r",
              "optional": false,
              "typeAnnotation": null,
              "start": 40,
              "end": 41
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 40,
            "end": 41
          }
        ],
        "start": 36,
        "end": 42
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "values",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 51,
                  "end": 52
                },
                "typeArguments": null,
                "start": 51,
                "end": 52
              },
              "start": 51,
              "end": 54
            },
            "start": 49,
            "end": 54
          },
          "start": 43,
          "end": 54
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "result",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "r",
                "optional": false,
                "typeAnnotation": null,
                "start": 64,
                "end": 65
              },
              "typeArguments": null,
              "start": 64,
              "end": 65
            },
            "start": 62,
            "end": 65
          },
          "start": 56,
          "end": 65
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "fold",
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
                  "name": "result",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "r",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 82,
                        "end": 83
                      },
                      "typeArguments": null,
                      "start": 82,
                      "end": 83
                    },
                    "start": 80,
                    "end": 83
                  },
                  "start": 74,
                  "end": 83
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 92,
                        "end": 93
                      },
                      "typeArguments": null,
                      "start": 92,
                      "end": 93
                    },
                    "start": 90,
                    "end": 93
                  },
                  "start": 85,
                  "end": 93
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "r",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 98,
                    "end": 99
                  },
                  "typeArguments": null,
                  "start": 98,
                  "end": 99
                },
                "start": 95,
                "end": 99
              },
              "start": 73,
              "end": 99
            },
            "start": 71,
            "end": 99
          },
          "start": 67,
          "end": 99
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "r",
            "optional": false,
            "typeAnnotation": null,
            "start": 102,
            "end": 103
          },
          "typeArguments": null,
          "start": 102,
          "end": 103
        },
        "start": 100,
        "end": 103
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ForOfStatement",
            "await": false,
            "left": {
              "type": "VariableDeclaration",
              "kind": "let",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 119,
                    "end": 124
                  },
                  "init": null,
                  "definite": false,
                  "start": 119,
                  "end": 124
                }
              ],
              "declare": false,
              "start": 115,
              "end": 124
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "values",
              "optional": false,
              "typeAnnotation": null,
              "start": 128,
              "end": 134
            },
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
                      "name": "result",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 146,
                      "end": 152
                    },
                    "right": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "fold",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 155,
                        "end": 159
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "result",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 160,
                          "end": 166
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "value",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 168,
                          "end": 173
                        }
                      ],
                      "optional": false,
                      "start": 155,
                      "end": 174
                    },
                    "start": 146,
                    "end": 174
                  },
                  "directive": null,
                  "start": 146,
                  "end": 175
                }
              ],
              "start": 136,
              "end": 181
            },
            "start": 110,
            "end": 181
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "result",
              "optional": false,
              "typeAnnotation": null,
              "start": 193,
              "end": 199
            },
            "start": 186,
            "end": 200
          }
        ],
        "start": 104,
        "end": 202
      },
      "expression": false,
      "start": 23,
      "end": 202
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "append",
        "optional": false,
        "typeAnnotation": null,
        "start": 213,
        "end": 219
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
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 220,
              "end": 221
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 220,
            "end": 221
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 223,
              "end": 224
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 233,
                "end": 234
              },
              "typeArguments": null,
              "start": 233,
              "end": 234
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 223,
            "end": 234
          }
        ],
        "start": 219,
        "end": 235
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "values",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 244,
                  "end": 245
                },
                "typeArguments": null,
                "start": 244,
                "end": 245
              },
              "start": 244,
              "end": 247
            },
            "start": 242,
            "end": 247
          },
          "start": 236,
          "end": 247
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 256,
                "end": 257
              },
              "typeArguments": null,
              "start": 256,
              "end": 257
            },
            "start": 254,
            "end": 257
          },
          "start": 249,
          "end": 257
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSArrayType",
          "elementType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 260,
              "end": 261
            },
            "typeArguments": null,
            "start": 260,
            "end": 261
          },
          "start": 260,
          "end": 263
        },
        "start": 258,
        "end": 263
      },
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
                  "name": "values",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 270,
                  "end": 276
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "push",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 277,
                  "end": 281
                },
                "optional": false,
                "computed": false,
                "start": 270,
                "end": 281
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 282,
                  "end": 287
                }
              ],
              "optional": false,
              "start": 270,
              "end": 288
            },
            "directive": null,
            "start": 270,
            "end": 289
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "values",
              "optional": false,
              "typeAnnotation": null,
              "start": 301,
              "end": 307
            },
            "start": 294,
            "end": 308
          }
        ],
        "start": 264,
        "end": 310
      },
      "expression": false,
      "start": 204,
      "end": 310
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "fold",
          "optional": false,
          "typeAnnotation": null,
          "start": 312,
          "end": 316
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 323,
                "end": 324
              },
              {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 326,
                "end": 327
              },
              {
                "type": "Literal",
                "value": 3,
                "raw": "3",
                "start": 329,
                "end": 330
              }
            ],
            "start": 322,
            "end": 331
          },
          {
            "type": "TSAsExpression",
            "expression": {
              "type": "ArrayExpression",
              "elements": [],
              "start": 337,
              "end": 339
            },
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSStringKeyword",
                    "start": 344,
                    "end": 350
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 352,
                    "end": 358
                  }
                ],
                "start": 343,
                "end": 359
              },
              "start": 343,
              "end": 361
            },
            "start": 337,
            "end": 361
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
                "name": "result",
                "optional": false,
                "typeAnnotation": null,
                "start": 368,
                "end": 374
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": null,
                "start": 376,
                "end": 381
              }
            ],
            "returnType": null,
            "body": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "append",
                "optional": false,
                "typeAnnotation": null,
                "start": 386,
                "end": 392
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "result",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 402,
                  "end": 408
                },
                {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Literal",
                      "value": "",
                      "raw": "\"\"",
                      "start": 419,
                      "end": 421
                    },
                    {
                      "type": "Literal",
                      "value": "",
                      "raw": "\"\"",
                      "start": 423,
                      "end": 425
                    }
                  ],
                  "start": 418,
                  "end": 426
                }
              ],
              "optional": false,
              "start": 386,
              "end": 432
            },
            "id": null,
            "generator": false,
            "start": 367,
            "end": 432
          }
        ],
        "optional": false,
        "start": 312,
        "end": 434
      },
      "directive": null,
      "start": 312,
      "end": 435
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 23,
  "end": 435
}
```
